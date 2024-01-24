import React from "react";
import Menu from "../../Menu/Menu";
import { HomeContainer, ContentWrapper, HomePanel } from "./styles";
import SearchHeader from "../../SearchHeader/SearchHeader";

const Home = () => {
  return (
    <HomeContainer>
      <Menu />
      <ContentWrapper>
        <SearchHeader />
        <HomePanel>Home</HomePanel>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
