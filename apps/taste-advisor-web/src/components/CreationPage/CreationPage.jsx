'use client';
import React, { useEffect, useState } from 'react';
import { Dropdown } from '@/components/CreationPage/components/Dropdown/Dropdown';
import { RECIPE_CATEGORIES } from '@/constants';
import './CreationPage.scss';
import { InputField } from '@/components/InputFields/InputFields';
import { createRecipe } from '@/api/recipe';
import { useUserStore } from '@/hooks/userStore';
import { getMe } from '@/api/auth';

export const CreationPage = () => {
  const { user } = useUserStore();
  useEffect(() => {
    getMe();
  }, []);
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    category1: '',
    category2: '',
    category3: '',
    calories: '',
    fat: '',
    protein: '',
    carbohydrates: '',
    cholesterol: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdownChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const categories = new Set();
    if (formData.category1 !== '') categories.add(+formData.category1);
    if (formData.category2 !== '') categories.add(+formData.category2);
    if (formData.category3 !== '') categories.add(+formData.category3);

    if (!formData.name || !ingredients || !instructions) {
      alert('Please fill out the name, ingredients and instructions form');
      return;
    }
    const dto = {
      name: formData.name,
      imageUrl: formData.imageUrl,
      description: description,
      ingredients: ingredients,
      instructions: instructions,
      calories: formData.calories ? +formData.calories : null,
      fat: formData.fat ? +formData.fat : null,
      protein: formData.protein ? +formData.protein : null,
      carbohydrate: formData.carbohydrates ? +formData.carbohydrates : null,
      cholesterol: formData.cholesterol ? +formData.cholesterol : null,
      categories: Array.from(categories),
    };

    createRecipe(dto);
    alert('Submitted!');
  };

  if (!user) {
    return null;
  }
  return (
    <div>
      <h2 className="title">Create Meal</h2>
      <form className="form">
        <div className="mainGroup">
          <div className="column">
            <InputField
              label="Name"
              name="name"
              type="text"
              placeholder="Beshbarmak"
              onChange={handleInputChange}
            />
            <InputField
              label="Photo URL"
              name="imageUrl"
              type="text"
              placeholder="https://photo-link"
              onChange={handleInputChange}
            />
            <div className="field">
              <label htmlFor="description">Description</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Describe your dish"
                required
              />
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label htmlFor="category1">Category 1</label>
              <Dropdown
                options={Object.values(RECIPE_CATEGORIES)}
                defaultValue=""
                onChange={handleDropdownChange}
                name="category1"
              />
            </div>
            <div className="field">
              <label htmlFor="category2">Category 2</label>
              <Dropdown
                options={Object.values(RECIPE_CATEGORIES)}
                defaultValue=""
                onChange={handleDropdownChange}
                name="category2"
              />
            </div>
            <div className="field">
              <label htmlFor="category3">Category 3</label>
              <Dropdown
                options={Object.values(RECIPE_CATEGORIES)}
                defaultValue=""
                onChange={handleDropdownChange}
                name="category3"
              />
            </div>
            *Limit for categories is 3. Ignore other fields if you have less
          </div>
        </div>
        <h3>Nutrition Information</h3>
        <div className="mainGroup">
          <div className="column">
            <div className="namedField">
              <InputField
                label="Calories"
                name="calories"
                type="text"
                placeholder="Calories"
                onChange={handleInputChange}
              />
              kcal
            </div>
            <div className="namedField">
              <InputField
                label="Fat"
                name="fat"
                type="text"
                placeholder="Fat"
                onChange={handleInputChange}
              />
              grams
            </div>
            <div className="namedField">
              <InputField
                label="Protein"
                name="protein"
                type="text"
                placeholder="Protein"
                onChange={handleInputChange}
              />
              grams
            </div>
          </div>
          <div className="column">
            <div className="namedField">
              <InputField
                label="Carbohydrates"
                name="carbohydrates"
                type="text"
                placeholder="Carbohydrates"
                onChange={handleInputChange}
              />
              grams
            </div>
            <div className="namedField">
              <InputField
                label="Cholesterol"
                name="cholesterol"
                type="text"
                placeholder="Cholesterol"
                onChange={handleInputChange}
              />
              milligrams
            </div>
          </div>
        </div>
        <h3>Ingredients</h3>
        <div className="mainGroup">
          <div className="column">
            <div className="field">
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                value={ingredients}
                onChange={e => setIngredients(e.target.value)}
                placeholder="Ingredients"
                required
              />
            </div>
            *Write ingredients separated by comma and space (', ')
          </div>
        </div>
        <h3>Instructions</h3>
        <div className="mainGroup">
          <div className="column">
            <div className="field">
              <label htmlFor="instructions">Instructions</label>
              <textarea
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
                placeholder="Describe your steps"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
