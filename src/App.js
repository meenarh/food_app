import React, { useState, useEffect, useCallback } from "react";
import RecipeList from "./RecipeList";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  // const API_KEY = "a1cabc0be6e9437de6cfdb50b907beff";
  // const APP_ID = "825bab94";
  const API_URL = `https://api.edamam.com/search?q=${search}&app_id=${'8b9246da'}&app_key=${'b293ae61719766544de830185a972a9d'}`;

  const fetchRecipes = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }, [API_URL]);

  useEffect(() => {
    if (search) {
      fetchRecipes();
    }
  }, [fetchRecipes, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(query);
    setQuery("");
  };

  return (
    <div className="app">
      <h1>Food Recipe Search App</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;