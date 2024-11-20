import { integer, numeric, pgSchema, serial, text } from 'drizzle-orm/pg-core';

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
  instructions: text('instructions').notNull(),
  date: text('date').notNull(),
  description: text('description'),
  imageUrl: text('image_url'),
  calories: numeric('calories'),
  fat: numeric('fat'),
  protein: numeric('protein'),
  carbohydrate: numeric('carbohydrate'),
  cholesterol: numeric('cholesterol'),
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

const recipeTypes = tasteAdvisor.table('recipe_types', {
  id: serial('id').primaryKey(),
  name: text('name'),
});

const recipeCategories = tasteAdvisor.table('recipe_categories', {
  type: integer('type').references(() => recipeTypes.id),
  recipe: integer('recipe').references(() => recipes.id),
});

export {
  tasteAdvisor,
  users,
  recipes,
  comments,
  savedRecipes,
  recipeTypes,
  recipeCategories,
};
