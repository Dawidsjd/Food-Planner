import React, { useState } from "react";
import MealsPerDay from "./MealsPerDay/MealsPerDay";
import SearchFood from "./SearchFood/SearchFood";
import MakroProgress from "./MakroProgress/MakroProgress";
import MealTitle from "./MealTitle/MealTitle";
import {
  ContentContainer,
  TopLeftContainer,
  TopRightContainer,
  BottomLeftContainer,
  BottomRightContainer,
  ScrollMealsContainer,
} from "./style";

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
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "b04392eaa5msh0f05838fdb88036p19bf10jsn4ac20fbe4882",
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
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
    <ContentContainer>

      <TopLeftContainer>
        <MealTitle />
      </TopLeftContainer>

      <TopRightContainer>
        <MakroProgress draggedRecipes={draggedRecipes} />
      </TopRightContainer>

      <BottomLeftContainer>
        <SearchFood onDragStart={handleDragStart} />
      </BottomLeftContainer>

      <BottomRightContainer>
        <input
          type="number"
          value={numberOfBoxes}
          onChange={handleInputChange}
          min="1"
          max="5"
          // Dodaj styl, jeśli potrzebujesz
        />
        <ScrollMealsContainer>
          <MealsPerDay
            numberOfBoxes={numberOfBoxes}
            draggedRecipes={draggedRecipes}
            onDrop={handleDrop}
          />
        </ScrollMealsContainer>
      </BottomRightContainer>
      
    </ContentContainer>
  );
};

export default FoodList;
