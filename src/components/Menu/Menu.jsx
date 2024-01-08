import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  StyledContainer,
  LogoContainer,
  StyledLogo,
  StyledNav,
  StyledNavbar,
  StyledWrapper,
  StyledItem,
  StyledIcon,
} from "./styles";

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
                Home
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
                Meal Planner
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
                Cookbook
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
                Suggestions
              </NavLink>
            </StyledItem>
          </StyledWrapper>
          <StyledWrapper>
            <StyledItem>
              <NavLink
                to="/Settings"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "link-active-other" : "link-other"
                }
              >
                Settings
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
                Sign In
              </NavLink>
            </StyledItem>
          </StyledWrapper>
        </StyledNavbar>
      </StyledNav>
    </StyledContainer>
  );
};

export default Menu;
