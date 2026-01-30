import { getUserAnalytics, getTopicAnalytics } from './analytics.service.js';
import { asyncHandler } from '../../common/middleware/error.middleware.js';

/**
 * @desc    Get user's skill analytics
 * @route   GET /api/analytics/skills
 * @access  Private
 */
export const getSkillsAnalytics = asyncHandler(async (req, res) => {
  const analytics = await getUserAnalytics(req.user.id);

  // Extract skills-focused data
  const skillsData = {
    topicAnalytics: analytics.topicAnalytics,
    strongTopics: analytics.strongTopics,
    weakTopics: analytics.weakTopics,
    difficultyAnalytics: analytics.difficultyAnalytics,
    totalAttempts: analytics.totalAttempts,
  };

  res.status(200).json({
    success: true,
    data: skillsData,
  });
});

/**
 * @desc    Get user's weaknesses and improvement areas
 * @route   GET /api/analytics/weaknesses
 * @access  Private
 */
export const getWeaknesses = asyncHandler(async (req, res) => {
  const analytics = await getUserAnalytics(req.user.id);

  // Extract weakness-focused data
  const weaknessData = {
    weakTopics: analytics.weakTopics,
    overallScore: analytics.overallScore,
    recommendations: analytics.recommendations,
    recentTrend: analytics.recentTrend,
    areasNeedingWork: analytics.topicAnalytics
      .filter((t) => t.avgScore < 6)
      .sort((a, b) => a.avgScore - b.avgScore),
  };

  res.status(200).json({
    success: true,
    data: weaknessData,
  });
});

/**
 * @desc    Get comprehensive analytics summary
 * @route   GET /api/analytics/summary
 * @access  Private
 */
export const getAnalyticsSummary = asyncHandler(async (req, res) => {
  const analytics = await getUserAnalytics(req.user.id);

  res.status(200).json({
    success: true,
    data: analytics,
  });
});

/**
 * @desc    Get topic-specific analytics
 * @route   GET /api/analytics/topic/:topic
 * @access  Private
 */
export const getTopicStats = asyncHandler(async (req, res) => {
  const { topic } = req.params;

  const topicData = await getTopicAnalytics(req.user.id, topic);

  res.status(200).json({
    success: true,
    data: topicData,
  });
});
