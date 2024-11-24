import { db } from '../db/db.js';
import { comments } from '../db/schema.js';
import { findByEmail } from './userService.js';

export const createNewComment = async (reqUser, recipeId, content) => {
  if (!reqUser) throw new Error('Unauthorized');
  const user = await findByEmail(reqUser.email);
  if (!user) throw new Error('Unauthorized');

  const [newComment] = await db
    .insert(comments)
    .values({
      author: user.id,
      recipe: recipeId,
      content: content,
    })
    .returning();

  return newComment;
};
