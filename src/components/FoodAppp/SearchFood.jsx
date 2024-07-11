
import React, { useEffect, useState } from 'react'
import styled from "./nav.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "ae5ba741f79540819b07381aef82800c"

export const SearchFood = ({foodData, setFoodData}) => {
  const[search, setSearch] = useState("Pizza");

  useEffect(()=>{
    async function fetchFood(){
      console.log('hi im useeffect');
      const res = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`)
      const resdata = await res.json();
      setFoodData(resdata.results);
    }
    fetchFood();
  }, [search]


  //   function demo(){
  //     console.log('hi im useeffect');
  //   }
  //   demo();
  // }, [search]
);

  return (
    <div className={styled.searchContainer}>
        <input 
          className={styled.input}
          type='text'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
    </div>
  )
}
