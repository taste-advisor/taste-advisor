import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { tasteAdvisor } from './schema.js';

if (!process.env.DATABASE_URL) {
  throw new Error('Database is missing');
}

const url = process.env.DATABASE_URL;
const client = postgres(url);
export const db = drizzle(client, { tasteAdvisor });
