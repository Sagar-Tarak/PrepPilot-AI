import QuestionAttempt from "./answers.schema.js";
import InterviewSession from "../sessions/sessions.schema.js";
import { callGemini } from "../ai/ai.service.js";
import { answerEvaluationPrompt } from "../ai/ai.prompts.js";
import { ApiError } from "../../common/middleware/error.middleware.js";
import { extractJSON, extractScore } from "../../common/utils/ai.utils.js";

/**
 * Evaluate user's answer and save attempt
 * @param {Object} data - { sessionId, userId, question, answer, role, topic, difficulty, experience }
 * @returns {Object} - { attempt, evaluation }
 */
export const evaluateAndSaveAnswer = async (data) => {
  const {
    sessionId,
    userId,
    question,
    answer,
    role,
    topic,
    difficulty = "medium",
    experience = 0,
  } = data;

  // Validate required fields
  if (!sessionId || !userId || !question || !answer || !role || !topic) {
    throw new ApiError(400, "Missing required fields for answer evaluation");
  }

  // Verify session exists and belongs to user
  const session = await InterviewSession.findById(sessionId);
  if (!session) {
    throw new ApiError(404, "Session not found");
  }
  if (session.userId.toString() !== userId) {
    throw new ApiError(403, "Not authorized to submit to this session");
  }
  if (session.endTime) {
    throw new ApiError(400, "Cannot submit answers to an ended session");
  }

  // Build evaluation prompt
  const prompt = answerEvaluationPrompt({
    question,
    answer,
    role,
    topic,
    experience,
  });

  // Call Gemini AI for evaluation
  const evaluationResponse = await callGemini(prompt);

  // Parse evaluation safely (expect JSON format)
  let evaluation = extractJSON(evaluationResponse);
  let score = 0;
  let feedbackText = "";

  if (evaluation) {
    score = evaluation.score || 0;

    // Build feedback text from structured response
    feedbackText = `Score: ${score}/10\n\n`;

    if (evaluation.overallFeedback) {
      feedbackText += `${evaluation.overallFeedback}\n\n`;
    }

    if (evaluation.strengths?.length > 0) {
      feedbackText += `Strengths:\n${evaluation.strengths.map((s) => `• ${s}`).join("\n")}\n\n`;
    }

    if (evaluation.weaknesses?.length > 0) {
      feedbackText += `Areas for Improvement:\n${evaluation.weaknesses.map((w) => `• ${w}`).join("\n")}\n\n`;
    }

    if (evaluation.suggestions?.length > 0) {
      feedbackText += `Suggestions:\n${evaluation.suggestions.map((s) => `• ${s}`).join("\n")}`;
    }
  } else {
    // If extraction fails, use raw response and try to extract score
    console.warn(
      "Failed to extract structured evaluation, falling back to raw response",
    );
    feedbackText = evaluationResponse;
    score = extractScore(evaluationResponse);
  }

  // Save question attempt
  const attempt = await QuestionAttempt.create({
    sessionId,
    userId,
    topic,
    difficulty,
    questionText: question,
    userAnswer: answer,
    score,
    feedback: feedbackText,
  });

  // Populate references
  await attempt.populate([
    { path: "userId", select: "name email" },
    { path: "sessionId", select: "startTime endTime avgScore" },
  ]);

  // Update session analytics
  await updateSessionAnalytics(sessionId);

  return {
    attempt,
    evaluation: evaluation || { raw: evaluationResponse },
  };
};

/**
 * Update session analytics after new answer submission
 * @param {string} sessionId - Session ID
 */
const updateSessionAnalytics = async (sessionId) => {
  try {
    // Get all attempts for this session
    const attempts = await QuestionAttempt.find({ sessionId });

    if (attempts.length === 0) return;

    // Calculate average score
    const totalScore = attempts.reduce(
      (sum, attempt) => sum + attempt.score,
      0,
    );
    const avgScore = Math.round((totalScore / attempts.length) * 10) / 10; // Round to 1 decimal

    // Get unique topics covered
    const topicsCovered = [...new Set(attempts.map((a) => a.topic))];

    // Update session
    await InterviewSession.findByIdAndUpdate(sessionId, {
      avgScore,
      topicsCovered,
    });
  } catch (error) {
    console.error("Failed to update session analytics:", error);
    // Don't throw - analytics update failure shouldn't block response
  }
};

/**
 * Get all attempts for a session
 * @param {string} sessionId - Session ID
 * @param {string} userId - User ID (for authorization)
 * @returns {Array} - List of attempts
 */
export const getSessionAttempts = async (sessionId, userId) => {
  // Verify session belongs to user
  const session = await InterviewSession.findById(sessionId);
  if (!session) {
    throw new ApiError(404, "Session not found");
  }
  if (session.userId.toString() !== userId) {
    throw new ApiError(403, "Not authorized to view this session");
  }

  const attempts = await QuestionAttempt.find({ sessionId })
    .sort({ createdAt: 1 })
    .populate("userId", "name email");

  return attempts;
};

/**
 * Get user's attempt history
 * @param {string} userId - User ID
 * @param {Object} options - { limit, skip, topic, difficulty }
 * @returns {Object} - { attempts, total, stats }
 */
export const getUserAttempts = async (userId, options = {}) => {
  const { limit = 20, skip = 0, topic, difficulty } = options;

  const query = { userId };
  if (topic) query.topic = topic;
  if (difficulty) query.difficulty = difficulty;

  const [attempts, total] = await Promise.all([
    QuestionAttempt.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .populate("sessionId", "startTime endTime"),
    QuestionAttempt.countDocuments(query),
  ]);

  // Calculate user stats
  const stats = {
    totalAttempts: total,
    avgScore: 0,
    topicBreakdown: {},
    difficultyBreakdown: {},
  };

  if (attempts.length > 0) {
    const allAttempts = await QuestionAttempt.find({ userId });

    stats.avgScore =
      Math.round(
        (allAttempts.reduce((sum, a) => sum + a.score, 0) /
          allAttempts.length) *
          10,
      ) / 10;

    // Topic breakdown
    allAttempts.forEach((attempt) => {
      stats.topicBreakdown[attempt.topic] =
        (stats.topicBreakdown[attempt.topic] || 0) + 1;
    });

    // Difficulty breakdown
    allAttempts.forEach((attempt) => {
      stats.difficultyBreakdown[attempt.difficulty] =
        (stats.difficultyBreakdown[attempt.difficulty] || 0) + 1;
    });
  }

  return {
    attempts,
    total,
    stats,
    page: Math.floor(skip / limit) + 1,
    pages: Math.ceil(total / limit),
  };
};
