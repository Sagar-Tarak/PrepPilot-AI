import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './auth.schema.js';
import { ApiError } from '../../common/middleware/error.middleware.js';

const SALT_ROUNDS = 12;

/**
 * Generate JWT token for user
 */
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

/**
 * Return safe user object (without passwordHash)
 */
const sanitizeUser = (user) => {
  const { passwordHash, ...safeUser } = user.toObject();
  return safeUser;
};

/**
 * Register a new user
 * @param {Object} userData - { name, email, password }
 * @returns {Object} - { user, token }
 */
export const registerUser = async ({ name, email, password }) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw new ApiError(409, 'User with this email already exists');
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  // Create user
  const user = await User.create({
    name,
    email: email.toLowerCase(),
    passwordHash,
  });

  // Generate token
  const token = generateToken(user._id);

  return {
    user: sanitizeUser(user),
    token,
  };
};

/**
 * Login user with email and password
 * @param {Object} credentials - { email, password }
 * @returns {Object} - { user, token }
 */
export const loginUser = async ({ email, password }) => {
  // Find user by email
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid email or password');
  }

  // Generate token
  const token = generateToken(user._id);

  return {
    user: sanitizeUser(user),
    token,
  };
};
