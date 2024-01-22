import React, { useState } from 'react';
import styled from 'styled-components';
import {
    DishesWrapper,
    MatchingDishesContainer,
    WrapperContent,
    WrapperInputs,
    HeadingContainer,
    WrapperImage,
    SectionListDishes,
    WrapperContentText,
 } from './styles.js'

import majkiDzordan from "../../../../assets/majkidzordan.jpg"


const MatchingDishes = () => {
    
return (
    <DishesWrapper>
        <MatchingDishesContainer>
            <HeadingContainer>
                <h2>Matching Dishes</h2>
            </HeadingContainer>
            <SectionListDishes>
                <div>
                    <WrapperContent>
                        <WrapperImage>
                            <img src={majkiDzordan} alt="Majkyl dżekson" width={1000} height={1000} />
                        </WrapperImage>
                        <WrapperContentText>
                            <h2>Food Name</h2>
                            <p>Ingredients: ingredients1, ingredients2, ingredients3, ingredients4...</p>
                        </WrapperContentText>
                    </WrapperContent>
                    <WrapperContent>
                        <WrapperImage>
                            <img src={majkiDzordan} alt="Majkyl dżekson" width={1000} height={1000} />
                        </WrapperImage>
                        <WrapperContentText>
                            <h2>Food Name</h2>
                            <p>Ingredients: ingredients1, ingredients2, ingredients3, ingredients4...</p>
                        </WrapperContentText>
                    </WrapperContent>
                    <WrapperContent>
                        <WrapperImage>
                            <img src={majkiDzordan} alt="Majkyl dżekson" width={1000} height={1000} />
                        </WrapperImage>
                        <WrapperContentText>
                            <h2>Food Name</h2>
                            <p>Ingredients: ingredients1, ingredients2, ingredients3, ingredients4...</p>
                        </WrapperContentText>
                    </WrapperContent>
                    <WrapperContent>
                        <WrapperImage>
                            <img src={majkiDzordan} alt="Majkyl dżekson" width={1000} height={1000} />
                        </WrapperImage>
                        <WrapperContentText>
                            <h2>Food Name</h2>
                            <p>Ingredients: ingredients1, ingredients2, ingredients3, ingredients4...</p>
                        </WrapperContentText>
                    </WrapperContent>
                </div>
            </SectionListDishes>
        </MatchingDishesContainer>
    </DishesWrapper>
);
};

export default MatchingDishes;