import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IngredientsContainer, BarSection, ContainerProductList, WrapperInputs, WrapperContent, StyledDeleteIcon, AddPlus, StyledPlusIcon, StyledSearchIcon, IngredientElement } from './styles.js';

const IngredientsWrapper = styled.div`
  background-color: #86BF80;
  padding: 20px;
  border-radius: 8px;
`;

const Ingredients = ({ onAddIngredient }) => {
  const [inputValue, setInputValue] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      // Dodaj składnik do listy
      setIngredientsList([...ingredientsList, inputValue.trim()]);
      // Dodaj składnik również do komponentu nadrzędnego
      onAddIngredient(inputValue.trim());
      // Wyczyść pole input
      setInputValue('');
    }
  };

  const handleDeleteIngredient = (index) => {
    // Usuń składnik z listy
    const updatedIngredientsList = [...ingredientsList];
    updatedIngredientsList.splice(index, 1);
    setIngredientsList(updatedIngredientsList);
  };

  return (
    <IngredientsWrapper>
      <IngredientsContainer>
        <h2>Ingredients</h2>
        <BarSection>
          <div>
            <StyledSearchIcon />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <StyledPlusIcon onClick={() => onAddIngredient(inputValue.trim())}><AddPlus /></StyledPlusIcon>
        </BarSection>
        <ContainerProductList>
          <WrapperInputs>
            {ingredientsList.map((ingredient, index) => (
              <WrapperContent key={index}>
                <IngredientElement>{ingredient}</IngredientElement>
                <div>
                  <EditIcon style={{ cursor: 'pointer' }} />
                   <StyledDeleteIcon onClick={() => handleDeleteIngredient(index)} /> {/*USUWANIE NIE DZIALA JESZCZE */}
                </div>
              </WrapperContent>
            ))}
          </WrapperInputs>
        </ContainerProductList>
      </IngredientsContainer>
    </IngredientsWrapper>
  );
};

export default Ingredients;
