import { integer, pgSchema, serial, text } from 'drizzle-orm/pg-core';

const tasteAdvisor = pgSchema('taste_advisor');

const users = tasteAdvisor.table('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
});

const recipes = tasteAdvisor.table('recipes', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  author: integer('author').references(() => users.id),
  likes: integer('likes').notNull(),
  dislikes: integer('dislikes').notNull(),
  ingredients: text('ingredients').notNull(),
  description: text('description').notNull(),
});

const comments = tasteAdvisor.table('comments', {
  id: serial('id').primaryKey(),
  author: integer('author').references(() => users.id),
  recipe: integer('recipe').references(() => recipes.id),
  content: text('content'),
});

const savedRecipes = tasteAdvisor.table('saved_recipes', {
  user: integer('author').references(() => users.id),
  recipe: integer('recipe').references(() => recipes.id),
});

export { tasteAdvisor, users, recipes, comments, savedRecipes };
