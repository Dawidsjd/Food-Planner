import React, { useState } from "react";
import Menu from "../../Menu/Menu";
import { SuggestContainer, ContentWrapper, SuggestionPanel } from "./styles";
import Ingredients from "./Ingredients/Ingredients";
import MatchingDishes from "./MatchingDishes/MatchingDishes";
import SearchHeader from "../../SearchHeader/SearchHeader";


const Suggestions = () => {
  const [ingredientsList, setIngredientsList] = useState([]);

  const handleAddIngredient = (ingredient) => {
    setIngredientsList([...ingredientsList, ingredient]);
  };

  return (
    <SuggestContainer>
      <Menu />
      <ContentWrapper>
        <SearchHeader />
        <SuggestionPanel>
        <Ingredients onAddIngredient={handleAddIngredient} />
        <MatchingDishes ingredientsList={ingredientsList} />
        </SuggestionPanel>
      </ContentWrapper>
    </SuggestContainer>
  );
};

export default Suggestions;
