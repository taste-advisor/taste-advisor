import express from 'express';
import {
  createRecipe,
  getRecipes,
  getSingleRecipe,
  reactRecipe,
  saveUserRecipe,
} from '../controllers/recipeController.js';
import { authenticate } from '../middlewares/auth.js';

export const recipesRouter = express.Router();

recipesRouter.get('/', getRecipes);
recipesRouter.get('/recipe', getSingleRecipe);
recipesRouter.post('/create', authenticate, createRecipe);
recipesRouter.post('/save', authenticate, saveUserRecipe);
recipesRouter.post('/react', authenticate, reactRecipe);
