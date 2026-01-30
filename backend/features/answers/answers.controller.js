import {
  evaluateAndSaveAnswer,
  getSessionAttempts,
  getUserAttempts,
} from './answers.service.js';
import { asyncHandler } from '../../common/middleware/error.middleware.js';

/**
 * @desc    Evaluate user's answer and save attempt
 * @route   POST /api/answers/evaluate
 * @access  Private
 */
export const evaluateAnswer = asyncHandler(async (req, res) => {
  const {
    sessionId,
    question,
    answer,
    role,
    topic,
    difficulty,
    experience,
  } = req.body;

  const result = await evaluateAndSaveAnswer({
    sessionId,
    userId: req.user.id, // From JWT middleware
    question,
    answer,
    role,
    topic,
    difficulty,
    experience,
  });

  res.status(201).json({
    success: true,
    message: 'Answer evaluated successfully',
    data: result,
  });
});

/**
 * @desc    Get all attempts for a session
 * @route   GET /api/answers/session/:sessionId
 * @access  Private
 */
export const getSessionAttemptsController = asyncHandler(async (req, res) => {
  const attempts = await getSessionAttempts(req.params.sessionId, req.user.id);

  res.status(200).json({
    success: true,
    data: {
      attempts,
      total: attempts.length,
    },
  });
});

/**
 * @desc    Get user's attempt history
 * @route   GET /api/answers/history
 * @access  Private
 */
export const getHistory = asyncHandler(async (req, res) => {
  const { limit, page, topic, difficulty } = req.query;
  
  const limitNum = parseInt(limit) || 20;
  const pageNum = parseInt(page) || 1;
  const skip = (pageNum - 1) * limitNum;

  const result = await getUserAttempts(req.user.id, {
    limit: limitNum,
    skip,
    topic,
    difficulty,
  });

  res.status(200).json({
    success: true,
    data: result,
  });
});
