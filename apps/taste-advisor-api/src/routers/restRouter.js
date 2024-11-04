import express from 'express';
import { usersRouter } from './usersRouter.js';

export const restRouter = express.Router();

restRouter.use('/users', usersRouter);
