'use client';

import { useState, useEffect } from 'react';
import { RecipeCard } from '@/components/RecipeCard/recipe-card.jsx';
import { getAllRecipes } from '@/api/recipe';
import { useUserStore } from '@/hooks/userStore';
import './tabs.scss';

export const SavedRecipes = () => {
  const { user } = useUserStore();
  const [savedRecipes, setSavedRecipes] = useState(null);

  useEffect(() => {
    if (user) {
      getAllRecipes().then(allRecipes => {
        const savedIds = user.saved.map(recipe => recipe.id);
        const filteredRecipes = allRecipes.filter(recipe =>
          savedIds.includes(recipe.id),
        );
        setSavedRecipes(filteredRecipes);
      });
    }
  }, [user]);

  if (!savedRecipes) {
    return <p>Loading...</p>;
  }

  return (
    <div className="tabsRecipesList">
      <div className="tabsRecipesCardsList">
        {savedRecipes.length > 0 ? (
          savedRecipes.map(info => <RecipeCard key={info.id} data={info} />)
        ) : (
          <div className="emptySavedRecipes">
            <img
              src="/images/empty-pictures.png"
              alt="no saved recipes"
              className="emptyPictures"
            />
            <h2 className="emptyText">You haven't saved anything yet</h2>
          </div>
        )}
      </div>
    </div>
  );
};
