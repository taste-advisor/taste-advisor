import { db } from '../db/db.js';
import { recipeCategories, recipes } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { findByEmail } from './userService.js';

export const getAllRecipes = async () => {
  const data = await db.select().from(recipes);
  const categoriesData = await db.select().from(recipeCategories);
  return data.map(d => ({
    ...d,
    categories: categoriesData
      .filter(c => c.recipe === d.id)
      .map(item => item.type),
  }));
};

export const getRecipeById = async id => {
  const [data] = await db
    .select()
    .from(recipes)
    .where(eq(recipes.id, id))
    .limit(1);
  const categoriesData = await db.select().from(recipeCategories);
  return {
    ...data,
    categories: categoriesData
      .filter(c => c.recipe === data.id)
      .map(item => item.type),
  };
};

export const createNewRecipe = async (recipe, reqUser) => {
  if (!reqUser) throw new Error('Unauthorized');
  const user = await findByEmail(reqUser.email);
  if (!user) throw new Error('Unauthorized');

  console.log(user);
  const [newRecipe] = await db
    .insert(recipes)
    .values({
      name: recipe.name,
      author: user.id,
      likes: 0,
      dislikes: 0,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      date: new Date().toISOString().split('T')[0],
      description: recipe.description,
      imageUrl: recipe.imageUrl,
      calories: recipe.calories,
      fat: recipe.fat,
      protein: recipe.protein,
      carbohydrate: recipe.carbohydrate,
      cholesterol: recipe.cholesterol,
    })
    .returning();

  console.log(newRecipe);
  if (recipe.categories.length) {
    for (const category of recipe.categories) {
      await db.insert(recipeCategories).values({
        type: category,
        recipe: newRecipe.id,
      });
    }
  }

  return newRecipe;
};
