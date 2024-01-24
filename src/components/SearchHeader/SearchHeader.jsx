import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  SearchCookBook,
  LogoSection,
  LogoImg,
  SearchSection,
  MobileOptions,
  StyledIcon,
} from "./styles";
import { Search } from "@mui/icons-material";
import Logo from "../../assets/logo.png";
import { CiSettings } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";

const SearchHeader = () => {
  const location = useLocation();

  const isCookbookActive = location.pathname === "/Cookbook";
  const isSettingsActive = location.pathname === "/Settings";

  return (
    <SearchSection>
      <SearchCookBook
        style={{ visibility: isSettingsActive ? "hidden" : "visible" }}
      >
        <Search></Search>
        <input
          type="text"
          placeholder={
            isCookbookActive
              ? "What do you want to cook today?"
              : "What would you like to eat?"
          }
        />
      </SearchCookBook>
      <MobileOptions>
        <NavLink
          to="/Settings"
          activeClassName="active"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <StyledIcon>
            <CiSettings />
          </StyledIcon>
        </NavLink>
        <NavLink
          to="/LoginPage"
          activeClassName="active"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          <StyledIcon>
            <IoMdLogIn />
          </StyledIcon>
        </NavLink>
      </MobileOptions>
      <LogoSection>
        <LogoImg src={Logo} />
      </LogoSection>
    </SearchSection>
  );
};

export default SearchHeader;
