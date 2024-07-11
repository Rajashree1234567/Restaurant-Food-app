import React from "react";
import styled from "./foodContainer.module.css";

export const FoodExtendedIngredients = ({ food, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        food.extendedIngredients.map((extendedItem) => (
          <div key={extendedItem.name} >
            <div className={styled.extendContainer}>
              <div className={styled.extendImage}>
                <img
                    className={styled.ExtendImageSize}
                  src={`https://spoonacular.com/cdn/ingredients_100x100`}
                  alt="Ingredient Image"
                />
              </div>
              <div className={styled.ExtenNameContainer}>
                <div className={styled.extendName}>{extendedItem.name}</div>
                <div className={styled.extendAmount}>
                  {extendedItem.amount} {extendedItem.unit}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
