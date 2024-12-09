'use client';
import React, { useState } from 'react';
import './search-bar.scss';
export const SearchBar = ({
  data,
  setFilteredData,
  setSuggestions,
  setCurrentItems,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setLocalSuggestions] = useState([]);

  const handleSearch = query => {
    setSearchQuery(query);

    if (query) {
      const filteredSuggestions = data.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase()),
      );
      setLocalSuggestions(filteredSuggestions);
      setSuggestions(filteredSuggestions);
    } else {
      setLocalSuggestions([]);
      setSuggestions([]);
      setFilteredData(data); // If the input field is empty, we restore all cards
    }
  };

  const handleSuggestionClick = suggestion => {
    setSearchQuery(suggestion.name);
    setLocalSuggestions([]);
    setSuggestions([]);
    setFilteredData([suggestion]);
    setCurrentItems([suggestion]);
  };

  //filter the cards by pressing Enter
  const handleSearchEnter = () => {
    if (searchQuery) {
      const filteredResults = data.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredData(filteredResults);
      setSuggestions([]);
    } else {
      setFilteredData(data);
    }
  };

  //filter cards by clicking the search icon
  const handleSearchClick = () => {
    if (searchQuery) {
      const filteredResults = data.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredData(filteredResults);
      setSuggestions([]);
    } else {
      setFilteredData(data);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearchEnter(); // call the function to process the search when Enter is pressed
    }
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search for an entry"
        value={searchQuery}
        onChange={e => handleSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <img
        src="/images/icons/search-icon.svg"
        alt="Search Icon"
        className="searchIcon"
        onClick={handleSearchClick}
      />
      <img
        src="/images/icons/accordion-icon.svg"
        alt="Accordion Icon"
        className="accordionIcon"
      />
      {searchQuery && suggestions.length > 0 && (
        <ul className="suggestionsList">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestionItem"
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};