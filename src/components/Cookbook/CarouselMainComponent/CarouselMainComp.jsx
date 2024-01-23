import React, { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel';
import IconFav from '../../../assets/favourite.svg';
import Icon from '../../../assets/unfavourite.svg';
import { Divv, IconContainer } from './styles';

const CarouselMainComp = () => {

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
            'X-RapidAPI-Key': 'c1fa8c4c47mshc735e397e60a5dfp16d672jsn213805a23649',
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
        responsiveLayout={[{ breakpoint: 800, cols: 3 }, { breakpoint: 770, cols: 2 },]}
      >
        {recipes.map((recipe, index) => (
          <Carousel.Item key={recipe.id}>
            <Divv>
              <img
                style={{ width: '95%', height: '95px', objectFit: 'cover' }}
                src={recipe.thumbnail_url}
                alt={recipe.name}
              />
              <p className={recipe.thumbnail_url && recipe.thumbnail_url.length > 200 ? 'animated-text' : ''}>
                {recipe.name}
              </p>
              <IconContainer>
                <img
                  onMouseEnter={() => handleIconHover(index)}
                  onMouseLeave={handleIconLeave}
                  src={hoveredImageIndex === index ? IconFav : Icon} alt=""
                />
              </IconContainer>
            </Divv>
          </Carousel.Item>
        ))}
      </Carousel>
  )
}

export default CarouselMainComp