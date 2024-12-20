import { migrate } from 'drizzle-orm/postgres-js/migrator';
import 'dotenv/config';
import { db } from './db.js';

export const migrateDB = async () => {
  console.log('migrating db');
  await migrate(db, { migrationsFolder: 'drizzle' });
  console.log('db migrated');
};

migrateDB();
