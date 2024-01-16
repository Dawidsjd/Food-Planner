import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'better-react-carousel';
import Icon from '../../../assets/unfavourite.svg';
import IconFav from '../../../assets/favourite.svg';
import Breakfast from '../../../assets/Breakfast.svg';
import Dietary from '../../../assets/Dietary.svg';
import Dinner from '../../../assets/Dinner.svg';
import Healthy from '../../../assets/Healthy.svg';
import WorldCuisine from '../../../assets/WorldCuisine.svg';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import style, { CarouselCon, CarouselTitle, CategorieContainer, CategorieElement, CategorieTitle, Divv, IconContainer, SearchCookBook } from './styles';
import './keyframe.css';
import { Search } from '@mui/icons-material';

const categoriesData = [
  { id: 1, name: 'Breakfast', image: Breakfast },
  { id: 2, name: 'Dinner', image: Dinner },
  { id: 3, name: 'Healthy', image: Healthy },
  { id: 4, name: 'Dietary', image: Dietary },
  { id: 5, name: 'World Cuisine', image: WorldCuisine },
];

const FoodCarousel = () => {
  const [recipes, setRecipes] = useState([]);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const containerRef = useRef(null);

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

  const handleMouseDown = (e) => {
    setScrolling(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setScrolling(false);
  };

  const handleMouseUp = () => {
    setScrolling(false);
  };

  const handleMouseMove = (e) => {
    if (!scrolling) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // You can adjust the multiplier to control the scrolling speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
    <SearchCookBook>
      <Search></Search>
      <input type="text" placeholder='What do you want to cook today?' />
    </SearchCookBook>
    <CarouselTitle>
      <h2>All Recipes</h2>
      <p>All recipes available in the Cookbook</p>
    </CarouselTitle>
    
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
              src={hoveredImageIndex === index ? IconFav : Icon} alt="" />
            </IconContainer>
          </Divv>
        </Carousel.Item>
      ))}
    </Carousel>

    <CategorieTitle>
      <h2>Categories</h2>
      <p>Search for recipes by category</p>
    </CategorieTitle>

    <CategorieContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >

      {categoriesData.map((category) => (
        <CategorieElement
          key={category.id}
          onClick={() => handleCategoryClick(category)}
        >
          <img src={category.image} alt="" />
          <p>{category.name}</p>
        </CategorieElement>
      ))}
    </CategorieContainer>

    <Dialog open={openDialog} maxWidth="md" onClose={handleCloseDialog} >
      <DialogTitle>{selectedCategory ? selectedCategory.name : 'Category Name'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {/* Add content related to the selected category */}
          {/* You can fetch recipes based on the selected category and display them here */}
          Content for {selectedCategory ? selectedCategory.name : 'Category Name'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>

    </>
  );
};

export default FoodCarousel;
