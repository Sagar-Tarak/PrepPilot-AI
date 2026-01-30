import { ApiError } from './error.middleware.js';

// In-memory storage for AI usage tracking
// For production, consider using Redis or MongoDB
const usageMap = new Map();

// Configuration
const DEFAULT_DAILY_LIMIT = 100; // requests per day per user
const RESET_HOUR = 0; // Reset at midnight (UTC)

/**
 * Get or create usage record for user
 * @param {string} userId - User ID
 * @returns {Object} - { count, lastReset }
 */
const getUserUsage = (userId) => {
  if (!usageMap.has(userId)) {
    usageMap.set(userId, {
      count: 0,
      lastReset: new Date(),
    });
  }

  const usage = usageMap.get(userId);

  // Check if we need to reset (new day)
  const now = new Date();
  const lastReset = new Date(usage.lastReset);

  const shouldReset =
    now.getUTCDate() !== lastReset.getUTCDate() ||
    now.getUTCMonth() !== lastReset.getUTCMonth() ||
    now.getUTCFullYear() !== lastReset.getUTCFullYear();

  if (shouldReset) {
    usage.count = 0;
    usage.lastReset = now;
  }

  return usage;
};

/**
 * Increment usage counter for user
 * @param {string} userId - User ID
 */
const incrementUsage = (userId) => {
  const usage = getUserUsage(userId);
  usage.count++;
  usageMap.set(userId, usage);
};

/**
 * Middleware to check and enforce AI quota limits
 * @param {Object} options - { limit, exemptRoles }
 */
export const checkAiQuota = (options = {}) => {
  const limit = options.limit || DEFAULT_DAILY_LIMIT;
  const exemptRoles = options.exemptRoles || ['admin', 'premium'];

  return (req, res, next) => {
    // Skip if user not authenticated
    if (!req.user || !req.user.id) {
      return next(new ApiError(401, 'Authentication required'));
    }

    const userId = req.user.id;

    // Check if user has exempt role (for future premium features)
    if (req.user.role && exemptRoles.includes(req.user.role)) {
      return next();
    }

    // Get current usage
    const usage = getUserUsage(userId);

    // Check if quota exceeded
    if (usage.count >= limit) {
      // Calculate time until reset
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
      tomorrow.setUTCHours(RESET_HOUR, 0, 0, 0);
      const hoursUntilReset = Math.ceil((tomorrow - now) / (1000 * 60 * 60));

      return next(
        new ApiError(
          429,
          `Daily AI quota exceeded. Limit: ${limit} requests. Resets in ${hoursUntilReset} hours.`
        )
      );
    }

    // Increment usage counter
    incrementUsage(userId);

    // Add usage info to response headers
    res.setHeader('X-AI-Quota-Limit', limit);
    res.setHeader('X-AI-Quota-Remaining', limit - usage.count);
    res.setHeader('X-AI-Quota-Reset', new Date(usage.lastReset).toISOString());

    next();
  };
};

/**
 * Get usage statistics for a user (for admin/debugging)
 * @param {string} userId - User ID
 * @returns {Object} - Usage stats
 */
export const getUserQuotaStats = (userId) => {
  const usage = getUserUsage(userId);
  return {
    userId,
    currentUsage: usage.count,
    limit: DEFAULT_DAILY_LIMIT,
    remaining: DEFAULT_DAILY_LIMIT - usage.count,
    lastReset: usage.lastReset,
    nextReset: getNextResetTime(),
  };
};

/**
 * Get next quota reset time
 * @returns {Date}
 */
const getNextResetTime = () => {
  const tomorrow = new Date();
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
  tomorrow.setUTCHours(RESET_HOUR, 0, 0, 0);
  return tomorrow;
};

/**
 * Clear all usage data (for testing/maintenance)
 */
export const clearAllQuotas = () => {
  usageMap.clear();
  return { message: 'All quotas cleared' };
};

/**
 * Get all usage statistics (for admin dashboard)
 * @returns {Array} - All user usage stats
 */
export const getAllQuotaStats = () => {
  const stats = [];
  usageMap.forEach((usage, userId) => {
    stats.push({
      userId,
      count: usage.count,
      lastReset: usage.lastReset,
    });
  });
  return stats.sort((a, b) => b.count - a.count);
};

export default checkAiQuota;
