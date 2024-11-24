import express from 'express';
import {
  auth,
  login,
  register,
  update,
} from '../controllers/userController.js';
import { authenticate } from '../middlewares/auth.js';

export const usersRouter = express.Router();

usersRouter.post('/register', register);
usersRouter.post('/login', login);
usersRouter.post('/update', authenticate, update);
usersRouter.get('/me', authenticate, auth);
