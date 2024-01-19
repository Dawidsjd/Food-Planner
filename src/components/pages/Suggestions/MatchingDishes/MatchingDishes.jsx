import React, { useState } from 'react';
import styled from 'styled-components';
import {
    DishesWrapper,
    IngredientsContainer,
 } from './styles.js'


const MatchingDishes = () => {
return (
   <DishesWrapper>
    <IngredientsContainer>
        <h2>Matching Dishes</h2>
    </IngredientsContainer>
   </DishesWrapper> 
);
};

export default MatchingDishes;
