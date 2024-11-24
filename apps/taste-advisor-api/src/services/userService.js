import { compare, hash } from 'bcrypt';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { db } from '../db/db.js';
import { likedRecipes, recipes, savedRecipes, users } from '../db/schema.js';
import { and, eq } from 'drizzle-orm';

const generateJWT = user => {
  return jwt.sign({ email: user.email }, process.env.JWT_SECRET);
};

export const findByEmail = async email => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  const { password: _password, ...userWithoutPassword } = user;
  return { ...userWithoutPassword, token: generateJWT(user) };
};

export const createNewUser = async user => {
  const hashedPassword = await hash(user.password, 5);
  const oldUser = await db
    .select()
    .from(users)
    .where(eq(users.email, user.email))
    .then(u => u[0]);

  if (oldUser) throw new Error('User with this email already exists');

  await db.insert(users).values({
    username: user.username,
    email: user.email,
    password: hashedPassword,
  });

  return generateJWT(user);
};

export const loginUser = async (email, password) => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)
    .then(u => u[0]);

  if (!user) throw new Error('User with this email not found');
  const isPasswordCorrect = await compare(password, user.password);
  if (!isPasswordCorrect) throw new Error('Incorrect password');

  return generateJWT(user);
};

export const getUserData = async user => {
  const saved = await db
    .select()
    .from(savedRecipes)
    .where(eq(savedRecipes.user, user.id));

  const liked = await db
    .select()
    .from(likedRecipes)
    .where(
      and(eq(likedRecipes.user, user.id), eq(likedRecipes.reaction, 'like')),
    );

  const authored = await db
    .select()
    .from(recipes)
    .where(eq(recipes.author, user.id));

  return {
    ...user,
    saved: saved.map(d => d.recipe),
    liked: liked.map(d => d.recipe),
    authored: authored.map(d => d.id),
  };
};

export const updateUser = async (user, newData) => {
  await db.update(users).set(newData).where(eq(users.id, user.id));
};
