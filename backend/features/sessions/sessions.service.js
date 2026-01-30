import InterviewSession from './sessions.schema.js';
import { ApiError } from '../../common/middleware/error.middleware.js';

/**
 * Start a new interview session
 * @param {string} userId - User ID
 * @param {Object} data - { topicsCovered }
 * @returns {Object} - Created session
 */
export const startSession = async (userId, data = {}) => {
  const { topicsCovered = [] } = data;

  const session = await InterviewSession.create({
    userId,
    startTime: new Date(),
    topicsCovered,
  });

  await session.populate('userId', 'name email');

  return session;
};

/**
 * End an interview session
 * @param {string} sessionId - Session ID
 * @param {string} userId - User ID (for authorization)
 * @param {Object} data - { avgScore, topicsCovered }
 * @returns {Object} - Updated session
 */
export const endSession = async (sessionId, userId, data = {}) => {
  const { avgScore, topicsCovered } = data;

  const session = await InterviewSession.findById(sessionId);

  if (!session) {
    throw new ApiError(404, 'Session not found');
  }

  // Verify session belongs to user
  if (session.userId.toString() !== userId) {
    throw new ApiError(403, 'Not authorized to end this session');
  }

  // Check if session already ended
  if (session.endTime) {
    throw new ApiError(400, 'Session has already ended');
  }

  // Update session
  session.endTime = new Date();
  if (avgScore !== undefined) session.avgScore = avgScore;
  if (topicsCovered !== undefined) session.topicsCovered = topicsCovered;

  await session.save();
  await session.populate('userId', 'name email');

  return session;
};

/**
 * Get user's interview sessions
 * @param {string} userId - User ID
 * @param {Object} options - { limit, skip, sortBy }
 * @returns {Object} - { sessions, total, page, pages }
 */
export const getUserSessions = async (userId, options = {}) => {
  const { limit = 10, skip = 0, sortBy = '-startTime' } = options;

  const [sessions, total] = await Promise.all([
    InterviewSession.find({ userId })
      .sort(sortBy)
      .limit(limit)
      .skip(skip)
      .populate('userId', 'name email'),
    InterviewSession.countDocuments({ userId }),
  ]);

  const pages = Math.ceil(total / limit);
  const page = Math.floor(skip / limit) + 1;

  return {
    sessions,
    total,
    page,
    pages,
  };
};

/**
 * Get session by ID
 * @param {string} sessionId - Session ID
 * @param {string} userId - User ID (for authorization)
 * @returns {Object} - Session
 */
export const getSessionById = async (sessionId, userId) => {
  const session = await InterviewSession.findById(sessionId).populate('userId', 'name email');

  if (!session) {
    throw new ApiError(404, 'Session not found');
  }

  // Verify session belongs to user
  if (session.userId._id.toString() !== userId) {
    throw new ApiError(403, 'Not authorized to view this session');
  }

  return session;
};
