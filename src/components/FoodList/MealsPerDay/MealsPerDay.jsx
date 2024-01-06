import React, { useState, useEffect } from 'react';
import styles from './style'

const MealsPerDay = ({ numberOfBoxes, draggedRecipes, onInputChange, onDragStart, onDrop }) => {
  return (
    <>
      {Array.from({ length: numberOfBoxes }, (_, i) => i).map((i) => {
        const draggedRecipe = draggedRecipes.find((recipe) => recipe.boxIndex === i);

        return (
          <div
            key={i}
            style={styles.GeneratedBox}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop(i)}
          >
            Box {i + 1}
            {draggedRecipe && (
              <div style={styles.DraggedRecipeName}>
                <img src={draggedRecipe.thumbnail_url} alt={draggedRecipe.name} width="75px" />
                <p>Calories: {draggedRecipe.caloriesValue}</p>
                <p>Fat: {draggedRecipe.fatValue}</p>
                <p>Carbohydrates: {draggedRecipe.carbohydratesValue}</p>
                <p>Protein: {draggedRecipe.proteinValue}</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MealsPerDay;
