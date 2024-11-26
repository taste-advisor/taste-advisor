'use client';

import Link from 'next/link';
import { RecipeCard } from '@/components/HomePage/recipe-card/recipe-card.jsx';
import { getAllRecipes } from '@/api/recipe';
import { useEffect, useState } from 'react';
import { RECIPE_CATEGORIES } from '@/constants';
import './recipes-list.scss';

const CreateCard = info => {
  return (
    <RecipeCard
      key={info.id}
      image={info.imageUrl}
      title={info.name}
      category={info.categories}
      calories={info.calories}
    />
  );
};

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
  useEffect(() => {
    console.log(data);
  }, [data]);
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
          Object.values(data)
            .slice(0, 9)
            .map(info => (
              <CreateCard
                key={info.id}
                {...info}
                categories={getCategoryNamesByIds(info.categories)} // Передача текстових назв
              />
            ))
        ) : (
          <p>Завантаження...</p>
        )}
      </div>
      <Link href="/recipe" className="recipesLink">
        <p>View All Meal</p>
      </Link>
    </div>
  );
};
