import { db } from '../db/db.js';
import {
  comments,
  likedRecipes,
  recipeCategories,
  recipes,
  savedRecipes,
} from '../db/schema.js';
import { and, eq } from 'drizzle-orm';
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
  const commentsData = await db.select().from(comments);
  return {
    ...data,
    categories: categoriesData
      .filter(c => c.recipe === data.id)
      .map(item => item.type),
    comments: commentsData.filter(c => c.recipe === data.id),
  };
};

export const createNewRecipe = async (recipe, reqUser) => {
  if (!reqUser) throw new Error('Unauthorized');
  const user = await findByEmail(reqUser.email);
  if (!user) throw new Error('Unauthorized');

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

export const saveRecipe = async (recipe, reqUser) => {
  if (!reqUser) throw new Error('Unauthorized');
  const user = await findByEmail(reqUser.email);
  if (!user) throw new Error('Unauthorized');

  const [alreadySaved] = await db
    .select()
    .from(savedRecipes)
    .where(
      and(eq(savedRecipes.recipe, recipe), eq(savedRecipes.user, user.id)),
    );

  let savedRecipe;
  if (!alreadySaved) {
    [savedRecipe] = await db
      .insert(savedRecipes)
      .values({
        recipe: recipe,
        user: reqUser.id,
      })
      .returning();
  } else {
    await db
      .delete(savedRecipes)
      .where(
        and(eq(savedRecipes.recipe, recipe), eq(savedRecipes.user, user.id)),
      );
  }

  return savedRecipe;
};

export const reactToRecipe = async (recipe, reqUser, reaction) => {
  if (!reqUser) throw new Error('Unauthorized');
  const user = await findByEmail(reqUser.email);
  if (!user) throw new Error('Unauthorized');

  const [recipeData] = await db
    .select()
    .from(recipes)
    .where(eq(recipes.id, recipe))
    .limit(1);

  const [alreadyReacted] = await db
    .select()
    .from(likedRecipes)
    .where(
      and(eq(likedRecipes.recipe, recipe), eq(likedRecipes.user, user.id)),
    );

  let likedRecipe;

  if (!alreadyReacted) {
    [likedRecipe] = await db
      .insert(likedRecipes)
      .values({
        recipe: recipe,
        user: reqUser.id,
        reaction: reaction,
      })
      .returning();

    await db
      .update(recipes)
      .set(
        reaction === 'like'
          ? { likes: recipeData.likes + 1 }
          : { dislikes: recipeData.dislikes + 1 },
      )
      .where(eq(recipes.id, recipe));
  } else {
    if (alreadyReacted.reaction === reaction) {
      await db
        .delete(likedRecipes)
        .where(
          and(eq(likedRecipes.recipe, recipe), eq(likedRecipes.user, user.id)),
        );

      await db
        .update(recipes)
        .set(
          reaction === 'like'
            ? { likes: recipeData.likes - 1 }
            : { dislikes: recipeData.dislikes - 1 },
        )
        .where(eq(recipes.id, recipe));
    } else {
      await db
        .update(likedRecipes)
        .set({ reaction: reaction })
        .where(
          and(eq(likedRecipes.recipe, recipe), eq(likedRecipes.user, user.id)),
        );

      await db
        .update(recipes)
        .set(
          reaction === 'like'
            ? { likes: recipeData.likes + 1, dislikes: recipeData.dislikes - 1 }
            : {
                dislikes: recipeData.dislikes + 1,
                likes: recipeData.likes - 1,
              },
        )
        .where(eq(recipes.id, recipe));
    }
  }

  return likedRecipe;
};
