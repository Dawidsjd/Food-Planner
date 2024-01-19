import React from "react";
import Menu from "../../Menu/Menu";
import {
  MenuSuggestContainer,
  SuggestionsPanel,
} from "./styles";
import Ingredients from "./Ingredients/Ingredients";
import MatchingDishes from "./MatchingDishes/MatchingDishes";

const Suggestions = () => {
  return (
    <>
      <MenuSuggestContainer>
        <Menu />
        <SuggestionsPanel>
          <div>
            <Ingredients />
          </div>
          <div>
            <MatchingDishes />
          </div>
        </SuggestionsPanel>
      </MenuSuggestContainer>
    </>
  );
};

export default Suggestions;
