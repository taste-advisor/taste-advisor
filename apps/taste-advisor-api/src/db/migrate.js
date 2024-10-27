import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { tasteAdvisor } from './schema.js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error('Database is missing');
}

const url = process.env.DATABASE_URL;
const client = postgres(url);
const db = drizzle(client, { tasteAdvisor });

export const migrateDB = async () => {
  console.log('migrating db');
  await migrate(db, { migrationsFolder: 'drizzle' });
  console.log('db migrated');
};

migrateDB();
