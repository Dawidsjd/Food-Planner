import React from 'react';
import { GeneratedBox, DraggedRecipeName } from './style';

const MealsPerDay = ({ numberOfBoxes, draggedRecipes, onDrop }) => {
  return (
    <>
      {Array.from({ length: numberOfBoxes }, (_, i) => i).map((i) => {
        const draggedRecipe = draggedRecipes.find((recipe) => recipe.boxIndex === i);

        return (
          <GeneratedBox
            key={i}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop(i)}
          >
            Box {i + 1}
            {draggedRecipe ? (
              draggedRecipe.caloriesValue !== undefined ? (
                <DraggedRecipeName>
                  <img
                    src={draggedRecipe.thumbnail_url}
                    alt={draggedRecipe.name}
                    style={{ width: '75px', objectFit: 'cover' }}
                  />
                  <p>Calories: {draggedRecipe.caloriesValue}</p>
                  <p>Fat: {draggedRecipe.fatValue}</p>
                  <p>Carbohydrates: {draggedRecipe.carbohydratesValue}</p>
                  <p>Protein: {draggedRecipe.proteinValue}</p>
                </DraggedRecipeName>
              ) : (
                <p>No nutrition data available</p>
              )
            ) : (
              <p>No recipe selected</p>
            )}
          </GeneratedBox>
        );
      })}
    </>
  );
};

export default MealsPerDay;
