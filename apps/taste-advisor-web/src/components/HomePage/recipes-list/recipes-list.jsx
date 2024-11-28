'use client';

import Link from 'next/link';
import { RecipeCard } from '@/components/HomePage/recipe-card/recipe-card.jsx';
import { getAllRecipes } from '@/api/recipe';
import { useEffect, useState } from 'react';
import { RECIPE_CATEGORIES } from '@/constants';
import './recipes-list.scss';

function getCategoryNamesByIds(categoryIds) {
  return categoryIds
    .map(id => {
      const category = Object.values(RECIPE_CATEGORIES).find(
        cat => cat.id === id,
      );
      return category ? category.name : 'Unknown';
    })
    .join(', ');
}

export const RecipesList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getAllRecipes().then(res => {
      setData(res);
    });
  }, []);

  return (
    <div className="recipesList">
      <div className="recipesListTitle">
        <h1>Simple and tasty recipes</h1>
        <p className="recipesListDescription">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </p>
      </div>
      <div className="recipesCardsList">
        {data ? (
          data
            .slice(0, 9)
            .map(info => (
              <RecipeCard
                key={info.id}
                recipeId={info.id}
                image={info.imageUrl}
                title={info.name}
                category={getCategoryNamesByIds(info.categories)}
                calories={info.calories}
              />
            ))
        ) : (
          <p>Завантаження...</p>
        )}
      </div>
      <Link href="/recipes" className="recipesLink">
        <p>View All Meal</p>
      </Link>
    </div>
  );
};
