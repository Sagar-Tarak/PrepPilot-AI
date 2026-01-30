import { Router } from 'express';
import { generateQuestion, getHint, evaluateAnswerController } from './questions.controller.js';
import { protect } from '../../common/middleware/auth.middleware.js';

const router = Router();

// All routes are protected
router.use(protect);

// Question generation routes
router.post('/generate', generateQuestion);
router.post('/hint', getHint);
router.post('/evaluate', evaluateAnswerController);

export default router;
