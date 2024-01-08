import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  StyledContainer,
  LogoContainer,
  StyledLogo,
  StyledNav,
  StyledNavbar,
  StyledWrapper,
  StyledWrapperOption,
  StyledItem,
  StyledIcon,
  StyledText,
} from "./styles";
import { IoMdHome } from "react-icons/io";
import { FaCalendar, FaBook, FaRegStar } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

const Menu = () => {
  const [clicked, setClicked] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <LogoContainer>
        <StyledLogo />
      </LogoContainer>
      <StyledNav>
        <StyledNavbar className={clicked ? "nav_active" : "navbar"}>
          <StyledWrapper>
            <StyledItem>
              <NavLink
                to="/"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <StyledIcon>
                  <IoMdHome />
                </StyledIcon>
                <StyledText>Home</StyledText>
              </NavLink>
            </StyledItem>
            <StyledItem>
              <NavLink
                to="/MealPlanner"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <StyledIcon>
                  <FaCalendar />
                </StyledIcon>
                <StyledText>Meal Planner</StyledText>
              </NavLink>
            </StyledItem>
            <StyledItem>
              <NavLink
                to="/Cookbook"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <StyledIcon>
                  <FaBook />
                </StyledIcon>
                <StyledText>Cookbook</StyledText>
              </NavLink>
            </StyledItem>
            <StyledItem>
              <NavLink
                to="/Suggestions"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <StyledIcon>
                  <FaRegStar />
                </StyledIcon>
                <StyledText>Suggestions</StyledText>
              </NavLink>
            </StyledItem>
          </StyledWrapper>
          <StyledWrapperOption>
            <StyledItem>
              <NavLink
                to="/Settings"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "link-active-other" : "link-other"
                }
              >
                <StyledIcon>
                  <CiSettings />
                </StyledIcon>
                <StyledText>Settings</StyledText>
              </NavLink>
            </StyledItem>
            <StyledItem>
              <NavLink
                to="/SignIn"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "link-active-other" : "link-other"
                }
              >
                <StyledIcon>
                  <IoMdLogIn />
                </StyledIcon>
                <StyledText>Sign In</StyledText>
              </NavLink>
            </StyledItem>
          </StyledWrapperOption>
        </StyledNavbar>
      </StyledNav>
    </StyledContainer>
  );
};

export default Menu;
