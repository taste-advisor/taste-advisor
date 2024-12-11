'use client';

import { useState, useEffect } from 'react';
import { RecipeCard } from '@/components/RecipeCard/recipe-card.jsx';
import { getAllRecipes } from '@/api/recipe';
import { useUserStore } from '@/hooks/userStore';
import './tabs.scss';

export const MyMealsRecipes = () => {
  const { user } = useUserStore();
  const [myMealsRecipes, setMyMealsRecipes] = useState(null);

  useEffect(() => {
    if (user) {
      getAllRecipes().then(allRecipes => {
        const myMealsIds = user.authored.map(recipe => recipe.id);
        const filteredRecipes = allRecipes.filter(recipe =>
          myMealsIds.includes(recipe.id),
        );
        setMyMealsRecipes(filteredRecipes);
      });
    }
  }, [user]);

  if (!myMealsRecipes) {
    return <p>Loading...</p>;
  }

  return (
    <div className="tabsRecipesList">
      <div className="tabsRecipesCardsList">
        {myMealsRecipes.length > 0 ? (
          myMealsRecipes.map(info => <RecipeCard key={info.id} data={info} />)
        ) : (
          <div className="emptySavedRecipes">
            <img
              src="/images/empty-pictures.png"
              alt="no haven`t added your dish yet"
              className="emptyPictures"
            />
            <h2 className="emptyText">You haven`t added your dish yet</h2>
          </div>
        )}
      </div>
    </div>
  );
};
