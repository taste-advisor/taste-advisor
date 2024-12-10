'use client';
import { useEffect, useState } from 'react';
import { RecipeCard } from '@/components/RecipeCard/recipe-card.jsx';
import { getAllRecipes } from '@/api/recipe';
import { SearchBar } from '@/app/recipes/components/RecipePage/search-bar/search-bar.jsx';
import { Pagination } from '@/app/recipes/components/RecipePage/paginaton/pagination.jsx';
import { AllCategoriesList } from '@/app/recipes/components/RecipePage/all-categories-list/all-categories-list.jsx';
import './all-recipe-list.scss';

export const AllRecipeList = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 9;

  useEffect(() => {
    getAllRecipes().then(res => {
      setData(res);
      setFilteredData(res); // show all recipes
    });
  }, []);

  useEffect(() => {
    if (data) {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get('category');

      if (category) {
        const filtered = data.filter(
          recipe => recipe.categories.includes(parseInt(category)),
        );
        setFilteredData(filtered);
        setCurrentItems(filtered.slice(0, itemsPerPage));
      } else {
        setFilteredData(data);
        setCurrentItems(data.slice(0, itemsPerPage));
      }
    }
  }, [data]);

  return (
    <div className="recipesList">
      <div className="menuContainer">
        <SearchBar
          data={data}
          setFilteredData={setFilteredData}
          setSuggestions={setSuggestions}
          setCurrentItems={setCurrentItems}
        />
        <AllCategoriesList recipes={data} />
      </div>
      <div className="recipesCardsList">
        {currentItems && currentItems.length > 0 ? (
          currentItems.map(info => (
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
          <p>No recipes found for your request...</p>
        )}
      </div>
      {filteredData && (
        <Pagination
          data={filteredData}
          itemsPerPage={itemsPerPage}
          onPageItemsChange={setCurrentItems}
        />
      )}
    </div>
  );
};
