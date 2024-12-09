'use client';
import React, { useState } from 'react';
import { RECIPE_CATEGORIES } from '@/constants';
import { Modal } from '@/app/recipes/components/RecipePage/modal/modal.jsx';
import './all-categories-list.scss';
import { AllCategoriesCard } from '@/app/recipes/components/RecipePage/all-categories-card/all-categories-card';

export const AllCategoriesList = ({ recipes, limit = 13 }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleCategoryClick = id => {
    window.location.href = `/recipes?category=${id}`; // це змінює URL
  };

  return (
    <div className="allCategoriesList">
      <div className="categoriesMenu">
        <button onClick={openModal} className="categoriesButton">
          Categories
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Categories</h2>
        <div className="allCategoriesCardsList">
          {Object.values(RECIPE_CATEGORIES).map(category => (
            <AllCategoriesCard
              key={category.name}
              img={category.img}
              name={category.name}
              id={category.id}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </Modal>
    </div>
  );
};
