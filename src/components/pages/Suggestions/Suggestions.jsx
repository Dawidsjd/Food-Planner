import React from "react";
import Menu from "../../Menu/Menu";
import { SuggestContainer, ContentWrapper, SuggestionPanel } from "./styles";
import Ingredients from "./Ingredients/Ingredients";
import MatchingDishes from "./MatchingDishes/MatchingDishes";
import SearchHeader from "../../SearchHeader/SearchHeader";

const Suggestions = () => {
  return (
    <SuggestContainer>
      <Menu />
      <ContentWrapper>
        <SearchHeader />
        <SuggestionPanel>
          <Ingredients />
          <MatchingDishes />
        </SuggestionPanel>
      </ContentWrapper>
    </SuggestContainer>
  );
};

export default Suggestions;
