'use client';

import { useState, useEffect } from 'react';
import { saveRecipe } from '@/api/recipe.js';
import Link from 'next/link';
import './recipe-card.scss';

export const RecipeCard = ({ recipeId, image, calories, title, category }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    if (savedRecipes.includes(recipeId)) {
      setIsSaved(true);
    }
  }, [recipeId]);

  const handleSave = () => {
    try {
      const savedRecipes =
        JSON.parse(localStorage.getItem('savedRecipes')) || [];

      if (savedRecipes.includes(recipeId)) {
        const updatedRecipes = savedRecipes.filter(id => id !== recipeId);
        localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
        setIsSaved(false);
      } else {
        savedRecipes.push(recipeId);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        setIsSaved(true);
      }
    } catch (error) {
      console.error('Failed to save recipe:', error);
    }
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
      <Link href={`/${recipeId}`} className="recipeCard">
        <img src={image} alt="recipe image" className="recipeCardImage" />
        <h3 className="recipeCardTitle">{title}</h3>
        <div className="cardInfo">
          <img src="/images/icons/category.svg" className="recipeCardIcons" />
          <p className="recipeCardText">{category}</p>
          <img src="/images/icons/calories.svg" className="recipeCardIcons" />
          <p className="recipeCardText">{calories} calories</p>
        </div>
      </Link>
    </div>
  );
};
