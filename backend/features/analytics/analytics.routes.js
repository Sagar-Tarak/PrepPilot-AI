import { Router } from 'express';
import {
  getSkillsAnalytics,
  getWeaknesses,
  getAnalyticsSummary,
  getTopicStats,
} from './analytics.controller.js';
import { protect } from '../../common/middleware/auth.middleware.js';

const router = Router();

// All routes are protected
router.use(protect);

// Analytics routes
router.get('/skills', getSkillsAnalytics);
router.get('/weaknesses', getWeaknesses);
router.get('/summary', getAnalyticsSummary);
router.get('/topic/:topic', getTopicStats);

export default router;
