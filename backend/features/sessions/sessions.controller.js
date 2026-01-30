import {
  startSession,
  endSession,
  getUserSessions,
  getSessionById,
} from './sessions.service.js';
import { asyncHandler } from '../../common/middleware/error.middleware.js';

/**
 * @desc    Start a new interview session
 * @route   POST /api/sessions
 * @access  Private
 */
export const createSession = asyncHandler(async (req, res) => {
  const { topicsCovered } = req.body;

  const session = await startSession(req.user.id, { topicsCovered });

  res.status(201).json({
    success: true,
    message: 'Session started successfully',
    data: {
      session,
    },
  });
});

/**
 * @desc    End an interview session
 * @route   PATCH /api/sessions/:id/end
 * @access  Private
 */
export const endSessionById = asyncHandler(async (req, res) => {
  const { avgScore, topicsCovered } = req.body;

  const session = await endSession(req.params.id, req.user.id, {
    avgScore,
    topicsCovered,
  });

  res.status(200).json({
    success: true,
    message: 'Session ended successfully',
    data: {
      session,
    },
  });
});

/**
 * @desc    Get all sessions for current user
 * @route   GET /api/sessions
 * @access  Private
 */
export const listSessions = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const skip = (page - 1) * limit;
  const sortBy = req.query.sortBy || '-startTime';

  const result = await getUserSessions(req.user.id, { limit, skip, sortBy });

  res.status(200).json({
    success: true,
    data: result,
  });
});

/**
 * @desc    Get session by ID
 * @route   GET /api/sessions/:id
 * @access  Private
 */
export const getSession = asyncHandler(async (req, res) => {
  const session = await getSessionById(req.params.id, req.user.id);

  res.status(200).json({
    success: true,
    data: {
      session,
    },
  });
});
