import React, { useState } from 'react';
import styled from 'styled-components';

const IngredientsWrapper = styled.div`
  background-color: #4caf50;
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
      <input
        type="text"
        placeholder="Search ingredients"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredIngredients.map((ingredient) => (
          <li key={ingredient}>
            {ingredient} <button onClick={() => handleAddIngredient(ingredient)}>Add</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Selected Ingredients</h2>
        <ul>
          {selectedIngredients.map((ingredient) => (
            <li key={ingredient}>
              {ingredient}{' '}
              <button onClick={() => handleRemoveIngredient(ingredient)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </IngredientsWrapper>
  );
};

export default Ingredients;