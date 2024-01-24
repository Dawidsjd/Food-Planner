import React from "react";
import Menu from "../../Menu/Menu";
import FoodCarousel from "../../Cookbook/FoodCarousel/FoodCarousel";
import style, { CookBookContainer, MenuCookContainer } from "./styles";

const Cookbook = () => {
  return (
    <>
      <MenuCookContainer>
        <Menu />
      </MenuCookContainer>

      <CookBookContainer>
        <FoodCarousel />
      </CookBookContainer>
    </>
  );
};

export default Cookbook;
