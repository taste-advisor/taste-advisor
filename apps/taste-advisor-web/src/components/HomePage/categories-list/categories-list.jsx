'use client';

import { useState } from 'react';
import { RECIPE_CATEGORIES } from '@/constants';
import { CategoriesCard } from '@/components/HomePage/categories-card/categories-card';
import './categories-list.scss';

export const CategoriesList = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div className="categoriesList">
      <div className="categoriesMenu">
        <h2>Categories</h2>
        <button className="categoriesButton" onClick={toggleCategories}>
          {showAllCategories ? 'Show Less Categories' : 'View All Categories'}
        </button>
      </div>
      <div className="categoriesCardsList">
        {Object.values(RECIPE_CATEGORIES)
          .slice(0, showAllCategories ? undefined : 6)
          .map(c => (
            <CategoriesCard key={c.name} img={c.img} name={c.name} id={c.id} />
          ))}
      </div>
    </div>
  );
};
