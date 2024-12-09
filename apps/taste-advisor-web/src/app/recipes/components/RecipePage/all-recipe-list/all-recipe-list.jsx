'use client';
import { useEffect, useState } from 'react';
import { RecipeCard } from '@/components/RecipeCard/recipe-card.jsx';
import { getAllRecipes } from '@/api/recipe';
import { SearchBar } from '@/app/recipes/components/RecipePage/search-bar/search-bar.jsx';
import { Pagination } from '@/app/recipes/components/RecipePage/paginaton/pagination.jsx';
import { AllCategoriesList } from '@/app/recipes/components/RecipePage/all-categories-list/all-categories-list.jsx';
import './all-recipe-list.scss';

export const AllRecipeList = () => {
  const [data, setData] = useState(null); // all recipes
  const [filteredData, setFilteredData] = useState(null); // filtered recipes
  const [suggestions, setSuggestions] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 9; // number of elements per page

  useEffect(() => {
    getAllRecipes().then(res => {
      setData(res);
      setFilteredData(res); // show all recipes
    });
  }, []);

  //filtering recipe
  useEffect(() => {
    if (data) {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get('category'); // get category from URL

      if (category) {
        // If there is a category in the URL, we filter the recipes
        const filtered = data.filter(
          recipe => recipe.categories.includes(parseInt(category)), //  filter recipes by category
        );
        setFilteredData(filtered);
        setCurrentItems(filtered.slice(0, itemsPerPage));
      } else {
        setFilteredData(data); // If the category is not specified, show all recipes
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
