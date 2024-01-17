import React from "react";
import Menu from "../../Menu/Menu";
import { MenuSuggestContainer, SuggestionsBox, SuggestionsPanel } from './styles';

const Suggestions = () => {
  return <>
  <MenuSuggestContainer>
  <Menu />
    <SuggestionsPanel>
      <SuggestionsBox>Suggestions</SuggestionsBox>
      </SuggestionsPanel>
  </MenuSuggestContainer>
  </>;
};

export default Suggestions;

