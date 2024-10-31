import express from 'express';
import { auth, login, register } from '../controllers/userController.js';
import { authenticate } from '../middlewares/auth.js';

export const usersRouter = express.Router();

usersRouter.post('/register', register);
usersRouter.post('/login', login);
usersRouter.get('/me', authenticate, auth);
