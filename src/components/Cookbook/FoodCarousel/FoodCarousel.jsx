import React, { useState, useEffect } from 'react';
import Carousel from 'better-react-carousel';

const FoodCarousel = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'b459219d15mshc4c14541f610567p1c8df9jsn45d71054de0a',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
          }
        };

        const response = await fetch(url, options);
        const data = await response.json();

        setRecipes(data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Carousel cols={2} rows={1} gap={10} loop showDots responsiveLayout={[{ breakpoint: 800, cols: 3 }]}>
      {recipes.map((recipe) => (
        <Carousel.Item key={recipe.id}>
          <img
            width="100%"
            height="200px"  // Ustaw stałą wysokość dla wszystkich zdjęć
            src={recipe.thumbnail_url}
            alt={recipe.name}
          />
          <p>{recipe.name}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FoodCarousel;
