import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { IngredientsContainer, BarSection, ContainerProductList, WrapperInputs, WrapperContent, StyledDeleteIcon, AddPlus, StyledPlusIcon, StyledSearchIcon, IngredientElement } from './styles.js';

const IngredientsWrapper = styled.div`
  background-color: #86BF80;  
  padding: 20px;
  border-radius: 8px;
`;

const Ingredients = ({ onAddIngredient }) => {
  const [inputValue, setInputValue] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      if (editingIndex !== null) {
        // Edytowanie składnika
        const updatedIngredientsList = [...ingredientsList];
        updatedIngredientsList[editingIndex] = inputValue.trim();
        setIngredientsList(updatedIngredientsList);
        setEditingIndex(null);
      } else {
        // Dodaj nowy składnik
        setIngredientsList([...ingredientsList, inputValue.trim()]);
      }
      onAddIngredient(inputValue.trim());
      setInputValue('');
    }
  };

  const handleDeleteIngredient = (index) => {
    const updatedIngredientsList = [...ingredientsList];
    updatedIngredientsList.splice(index, 1);
    setIngredientsList(updatedIngredientsList);
    setEditingIndex(null); // Resetuj edytowany indeks po usunięciu składnika
  };

  const handleEditIngredient = (index) => {
    setEditingIndex(index);
    setInputValue(ingredientsList[index]);
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
                  {editingIndex === index ? (
                    <SaveIcon style={{ cursor: 'pointer' }} onClick={() => handleKeyPress({ key: 'Enter' })} />
                  ) : (
                    <EditIcon style={{ cursor: 'pointer' }} onClick={() => handleEditIngredient(index)} />
                  )}
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
