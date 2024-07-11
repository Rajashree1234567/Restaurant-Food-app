

import React, { useState } from 'react'
import styled from './foodContainer.module.css';
import { SearchFood } from './SearchFood'
import FoodList from './FoodList';
import { Nav } from './Nav';
import { FoodContainer } from './FoodContainer';
import { FoodRecipe } from './FoodRecipe';

export const FoodMain = () => {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(656329);
  return (
    <div>
      <Nav />
      <SearchFood foodData={foodData} setFoodData={setFoodData} />

     
      <FoodContainer>
          <div className={styled.innerContainer}>
              <FoodList setFoodId={setFoodId} foodData={foodData} />
          </div>
          <div className={styled.innerContainer}>
              <FoodRecipe foodId={foodId} />
          </div>
      </FoodContainer>

    </div>
  )
}
