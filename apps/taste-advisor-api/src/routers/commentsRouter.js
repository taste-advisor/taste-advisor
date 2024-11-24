import express from 'express';
import { authenticate } from '../middlewares/auth.js';
import { createComment } from '../controllers/commentController.js';

export const commentsRouter = express.Router();

commentsRouter.post('/create', authenticate, createComment);
