'use client';

import Link from 'next/link';
import { RecipeCard } from '@/components/RecipeCard/recipe-card.jsx';
import { getAllRecipes } from '@/api/recipe';
import { useEffect, useState } from 'react';
import './recipes-list.scss';

export const RecipesList = () => {
  const [data, setData] = useState(null);
  const [recipesToShow, setRecipesToShow] = useState(9);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 920) {
        setRecipesToShow(3);
      } else {
        setRecipesToShow(9);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            .slice(0, recipesToShow)
            .map(info => (
              <RecipeCard
                key={info.id}
                recipeId={info.id}
                image={info.imageUrl}
                title={info.name}
                categories={info.categories}
                calories={info.calories}
                data={info}
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
