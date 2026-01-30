import {
  generateInterviewQuestion,
  generateHint,
  evaluateAnswer,
} from './questions.service.js';
import { asyncHandler } from '../../common/middleware/error.middleware.js';

/**
 * @desc    Generate interview question
 * @route   POST /api/questions/generate
 * @access  Private
 */
export const generateQuestion = asyncHandler(async (req, res) => {
  const { role, topic, difficulty, experience } = req.body;

  const result = await generateInterviewQuestion({
    role,
    topic,
    difficulty,
    experience,
  });

  res.status(200).json({
    success: true,
    message: result.fromCache ? 'Question retrieved from cache' : 'Question generated successfully',
    data: result,
  });
});

/**
 * @desc    Generate hint for a question
 * @route   POST /api/questions/hint
 * @access  Private
 */
export const getHint = asyncHandler(async (req, res) => {
  const { question, topic, difficulty } = req.body;

  const result = await generateHint({
    question,
    topic,
    difficulty,
  });

  res.status(200).json({
    success: true,
    message: result.fromCache ? 'Hint retrieved from cache' : 'Hint generated successfully',
    data: result,
  });
});

/**
 * @desc    Evaluate candidate's answer
 * @route   POST /api/questions/evaluate
 * @access  Private
 */
export const evaluateAnswerController = asyncHandler(async (req, res) => {
  const { question, answer, role, topic, experience } = req.body;

  const result = await evaluateAnswer({
    question,
    answer,
    role,
    topic,
    experience,
  });

  res.status(200).json({
    success: true,
    message: 'Answer evaluated successfully',
    data: result,
  });
});
