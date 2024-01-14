import React, { useState, useEffect } from 'react';
import Carousel from 'better-react-carousel';
import Icon from '../../../assets/unfavourite.svg';
import IconFav from '../../../assets/favourite.svg';

import style, { CarouselCon, Divv, IconContainer } from './styles';
import './keyframe.css';

const FoodCarousel = () => {
  const [recipes, setRecipes] = useState([]);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'b459219d15mshc4c14541f610567p1c8df9jsn45d71054de0a',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
          },
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

  const handleIconHover = (index) => {
    setHoveredImageIndex(index);
  };

  const handleIconLeave = () => {
    setHoveredImageIndex(null);
  };

  return (
    <Carousel
      cols={4}
      rows={1}
      gap={10}
      loop
      showDots
      responsiveLayout={[{ breakpoint: 800, cols: 3 }]}
    >
      {recipes.map((recipe, index) => (
        <Carousel.Item key={recipe.id}>
          <Divv>
            <img
              style={{ width: '95%', height: '100px', objectFit: 'cover' }}
              src={recipe.thumbnail_url}
              alt={recipe.name}
            />
            <p className={recipe.thumbnail_url && recipe.thumbnail_url.length > 200 ? 'animated-text' : ''}>
              {recipe.name}
            </p>
            <IconContainer
              onMouseEnter={() => handleIconHover(index)}
              onMouseLeave={handleIconLeave}
            >
              <img src={hoveredImageIndex === index ? IconFav : Icon} alt="" />
            </IconContainer>
          </Divv>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FoodCarousel;
