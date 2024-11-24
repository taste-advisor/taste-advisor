import { client } from '@/api/client';
import { getAuthorizationHeader } from '@/api/utils';

export const createRecipe = async (body, recipeId) => {
  const { data } = await client.post(
    `/comments/create?recipeId=${recipeId}`,
    body,
    getAuthorizationHeader(),
  );
  return data;
};
