import { Router } from 'express';
import authRoutes from './features/auth/auth.routes.js';
import userRoutes from './features/users/users.routes.js';
import sessionRoutes from './features/sessions/sessions.routes.js';
import questionRoutes from './features/questions/questions.routes.js';
import answerRoutes from './features/answers/answers.routes.js';
import analyticsRoutes from './features/analytics/analytics.routes.js';

const router = Router();

// API version and info
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'PrepPilot AI API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      api: 'GET /api',
      auth: '/api/auth',
      users: '/api/users',
      sessions: '/api/sessions',
      questions: '/api/questions',
      answers: '/api/answers',
      analytics: '/api/analytics',
    },
  });
});

// Feature routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/sessions', sessionRoutes);
router.use('/questions', questionRoutes);
router.use('/answers', answerRoutes);
router.use('/analytics', analyticsRoutes);

export default router;
