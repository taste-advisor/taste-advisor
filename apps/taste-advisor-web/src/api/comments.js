import { client } from '@/api/client';
import { getAuthorizationHeader } from '@/api/utils';

export const createComment = async (body, recipeId) => {
  const { data } = await client.post(
    `/comments/create?recipeId=${recipeId}`,
    { text: body },
    getAuthorizationHeader(),
  );
  return data;
};
