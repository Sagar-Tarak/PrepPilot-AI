import { getUserProfile, updateUserProfile } from './users.service.js';
import { asyncHandler } from '../../common/middleware/error.middleware.js';

/**
 * @desc    Get current user profile
 * @route   GET /api/users/profile
 * @access  Private
 */
export const getProfile = asyncHandler(async (req, res) => {
  const profile = await getUserProfile(req.user.id);

  res.status(200).json({
    success: true,
    data: {
      profile,
    },
  });
});

/**
 * @desc    Update current user profile
 * @route   PATCH /api/users/profile
 * @access  Private
 */
export const updateProfile = asyncHandler(async (req, res) => {
  const { role, experience, skills } = req.body;

  const profile = await updateUserProfile(req.user.id, {
    role,
    experience,
    skills,
  });

  res.status(200).json({
    success: true,
    message: 'Profile updated successfully',
    data: {
      profile,
    },
  });
});
