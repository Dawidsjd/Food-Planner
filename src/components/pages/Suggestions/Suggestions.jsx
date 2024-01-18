import React from "react";
import Menu from "../../Menu/Menu";
import { MenuSuggestContainer, SuggestionsBox, SuggestionsPanel } from './styles';
import Ingredients from './Ingredients/Ingredients';

const Suggestions = () => {
  return <>
  <MenuSuggestContainer>
  <Menu />
    <SuggestionsPanel>
      <div>
      <h1>Ingredients</h1>
      <Ingredients />
    </div>
      </SuggestionsPanel>
  </MenuSuggestContainer>
  </>;
};

export default Suggestions;

