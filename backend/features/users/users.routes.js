import { Router } from 'express';
import { getProfile, updateProfile } from './users.controller.js';
import { protect } from '../../common/middleware/auth.middleware.js';

const router = Router();

// All routes are protected
router.use(protect);

// User profile routes
router.get('/me', getProfile);
router.put('/me', updateProfile);

export default router;
