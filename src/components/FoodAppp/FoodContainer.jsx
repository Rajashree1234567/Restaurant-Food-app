import styled from './foodContainer.module.css';
import React from 'react'

export const FoodContainer = ({children}) => {
  return (
    <>
        <div className={styled.parentContainer}>
            {children}
        </div>
    </>
  )
}
