'use client';

import Link from 'next/link';
import { RecipeCard } from '@/components/HomePage/recipe-card/recipe-card.jsx';
import { getAllRecipes } from '@/api/recipe';
import { useEffect, useState } from 'react';
import { RECIPE_CATEGORIES } from '@/constants';
import './recipes-list.scss';

const getCategoryNamesByIds = categoryIds => {
  return categoryIds
    .map(id => {
      const category = Object.values(RECIPE_CATEGORIES).find(
        cat => cat.id === id,
      );
      return category ? category.name : 'Unknown';
    })
    .join(', ');
};

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
          Discover a collection of quick and delicious meals perfect for any
          occasion. From hearty dinners to sweet treats, these recipes are easy
          to prepare and packed with flavor!
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
