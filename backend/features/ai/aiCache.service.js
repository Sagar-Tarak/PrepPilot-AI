import crypto from 'crypto';
import AiCache from './ai.schema.js';

/**
 * Build cache key using SHA256 hash
 * @param {Object} params - Cache parameters
 * @returns {string} - SHA256 hash
 */
export const buildCacheKey = (params) => {
  const {
    promptType,
    role = '',
    topic = '',
    difficulty = '',
    experience = 0,
    model = 'gemini-pro',
  } = params;

  // Create a deterministic string from parameters
  const keyString = JSON.stringify({
    promptType,
    role: role.toLowerCase().trim(),
    topic: topic.toLowerCase().trim(),
    difficulty: difficulty.toLowerCase(),
    experience,
    model,
  });

  // Generate SHA256 hash
  return crypto.createHash('sha256').update(keyString).digest('hex');
};

/**
 * Get cached AI response
 * @param {string} cacheKey - Cache key
 * @returns {Object|null} - Cached response or null
 */
export const getFromCache = async (cacheKey) => {
  try {
    const cached = await AiCache.findOne({
      cacheKey,
      expiresAt: { $gt: new Date() }, // Ensure not expired
    });

    if (cached) {
      return {
        responseText: cached.responseText,
        model: cached.model,
        cachedAt: cached.createdAt,
      };
    }

    return null;
  } catch (error) {
    console.error('Cache retrieval error:', error);
    return null; // Fail gracefully, don't block AI generation
  }
};

/**
 * Save AI response to cache with TTL
 * @param {Object} data - Cache data
 * @param {number} ttlHours - Time to live in hours (default: 24)
 * @returns {Object} - Saved cache entry
 */
export const saveToCache = async (data, ttlHours = 24) => {
  try {
    const {
      cacheKey,
      promptType,
      role,
      topic,
      difficulty,
      experience,
      model,
      responseText,
    } = data;

    // Calculate expiration time
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + ttlHours);

    // Upsert cache entry
    const cached = await AiCache.findOneAndUpdate(
      { cacheKey },
      {
        cacheKey,
        promptType,
        role,
        topic,
        difficulty,
        experience,
        model,
        responseText,
        expiresAt,
      },
      {
        upsert: true,
        new: true,
      }
    );

    return cached;
  } catch (error) {
    console.error('Cache save error:', error);
    // Don't throw - caching is optional
    return null;
  }
};

/**
 * Clear expired cache entries manually (MongoDB TTL does this automatically)
 * @returns {Object} - { deletedCount }
 */
export const clearExpiredCache = async () => {
  try {
    const result = await AiCache.deleteMany({
      expiresAt: { $lt: new Date() },
    });

    return { deletedCount: result.deletedCount };
  } catch (error) {
    console.error('Cache clearing error:', error);
    return { deletedCount: 0 };
  }
};
