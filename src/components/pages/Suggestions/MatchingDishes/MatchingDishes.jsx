import React, { useState, useEffect } from 'react';
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
} from './styles.js';

const MatchingDishes = ({ ingredientsList }) => {
  const [matchingDishes, setMatchingDishes] = useState([]);

  useEffect(() => {
    const fetchMatchingDishes = async () => {
      // Sprawdzamy, czy ingredientsList nie jest puste
      if (ingredientsList.length === 0) {
        setMatchingDishes([]);
        return;
      }

      const ingredientsQuery = ingredientsList.join('%20');
      const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${ingredientsQuery}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b04392eaa5msh0f05838fdb88036p19bf10jsn4ac20fbe4882',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        setMatchingDishes(data.results);
      } catch (error) {
        console.error('Error fetching matching dishes:', error);
      }
    };

    fetchMatchingDishes();
  }, [ingredientsList]); // Dodajemy ingredientsList do zależności useEffect

  return (
    <DishesWrapper>
      <MatchingDishesContainer>
        <HeadingContainer>
          <h2>Matching Dishes</h2>
        </HeadingContainer>
        <SectionListDishes>
          <div>
            {matchingDishes.length > 0 ? (
              matchingDishes.map((dish) => (
                <WrapperContent key={dish.id}>
                  <WrapperImage>
                    <img src={dish.thumbnail_url} alt={dish.name} />
                  </WrapperImage>
                  <WrapperContentText>
                    <h2>{dish.name}</h2>
                    {/* Dodaj wyświetlanie składników, opisu itp. */}
                  </WrapperContentText>
                </WrapperContent>
              ))
            ) : (
              <p>No results</p>
            )}
          </div>
        </SectionListDishes>
      </MatchingDishesContainer>
    </DishesWrapper>
  );
};

export default MatchingDishes;
