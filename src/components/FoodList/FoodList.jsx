import React, { useState } from 'react';
import MealsPerDay from './MealsPerDay/MealsPerDay';
import SearchFood from './SearchFood/SearchFood';
import MakroProgress from './MakroProgress/MakroProgress';
import styles from './style';
import MealTitle from './MealTitle/MealTitle';

const FoodList = () => {
  const [numberOfBoxes, setNumberOfBoxes] = useState(1);
  const [draggedRecipes, setDraggedRecipes] = useState([]);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumberOfBoxes(value >= 1 && value <= 5 ? value : 1);
  };

  const handleDragStart = (recipe) => {
    setDraggedRecipes([...draggedRecipes, { ...recipe, boxIndex: null }]);
  };

  const handleDrop = async (boxIndex) => {
    const draggedRecipeIndex = draggedRecipes.findIndex(
      (recipe) => recipe.boxIndex === null
    );

    if (draggedRecipeIndex !== -1) {
      const draggedRecipe = draggedRecipes[draggedRecipeIndex];

      try {
        
        const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${draggedRecipe.id}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'c1fa8c4c47mshc735e397e60a5dfp16d672jsn213805a23649',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
          },
        };

        const response = await fetch(url, options);
        const result = await response.json();

       
        const caloriesValue = result.nutrition.calories;
        const fatValue = result.nutrition.fat;
        const carbohydratesValue = result.nutrition.carbohydrates;
        const proteinValue = result.nutrition.protein;

        setDraggedRecipes((prevRecipes) => {
          return prevRecipes.map((recipe, index) => {
            if (index === draggedRecipeIndex) {
              return {
                ...recipe,
                boxIndex,
                caloriesValue,
                fatValue,
                carbohydratesValue,
                proteinValue,
              };
            }
            return recipe;
          });
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div style={styles.LeftTop}>
        <MealTitle />
      </div>
      <div style={styles.RightTop}>
        <MakroProgress draggedRecipes={draggedRecipes} />
      </div>

      <div style={styles.LeftBottom}>
        <SearchFood onDragStart={handleDragStart} />
      </div>

      <div style={styles.RightBottom}>
        <input
          type="number"
          value={numberOfBoxes}
          onChange={handleInputChange}
          min="1"
          max="5"
          style={styles.InputNumber}
        />
        <div style={styles.ScrollMealsContainer}>
        <MealsPerDay
          numberOfBoxes={numberOfBoxes}
          draggedRecipes={draggedRecipes}
          onDrop={handleDrop}
        />
        </div>
      </div>

    </>
  );
};

export default FoodList;
