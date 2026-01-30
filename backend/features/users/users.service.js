import UserProfile from './users.schema.js';
import { ApiError } from '../../common/middleware/error.middleware.js';

/**
 * Get user profile by userId
 * @param {string} userId - User ID
 * @returns {Object} - User profile
 */
export const getUserProfile = async (userId) => {
  const profile = await UserProfile.findOne({ userId }).populate('userId', 'name email createdAt');

  if (!profile) {
    throw new ApiError(404, 'User profile not found');
  }

  return profile;
};

/**
 * Create or get user profile
 * @param {string} userId - User ID
 * @returns {Object} - User profile
 */
export const getOrCreateProfile = async (userId) => {
  let profile = await UserProfile.findOne({ userId });

  if (!profile) {
    profile = await UserProfile.create({ userId });
  }

  return profile;
};

/**
 * Update user profile
 * @param {string} userId - User ID
 * @param {Object} updates - { role, experience, skills }
 * @returns {Object} - Updated user profile
 */
export const updateUserProfile = async (userId, updates) => {
  const { role, experience, skills } = updates;

  // Get or create profile
  let profile = await UserProfile.findOne({ userId });

  if (!profile) {
    // Create new profile with updates
    profile = await UserProfile.create({
      userId,
      role: role ?? '',
      experience: experience ?? 0,
      skills: skills ?? [],
    });
  } else {
    // Update existing profile
    if (role !== undefined) profile.role = role;
    if (experience !== undefined) profile.experience = experience;
    if (skills !== undefined) profile.skills = skills;

    await profile.save();
  }

  // Populate user details
  await profile.populate('userId', 'name email createdAt');

  return profile;
};
