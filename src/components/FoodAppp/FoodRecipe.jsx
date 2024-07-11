import React, { useEffect, useState } from "react";
import styled from "./foodContainer.module.css";
import { FoodExtendedIngredients } from "./FoodExtendedIngredients";

export const FoodRecipe = ({ foodId }) => {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "ae5ba741f79540819b07381aef82800c";

  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const recipeData = await res.json();
      setFood(recipeData);
      setIsLoading(false);
      console.log('recipeData', recipeData);
    }
    fetchRecipe();
  }, [foodId]);
  return (
    <>
      <div>
        <div className={styled.recipeCard}>
          <h1 className={styled.recipeName}>{food.title}</h1>
          <img className={styled.recipeImage} src={food.image} alt="image" />
        </div>
        <div className={styled.recipeDetails}>
          <span>
            <strong> ⏲ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👪 Serves {food.servings} </strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄 Vegan" : "🐃 Non-vegan"}</strong>
          </span>
        </div>
      </div>
      <div>
        <span>${food.pricePerServing} for serving</span>
      </div>
      <div>
        <h2>Ingredients</h2>
        <FoodExtendedIngredients food={food} isLoading={isLoading} />
        <h2>Instruction</h2>
        <div className={styled.recipeInstruction}>
          <ol>
            {isLoading ? (
              <p>Loadiing...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((keystep) => (
                <li key={keystep.step}>{keystep.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </>
  );
};
