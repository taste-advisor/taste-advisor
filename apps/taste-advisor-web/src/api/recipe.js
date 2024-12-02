import { client } from '@/api/client';
import { getAuthorizationHeader } from '@/api/utils';

export const getAllRecipes = async () => {
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

export const saveRecipe = async (id, body = {}) => {
  const { data } = await client.post(
    `/recipes/save?recipeId=${id}`,
    body,
    getAuthorizationHeader(),
  );
  if (data.status === 'success') {
    return data.data;
  }
};

export const reactToRecipe = async (id, reaction, body = {}) => {
  const { data } = await client.post(
    `/recipes/react?recipeId=${id}&reaction=${reaction}`,
    body,
    getAuthorizationHeader(),
  );
  if (data.status === 'success') {
    return data.data;
  }
};
