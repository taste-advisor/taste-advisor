import express from 'express';
import { usersRouter } from './usersRouter.js';
import { recipesRouter } from './recipesRouter.js';

export const restRouter = express.Router();

restRouter.use('/users', usersRouter);
restRouter.use('/recipes', recipesRouter);
