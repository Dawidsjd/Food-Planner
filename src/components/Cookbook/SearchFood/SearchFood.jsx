import React from "react";
import { SearchCookBook, LogoSection, LogoImg, SearchSection } from "./styles";
import { Search } from "@mui/icons-material";
import Logo from "../../../assets/logo.png";

const SearchFood = () => {
  return (
    <SearchSection>
      <SearchCookBook>
        <Search></Search>
        <input type="text" placeholder="What do you want to cook today?" />
      </SearchCookBook>
      <LogoSection>
        <LogoImg src={Logo} />
      </LogoSection>
    </SearchSection>
  );
};

export default SearchFood;
