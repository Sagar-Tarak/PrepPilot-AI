import {
  buildCacheKey,
  getFromCache,
  saveToCache,
} from "../ai/aiCache.service.js";
import { callGemini } from "../ai/ai.service.js";
import { questionGenerationPrompt } from "../ai/ai.prompts.js";
import { ApiError } from "../../common/middleware/error.middleware.js";
import { extractJSON } from "../../common/utils/ai.utils.js";

/**
 * Generate interview question with caching
 * @param {Object} params - { role, topic, difficulty, experience }
 * @returns {Object} - { question, fromCache, cacheKey }
 */
export const generateInterviewQuestion = async (params) => {
  const { role, topic, difficulty = "medium", experience = 0 } = params;

  // Validate required parameters
  if (!role || !topic) {
    throw new ApiError(400, "Role and topic are required");
  }

  // Normalize parameters for consistent caching
  const normalizedParams = {
    promptType: "question",
    role: role.trim(),
    topic: topic.trim(),
    difficulty: difficulty.toLowerCase(),
    experience: parseInt(experience) || 0,
    model: "gemini-2.0-flash-exp",
  };

  // Build cache key
  const cacheKey = buildCacheKey(normalizedParams);

  // Check cache first
  const cached = await getFromCache(cacheKey);
  if (cached) {
    return {
      question: cached.responseText,
      fromCache: true,
      cacheKey,
      cachedAt: cached.cachedAt,
    };
  }

  // Cache miss - generate new question
  const prompt = questionGenerationPrompt({
    role: normalizedParams.role,
    topic: normalizedParams.topic,
    difficulty: normalizedParams.difficulty,
    experience: normalizedParams.experience,
  });

  const question = await callGemini(prompt);

  // Save to cache (24 hour TTL)
  await saveToCache(
    {
      cacheKey,
      promptType: normalizedParams.promptType,
      role: normalizedParams.role,
      topic: normalizedParams.topic,
      difficulty: normalizedParams.difficulty,
      experience: normalizedParams.experience,
      model: normalizedParams.model,
      responseText: question,
    },
    24,
  );

  return {
    question,
    fromCache: false,
    cacheKey,
  };
};

/**
 * Generate hint with caching
 * @param {Object} params - { question, topic, difficulty }
 * @returns {Object} - { hint, fromCache, cacheKey }
 */
export const generateHint = async (params) => {
  const { question, topic, difficulty = "medium" } = params;

  if (!question || !topic) {
    throw new ApiError(400, "Question and topic are required");
  }

  // Build cache key from question hash + topic
  const normalizedParams = {
    promptType: "hint",
    role: "", // Not used for hints
    topic: topic.trim(),
    difficulty: difficulty.toLowerCase(),
    experience: 0, // Not used for hints
    model: "gemini-2.0-flash-exp",
  };

  const cacheKey = buildCacheKey({
    ...normalizedParams,
    role: question.substring(0, 50), // Use part of question for uniqueness
  });

  // Check cache
  const cached = await getFromCache(cacheKey);
  if (cached) {
    return {
      hint: cached.responseText,
      fromCache: true,
      cacheKey,
    };
  }

  // Generate hint
  const prompt = `You are a supportive technical interviewer. A candidate is struggling with this question:

Question: ${question}
Topic: ${topic}
Difficulty: ${difficulty}

Provide a helpful hint that:
1. Guides them toward the right approach without giving the answer
2. Is encouraging and supportive
3. Focuses on problem-solving strategy
4. Suggests what concept or approach to consider
5. Does not reveal the complete solution

Keep it brief (2-3 sentences). Start with "Hint:".`;

  const hint = await callGemini(prompt);

  // Save to cache (12 hour TTL for hints)
  await saveToCache(
    {
      cacheKey,
      promptType: normalizedParams.promptType,
      role: "",
      topic: normalizedParams.topic,
      difficulty: normalizedParams.difficulty,
      experience: 0,
      model: normalizedParams.model,
      responseText: hint,
    },
    12,
  );

  return {
    hint,
    fromCache: false,
    cacheKey,
  };
};

/**
 * Evaluate answer with caching
 * @param {Object} params - { question, answer, role, topic, experience }
 * @returns {Object} - { evaluation, fromCache, cacheKey }
 */
export const evaluateAnswer = async (params) => {
  const { question, answer, role, topic, experience = 0 } = params;

  if (!question || !answer || !role || !topic) {
    throw new ApiError(400, "Question, answer, role, and topic are required");
  }

  // Note: We typically DON'T cache evaluations since each answer is unique
  // But we could cache by answer hash for identical responses

  const prompt = `You are an experienced technical interviewer evaluating a ${role} candidate's response.

Interview Context:
- Role: ${role}
- Topic: ${topic}
- Experience Level: ${experience} years

Question Asked:
${question}

Candidate's Answer:
${answer}

Provide a comprehensive evaluation in the following JSON format:
{
  "score": <number 0-10>,
  "strengths": ["strength 1", "strength 2", ...],
  "weaknesses": ["weakness 1", "weakness 2", ...],
  "suggestions": ["suggestion 1", "suggestion 2", ...],
  "overallFeedback": "<2-3 sentences summary>"
}

Evaluation Criteria:
- Technical accuracy (30%)
- Problem-solving approach (25%)
- Communication clarity (20%)
- Best practices awareness (15%)
- Edge case consideration (10%)

Be constructive, specific, and encouraging. Consider the candidate's experience level.`;

  const evaluation = await callGemini(prompt);

  // Parse JSON response safely
  const parsed = extractJSON(evaluation);

  if (parsed) {
    return {
      evaluation: parsed,
      fromCache: false,
    };
  }

  // Fallback to raw text if parsing fails
  return {
    evaluation: { raw: evaluation },
    fromCache: false,
  };
};
