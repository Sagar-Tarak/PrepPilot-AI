import { Router } from 'express';
import {
  evaluateAnswer,
  getSessionAttemptsController,
  getHistory,
} from './answers.controller.js';
import { protect } from '../../common/middleware/auth.middleware.js';

const router = Router();

// All routes are protected
router.use(protect);

// Answer evaluation and retrieval routes
router.post('/evaluate', evaluateAnswer);
router.get('/session/:sessionId', getSessionAttemptsController);
router.get('/history', getHistory);

export default router;
