import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { findByEmail } from '../services/userService.js';

const validateHeader = req => {
  if (!req.headers.authorization) {
    throw new Error('Unauthorized');
  }
  const token = req.headers.authorization;
  if (!token) {
    throw new Error('Token not found');
  }
  return token;
};

export const authenticate = async (req, res, next) => {
  try {
    const token = validateHeader(req);
    console.log(token);
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
    req.user = await findByEmail(decode.email);
    next();
  } catch (e) {
    console.log(e.message);
    req.user = undefined;
    next();
  }
};
