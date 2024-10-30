import React from "react";
import "./App.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
              View Recipe
            </a>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;