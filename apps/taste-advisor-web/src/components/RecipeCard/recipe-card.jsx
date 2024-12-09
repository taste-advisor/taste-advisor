'use client';

import { useState, useEffect } from 'react';
import { saveRecipe } from '@/api/recipe.js';
import Link from 'next/link';
import './recipe-card.scss';
import { useUserStore } from '@/hooks/userStore';
import { getMe } from '@/api/auth';
import { RECIPE_CATEGORIES } from '@/constants';

export const RecipeCard = ({ data }) => {
  const { user } = useUserStore();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!user) {
      getMe();
    } else {
      if (user.saved && Array.isArray(user.saved) && data?.id) {
        if (user.saved.find(d => d.id === data.id)) {
          setIsSaved(true);
        }
      }
    }
  }, [user, data]);

  const handleSave = () => {
    if (!data?.id) {
      console.error('Recipe data or ID is missing');
      return;
    }
    saveRecipe(data.id);
    setIsSaved(!isSaved);
  };

  return (
    <div className="recipeCardBody">
      <div className="saveButton" onClick={handleSave}>
        <img
          src="/images/icons/save.svg"
          className={`saveButtonIcon ${isSaved ? 'saved' : ''}`}
          alt="Save"
        />
      </div>
      <Link href={`/recipes/${data.id}`} className="recipeCard">
        <img
          src={data.imageUrl}
          alt="recipe image"
          className="recipeCardImage"
        />
        <h3 className="recipeCardTitle">{data.name}</h3>
        <div className="cardInfo">
          <img src="/images/icons/category.svg" className="recipeCardIcons" />
          <p className="recipeCardText">
            {data.categories
              .map(
                c =>
                  Object.values(RECIPE_CATEGORIES).find(r => r.id === c).name,
              )
              .join(', ')}
          </p>
          <img src="/images/icons/calories.svg" className="recipeCardIcons" />
          <p className="recipeCardText">{data.calories} calories</p>
        </div>
      </Link>
    </div>
  );
};
