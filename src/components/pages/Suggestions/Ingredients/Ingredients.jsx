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
  
 } from './styles.js'


const IngredientsWrapper = styled.div`
  background-color: #86BF80;
  padding: 20px;
  border-radius: 8px;
`;

const Ingredients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  const handleRemoveIngredient = (ingredient) => {
    const updatedIngredients = selectedIngredients.filter((item) => item !== ingredient);
    setSelectedIngredients(updatedIngredients);
  };

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <IngredientsWrapper>
      <IngredientsContainer>
        <h2>Ingredients</h2>
        <BarSection>
            <div>
              <StyledSearchIcon />
              <input type="text" />
            </div>
            <StyledPlusIcon><AddPlus /></StyledPlusIcon>
        </BarSection>
        <ContainerProductList>
          <WrapperInputs>
            <WrapperContent>
                <input type="text" />
                <div>
                <EditIcon />
                <StyledDeleteIcon />
                </div>
            </WrapperContent>
            <WrapperContent>
                <input type="text" />
                <div>
                <EditIcon />
                <StyledDeleteIcon />
                </div>
            </WrapperContent>
            <WrapperContent>
                <input type="text" />
                <div>
                <EditIcon />
                <StyledDeleteIcon />
                </div>
            </WrapperContent>
            <WrapperContent>
                <input type="text" />
                <div>
                <EditIcon />
                <StyledDeleteIcon />
                </div>
            </WrapperContent>
          </WrapperInputs>
            
        </ContainerProductList>
    </IngredientsContainer>
    </IngredientsWrapper>
  );
};

export default Ingredients;