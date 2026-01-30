import jwt from 'jsonwebtoken';
import User from '../../features/auth/auth.schema.js';
import { ApiError, asyncHandler } from './error.middleware.js';

/**
 * Protect routes - verify JWT token
 */
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check for token in Authorization header
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    throw new ApiError(401, 'Not authorized, no token provided');
  }

  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Check if user still exists
  const user = await User.findById(decoded.id).select('-passwordHash');
  if (!user) {
    throw new ApiError(401, 'User no longer exists');
  }

  // Attach user to request
  req.user = user;
  next();
});
