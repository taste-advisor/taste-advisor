'use client';

import { useState, useEffect } from 'react';
import { RecipeCard } from '@/components/RecipeCard/recipe-card.jsx';
import { getAllRecipes } from '@/api/recipe';
import './tabs.scss';
import { useUserStore } from '@/hooks/userStore';

export const LikedRecipes = () => {
  const { user } = useUserStore();
  const [likedRecipes, setLikedRecipes] = useState(null);

  useEffect(() => {
    if (user) {
      getAllRecipes().then(allRecipes => {
        const likedIds = user.liked.map(recipe => recipe.id);
        const filteredRecipes = allRecipes.filter(recipe =>
          likedIds.includes(recipe.id),
        );
        setLikedRecipes(filteredRecipes);
      });
    }
  }, [user]);

  if (!likedRecipes) {
    return <p>Loading...</p>;
  }

  return (
    <div className="tabsRecipesList">
      <div className="tabsRecipesCardsList">
        {likedRecipes.length > 0 ? (
          likedRecipes.map(info => <RecipeCard key={info.id} data={info} />)
        ) : (
          <div className="emptyLikedRecipes">
            <img
              src="/images/empty-pictures.png"
              alt="no liked recipes"
              className="emptyPictures"
            />
            <h2 className="emptyText">You haven't liked anything yet</h2>
          </div>
        )}
      </div>
    </div>
  );
};
