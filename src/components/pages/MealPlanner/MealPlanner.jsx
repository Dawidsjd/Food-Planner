import React from "react";
import Menu from "../../Menu/Menu";
import FoodList from "../../FoodList/FoodList";
import { MenuContainer, FoodListContainer } from "./styles";

const MealPlanner = () => {
  return (
    <>
      <MenuContainer>
        <Menu />
      </MenuContainer>

      <FoodListContainer>
        <FoodList />
      </FoodListContainer>
    </>
  );
};

export default MealPlanner;
