import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  IngredientsContainer,
  BarSection,
  ContainerProductList,
  WrapperInputs,
  WrapperContent,
  StyledDeleteIcon,
  AddPlus,
  StyledPlusIcon,
  StyledSearchIcon,
  IngredientElement,
} from './styles.js';

const IngredientsWrapper = styled.div`
  background-color: #86BF80;
  padding: 20px;
  border-radius: 8px;
`;

const Ingredients = () => {
  const [inputValue, setInputValue] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      // Dodaj składnik do listy
      setIngredientsList([...ingredientsList, inputValue.trim()]);
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

  const handleAddIngredient = () => {
    // Dodaj składnik do listy po kliknięciu w ikonę "plus"
    if (inputValue.trim() !== '') {
      setIngredientsList([...ingredientsList, inputValue.trim()]);
      // Wyczyść pole input
      setInputValue('');
    }
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
          <StyledPlusIcon onClick={handleAddIngredient}>
            <AddPlus />
          </StyledPlusIcon>
        </BarSection>
        <ContainerProductList>
          <WrapperInputs>
            {ingredientsList.length === 0 ? (
              <div>No ingredients</div>
            ) : (
              ingredientsList.map((ingredient, index) => (
                <WrapperContent key={index}>
                  <IngredientElement>{ingredient}</IngredientElement>
                  <div>
                    <EditIcon style={{ cursor: 'pointer' }} />
                    <StyledDeleteIcon onClick={() => handleDeleteIngredient(index)} />
                  </div>
                </WrapperContent>
              ))
            )}
          </WrapperInputs>
        </ContainerProductList>
      </IngredientsContainer>
    </IngredientsWrapper>
  );
};

export default Ingredients;
