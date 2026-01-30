import { Router } from 'express';
import {
  createSession,
  endSessionById,
  listSessions,
  getSession,
} from './sessions.controller.js';
import { protect } from '../../common/middleware/auth.middleware.js';

const router = Router();

// All routes are protected
router.use(protect);

// Session routes
router.post('/start', createSession);
router.patch('/:id/end', endSessionById);
router.get('/', listSessions);
router.get('/:id', getSession);

export default router;
