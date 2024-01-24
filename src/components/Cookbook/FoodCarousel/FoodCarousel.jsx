import React, { useState, useRef } from "react";
import SearchHeader from "../../SearchHeader/SearchHeader";
import CarousTitle from "../CarouselTitle/CarousTitle";
import CarouselMainComp from "../CarouselMainComponent/CarouselMainComp";
import CategorTitle from "../CategorieTitle/CategorTitle";
import CategorieSlider from "../CategorieSlider/CategorieSlider";

const FoodCarousel = () => {
  return (
    <>
      {/* Search panel */}
      <SearchHeader />

      {/* Title - Carousel */}
      <CarousTitle />

      {/* Carousel */}
      <CarouselMainComp />

      {/* Title - Categorie */}
      <CategorTitle />

      {/* Categorie Slider */}
      <CategorieSlider />
    </>
  );
};

export default FoodCarousel;
