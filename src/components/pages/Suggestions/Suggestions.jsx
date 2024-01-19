import React from "react";
import Menu from "../../Menu/Menu";
import {
  MenuSuggestContainer,
  SuggestionsBox,
  SuggestionsPanel,
} from "./styles";
import Ingredients from "./Ingredients/Ingredients";

const Suggestions = () => {
  return (
    <>
      <MenuSuggestContainer>
        <Menu />
        <SuggestionsPanel>
          <div>
            <Ingredients />
          </div>
        </SuggestionsPanel>
      </MenuSuggestContainer>
    </>
  );
};

export default Suggestions;
