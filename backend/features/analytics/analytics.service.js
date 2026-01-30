import QuestionAttempt from '../answers/answers.schema.js';
import InterviewSession from '../sessions/sessions.schema.js';
import { ApiError } from '../../common/middleware/error.middleware.js';

/**
 * Get comprehensive user analytics
 * @param {string} userId - User ID
 * @returns {Object} - Complete analytics data
 */
export const getUserAnalytics = async (userId) => {
  const [attempts, sessions] = await Promise.all([
    QuestionAttempt.find({ userId }),
    InterviewSession.find({ userId }),
  ]);

  if (attempts.length === 0) {
    return {
      totalAttempts: 0,
      totalSessions: sessions.length,
      overallScore: 0,
      readinessScore: 0,
      topicAnalytics: [],
      difficultyAnalytics: {},
      weakTopics: [],
      strongTopics: [],
      recentTrend: 'no-data',
      recommendations: ['Start practicing to build your interview readiness!'],
    };
  }

  // Calculate overall metrics
  const totalAttempts = attempts.length;
  const totalSessions = sessions.length;
  const overallScore = calculateAverageScore(attempts);

  // Topic-based analytics
  const topicAnalytics = aggregateByTopic(attempts);

  // Difficulty-based analytics
  const difficultyAnalytics = aggregateByDifficulty(attempts);

  // Identify weak and strong topics
  const weakTopics = topicAnalytics
    .filter((t) => t.avgScore < 5)
    .sort((a, b) => a.avgScore - b.avgScore)
    .slice(0, 3);

  const strongTopics = topicAnalytics
    .filter((t) => t.avgScore >= 7)
    .sort((a, b) => b.avgScore - a.avgScore)
    .slice(0, 3);

  // Calculate readiness score (0-100)
  const readinessScore = calculateReadinessScore({
    overallScore,
    totalAttempts,
    topicAnalytics,
    difficultyAnalytics,
  });

  // Recent performance trend
  const recentTrend = calculateRecentTrend(attempts);

  // Generate recommendations
  const recommendations = generateRecommendations({
    weakTopics,
    strongTopics,
    overallScore,
    readinessScore,
    recentTrend,
    difficultyAnalytics,
  });

  return {
    totalAttempts,
    totalSessions,
    overallScore,
    readinessScore,
    topicAnalytics,
    difficultyAnalytics,
    weakTopics,
    strongTopics,
    recentTrend,
    recommendations,
  };
};

/**
 * Aggregate attempts by topic
 * @param {Array} attempts - Question attempts
 * @returns {Array} - Topic analytics
 */
const aggregateByTopic = (attempts) => {
  const topicMap = {};

  attempts.forEach((attempt) => {
    const topic = attempt.topic;
    if (!topicMap[topic]) {
      topicMap[topic] = {
        topic,
        count: 0,
        totalScore: 0,
        avgScore: 0,
        difficulties: { easy: 0, medium: 0, hard: 0 },
      };
    }

    topicMap[topic].count++;
    topicMap[topic].totalScore += attempt.score;
    topicMap[topic].difficulties[attempt.difficulty]++;
  });

  // Calculate averages and sort
  return Object.values(topicMap)
    .map((t) => ({
      ...t,
      avgScore: Math.round((t.totalScore / t.count) * 10) / 10,
    }))
    .sort((a, b) => b.count - a.count);
};

/**
 * Aggregate attempts by difficulty
 * @param {Array} attempts - Question attempts
 * @returns {Object} - Difficulty analytics
 */
const aggregateByDifficulty = (attempts) => {
  const difficultyMap = {
    easy: { count: 0, totalScore: 0, avgScore: 0 },
    medium: { count: 0, totalScore: 0, avgScore: 0 },
    hard: { count: 0, totalScore: 0, avgScore: 0 },
  };

  attempts.forEach((attempt) => {
    const diff = attempt.difficulty;
    difficultyMap[diff].count++;
    difficultyMap[diff].totalScore += attempt.score;
  });

  // Calculate averages
  Object.keys(difficultyMap).forEach((diff) => {
    const data = difficultyMap[diff];
    if (data.count > 0) {
      data.avgScore = Math.round((data.totalScore / data.count) * 10) / 10;
    }
  });

  return difficultyMap;
};

/**
 * Calculate average score
 * @param {Array} attempts - Question attempts
 * @returns {number} - Average score
 */
const calculateAverageScore = (attempts) => {
  if (attempts.length === 0) return 0;
  const total = attempts.reduce((sum, a) => sum + a.score, 0);
  return Math.round((total / attempts.length) * 10) / 10;
};

/**
 * Calculate readiness score (0-100)
 * @param {Object} data - Analytics data
 * @returns {number} - Readiness score
 */
const calculateReadinessScore = (data) => {
  const { overallScore, totalAttempts, topicAnalytics, difficultyAnalytics } = data;

  // Base score from overall performance (50% weight)
  const performanceScore = (overallScore / 10) * 50;

  // Practice volume score (20% weight)
  // 50+ attempts = full points, linear scaling
  const volumeScore = Math.min((totalAttempts / 50) * 20, 20);

  // Topic diversity score (15% weight)
  // 5+ topics = full points
  const diversityScore = Math.min((topicAnalytics.length / 5) * 15, 15);

  // Difficulty progression score (15% weight)
  // Check if user has attempted all difficulty levels
  const hardAttempts = difficultyAnalytics.hard?.count || 0;
  const mediumAttempts = difficultyAnalytics.medium?.count || 0;
  const progressionScore =
    hardAttempts > 0 && mediumAttempts > 0
      ? 15
      : mediumAttempts > 0
      ? 10
      : 5;

  const totalScore = performanceScore + volumeScore + diversityScore + progressionScore;

  return Math.round(totalScore);
};

/**
 * Calculate recent performance trend
 * @param {Array} attempts - Question attempts
 * @returns {string} - 'improving', 'stable', 'declining', 'no-data'
 */
const calculateRecentTrend = (attempts) => {
  if (attempts.length < 5) return 'no-data';

  // Sort by date
  const sorted = [...attempts].sort((a, b) => a.createdAt - b.createdAt);

  // Compare last 5 vs previous 5
  const recent = sorted.slice(-5);
  const previous = sorted.slice(-10, -5);

  if (previous.length === 0) return 'no-data';

  const recentAvg = calculateAverageScore(recent);
  const previousAvg = calculateAverageScore(previous);

  const diff = recentAvg - previousAvg;

  if (diff > 0.5) return 'improving';
  if (diff < -0.5) return 'declining';
  return 'stable';
};

/**
 * Generate personalized recommendations
 * @param {Object} data - Analytics data
 * @returns {Array} - Recommendations
 */
const generateRecommendations = (data) => {
  const {
    weakTopics,
    strongTopics,
    overallScore,
    readinessScore,
    recentTrend,
    difficultyAnalytics,
  } = data;

  const recommendations = [];

  // Readiness-based recommendations
  if (readinessScore < 40) {
    recommendations.push('Focus on building fundamentals with more practice sessions');
  } else if (readinessScore < 70) {
    recommendations.push('Good progress! Continue practicing to reach interview readiness');
  } else {
    recommendations.push('Excellent readiness! You\'re well-prepared for interviews');
  }

  // Weak topics recommendations
  if (weakTopics.length > 0) {
    recommendations.push(
      `Strengthen these topics: ${weakTopics.map((t) => t.topic).join(', ')}`
    );
  }

  // Strong topics recommendations
  if (strongTopics.length > 0) {
    recommendations.push(
      `Great performance in: ${strongTopics.map((t) => t.topic).join(', ')}`
    );
  }

  // Trend-based recommendations
  if (recentTrend === 'declining') {
    recommendations.push('Recent scores are declining - consider reviewing fundamentals');
  } else if (recentTrend === 'improving') {
    recommendations.push('Great improvement trend! Keep up the momentum');
  }

  // Difficulty progression recommendations
  const hardCount = difficultyAnalytics.hard?.count || 0;
  const mediumCount = difficultyAnalytics.medium?.count || 0;

  if (hardCount === 0 && overallScore >= 7) {
    recommendations.push('Ready for harder questions - try increasing difficulty');
  } else if (mediumCount === 0 && overallScore >= 5) {
    recommendations.push('Consider attempting medium difficulty questions');
  }

  return recommendations.slice(0, 5); // Limit to 5 recommendations
};

/**
 * Get topic-specific analytics
 * @param {string} userId - User ID
 * @param {string} topic - Topic name
 * @returns {Object} - Topic analytics
 */
export const getTopicAnalytics = async (userId, topic) => {
  if (!topic) {
    throw new ApiError(400, 'Topic is required');
  }

  const attempts = await QuestionAttempt.find({ userId, topic }).sort({
    createdAt: 1,
  });

  if (attempts.length === 0) {
    return {
      topic,
      totalAttempts: 0,
      avgScore: 0,
      trend: 'no-data',
      difficultyBreakdown: { easy: 0, medium: 0, hard: 0 },
      recentAttempts: [],
    };
  }

  const avgScore = calculateAverageScore(attempts);
  const trend = calculateRecentTrend(attempts);

  const difficultyBreakdown = {
    easy: attempts.filter((a) => a.difficulty === 'easy').length,
    medium: attempts.filter((a) => a.difficulty === 'medium').length,
    hard: attempts.filter((a) => a.difficulty === 'hard').length,
  };

  const recentAttempts = attempts.slice(-5).map((a) => ({
    score: a.score,
    difficulty: a.difficulty,
    date: a.createdAt,
  }));

  return {
    topic,
    totalAttempts: attempts.length,
    avgScore,
    trend,
    difficultyBreakdown,
    recentAttempts,
  };
};
