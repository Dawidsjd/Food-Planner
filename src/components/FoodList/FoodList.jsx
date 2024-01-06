import React, { useState } from 'react';
import SearchFood from './SearchFood/SearchFood';
import styles from './style';

// ... (inne importy)

const FoodList = () => {
  const [numberOfBoxes, setNumberOfBoxes] = useState(1);
  const [draggedRecipe, setDraggedRecipe] = useState(null);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumberOfBoxes(value >= 1 && value <= 5 ? value : 1);
  };

  const generateBoxes = () => {
    const boxes = [];
    for (let i = 0; i < numberOfBoxes; i++) {
      boxes.push(
        <div
          key={i}
          style={styles.GeneratedBox}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(i)}
        >
          Box {i + 1}
          {draggedRecipe && draggedRecipe.boxIndex === i && (
            <div style={styles.DraggedRecipeName}><img src={draggedRecipe.thumbnail_url} alt={draggedRecipe.name} width="75px"/></div>
          )}
        </div>
      );
    }
    return boxes;
  };

  const handleDragStart = (recipe) => {
    setDraggedRecipe({ ...recipe, boxIndex: null });
  };

  const handleDrop = (boxIndex) => {
    console.log(`Recipe dropped into Box ${boxIndex + 1}:`, draggedRecipe);
    setDraggedRecipe({ ...draggedRecipe, boxIndex });
  };

  return (
    <>
      <div style={styles.LeftTop}></div>
      <div style={styles.RightTop}></div>
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
        {generateBoxes()}
      </div>
    </>
  );
};

export default FoodList;

