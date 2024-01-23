import React, { useState, useRef } from 'react';
import SearchFood from '../SearchFood/SearchFood';
import CarousTitle from '../CarouselTitle/CarousTitle';
import CarouselMainComp from '../CarouselMainComponent/CarouselMainComp';
import CategorTitle from '../CategorieTitle/CategorTitle';
import CategorieSlider from '../CategorieSlider/CategorieSlider';

const FoodCarousel = () => {
 
  return (
    <>
      {/* Search panel */}
      <SearchFood/>

      {/* Title - Carousel */}
      <CarousTitle/>

      {/* Carousel */}
      <CarouselMainComp/>

      {/* Title - Categorie */}
      <CategorTitle/>

      {/* Categorie Slider */}
      <CategorieSlider/>

    </>
  );
};

export default FoodCarousel;
