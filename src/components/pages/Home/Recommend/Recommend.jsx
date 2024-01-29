import React, { useState, useEffect } from "react";
import {
  WidgetBox,
  StyledTitle,
  RecipesBox,
  Recipe,
  RecipeImg,
  RecipeTitle,
} from "./styles";

const Recommend = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "b04392eaa5msh0f05838fdb88036p19bf10jsn4ac20fbe4882",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (recipes.length === 0) {
          const randomRecipes = getFourRandomRecipes(data.results);
          setRecipes(randomRecipes);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [recipes]);

  const getFourRandomRecipes = (allRecipes) => {
    const shuffledRecipes = allRecipes.sort(() => 0.5 - Math.random());
    return shuffledRecipes.slice(0, 4);
  };

  return (
    <WidgetBox>
      <StyledTitle>Today's recommendations</StyledTitle>
      <RecipesBox>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Recipe key={recipe.id}>
              <RecipeImg src={recipe.thumbnail_url} alt={recipe.name} />
              <RecipeTitle>{recipe.name}</RecipeTitle>
            </Recipe>
          ))
        ) : (
          <RecipeTitle>Loading...</RecipeTitle>
        )}
      </RecipesBox>
    </WidgetBox>
  );
};

export default Recommend;
