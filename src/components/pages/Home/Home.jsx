import React from "react";
import Menu from "../../Menu/Menu";
import {
  HomeContainer,
  ContentWrapper,
  HomePanel,
  HomeContent,
  RecommendWidget,
  CookbookWidget,
  ProgressWidget,
} from "./styles";
import SearchHeader from "../../SearchHeader/SearchHeader";
import Recommend from "./Recommend/Recommend";
import Cookbook from "./Cookbook/Cookbook";
import Progress from "./Progress/Progress";

const Home = () => {
  return (
    <HomeContainer>
      <Menu />
      <ContentWrapper>
        <SearchHeader />
        <HomePanel>
          <HomeContent>
            <RecommendWidget>
              <Recommend />
            </RecommendWidget>
            <CookbookWidget>
              <Cookbook />
            </CookbookWidget>
            <ProgressWidget>
              <Progress />
            </ProgressWidget>
          </HomeContent>
        </HomePanel>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
