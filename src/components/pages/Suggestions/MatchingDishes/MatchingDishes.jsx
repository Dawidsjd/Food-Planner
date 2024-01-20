import React, { useState } from 'react';
import styled from 'styled-components';
import {
    DishesWrapper,
    IngredientsContainer,
    WrapperContent,
    WrapperInputs,
    HeadingContainer,
 } from './styles.js'



const MatchingDishes = () => {
    
return (
   <DishesWrapper>
    <IngredientsContainer>
        <HeadingContainer>
        <h2>Matching Dishes</h2>
        </HeadingContainer>
        <WrapperInputs>
            <WrapperContent>
                <h2>Food Name</h2>
                <div>
                <input type="text" />
                </div>
            </WrapperContent>
            <WrapperContent>
                <h2>Food Name</h2>
                <div>
                <input type="text" />
                </div>
            </WrapperContent>
            <WrapperContent>
                <h2>Food Name</h2>
                <div>
                <input type="text" />
                </div>
            </WrapperContent>
        </WrapperInputs>
    </IngredientsContainer>
   </DishesWrapper> 
);
};

export default MatchingDishes;
