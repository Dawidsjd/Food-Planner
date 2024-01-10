import React from 'react';
import { GeneratedBox, DraggedRecipeName, MakroColumn, ParagraphException } from './style';

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
            
            {draggedRecipe ? (
              draggedRecipe.caloriesValue !== undefined ? (
                <DraggedRecipeName>
                  <img
                    src={draggedRecipe.thumbnail_url}
                    alt={draggedRecipe.name}
                    
                  />
                  <MakroColumn>
                    <p><span>Calories:</span> {draggedRecipe.caloriesValue}</p>
                    <p><span>Fat:</span> {draggedRecipe.fatValue}</p>
                    <p><span>Carbohydrates:</span> {draggedRecipe.carbohydratesValue}</p>
                    <p><span>Protein:</span> {draggedRecipe.proteinValue}</p>
                  </MakroColumn>
                </DraggedRecipeName>
              ) : (
                <ParagraphException>No nutrition data available</ParagraphException>
              )
            ) : (
              <ParagraphException>No recipe selected</ParagraphException>
            )}
          </GeneratedBox>
        );
      })}
    </>
  );
};

export default MealsPerDay;
