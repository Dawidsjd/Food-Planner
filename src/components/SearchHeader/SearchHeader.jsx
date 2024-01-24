import React from "react";
import { SearchCookBook, LogoSection, LogoImg, SearchSection } from "./styles";
import { Search } from "@mui/icons-material";
import Logo from "../../assets/logo.png";

const SearchHeader = () => {
  return (
    <SearchSection>
      <SearchCookBook>
        <Search></Search>
        <input type="text" placeholder="What would you like to eat?" />
      </SearchCookBook>
      <LogoSection>
        <LogoImg src={Logo} />
      </LogoSection>
    </SearchSection>
  );
};

export default SearchHeader;
