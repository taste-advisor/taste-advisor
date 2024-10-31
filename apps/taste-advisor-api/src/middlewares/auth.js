import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { findByEmail } from '../services/userService.js';

export const authenticate = async (req, res, next) => {
  if (!req.headers.authorization) {
    throw new Error('Unauthorized');
  }
  const token = req.headers.authorization;
  if (!token) {
    throw new Error('Token not found');
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await findByEmail(decode.email);
    next();
  } catch (e) {
    req.user = undefined;
    next();
  }
};
