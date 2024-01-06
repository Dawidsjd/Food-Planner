import React, { useState, useEffect } from 'react';

const MakroProgress = ({ draggedRecipes }) => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCarbohydrates, setTotalCarbohydrates] = useState(0);

  useEffect(() => {
    // Oblicz sumę makroskładników z przeciągniętych przepisów
    const sumCalories = draggedRecipes.reduce((acc, recipe) => acc + (recipe.caloriesValue || 0), 0);
    const sumFat = draggedRecipes.reduce((acc, recipe) => acc + (recipe.fatValue || 0), 0);
    const sumProtein = draggedRecipes.reduce((acc, recipe) => acc + (recipe.proteinValue || 0), 0);
    const sumCarbohydrates = draggedRecipes.reduce(
      (acc, recipe) => acc + (recipe.carbohydratesValue || 0),
      0
    );

    setTotalCalories(sumCalories);
    setTotalFat(sumFat);
    setTotalProtein(sumProtein);
    setTotalCarbohydrates(sumCarbohydrates);
  }, [draggedRecipes]);

  return (
    <div>
      <h2>Total Calories: {totalCalories}kcal</h2>
      <h2>Total Fat: {totalFat}g</h2>
      <h2>Total Protein: {totalProtein}g</h2>
      <h2>Total Carbohydrates: {totalCarbohydrates}g</h2>
      {/* Tutaj możesz dodać inne informacje dotyczące makroskładników */}
    </div>
  );
};

export default MakroProgress;
