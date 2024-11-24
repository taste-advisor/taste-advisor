import { client } from '@/api/client';
import { getAuthorizationHeader } from '@/api/utils';

export const getAllRecipes = async body => {
  const { data } = await client.get('/recipes/');
  if (data.status === 'success') {
    return data.data;
  }
};

export const getRecipeById = async id => {
  const { data } = await client.get(`/recipes/recipe?id=${id}`);
  if (data.status === 'success') {
    return data.data;
  }
};

export const createRecipe = async body => {
  const { data } = await client.post(
    '/recipes/create',
    body,
    getAuthorizationHeader(),
  );
  return data;
};

export const saveRecipe = async id => {
  const { data } = await client.post(`/recipes/save?recipeId=${id}`);
  if (data.status === 'success') {
    return data.data;
  }
};

export const reactToRecipe = async (id, reaction) => {
  const { data } = await client.post(
    `/recipes/react?recipeId=${id}&reaction=${reaction}`,
  );
  if (data.status === 'success') {
    return data.data;
  }
};
