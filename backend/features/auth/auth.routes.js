import { Router } from 'express';
import { register, login, getMe } from './auth.controller.js';
import { protect } from '../../common/middleware/auth.middleware.js';
import { validate } from '../../common/middleware/validate.middleware.js';
import { registerSchema, loginSchema } from './auth.validation.js';

const router = Router();

// Public routes
router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

// Protected routes
router.get('/me', protect, getMe);

export default router;
