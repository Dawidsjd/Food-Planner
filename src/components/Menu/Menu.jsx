import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  StyledContainer,
  StyledHeader,
  UserImg,
  StyledImage,
  UserDetails,
  StyledTitle,
  StyledName,
  StyledNav,
  StyledMenu,
  StyledLinks,
  StyledItem,
  StyledIcon,
  StyledSpan,
} from "./styles";
import { IoHomeSharp } from "react-icons/io5";
import { FaCalendar, FaBook, FaRegStar } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import User from "../../assets/user.jpg";

const Menu = () => {
  const [clicked, setClicked] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledHeader>
        <UserImg>
          <StyledImage src={User} alt="user-image" />
        </UserImg>
        <UserDetails>
          <StyledTitle>User</StyledTitle>
          <StyledName>UserName</StyledName>
        </UserDetails>
      </StyledHeader>
      <StyledNav>
        <StyledMenu>
          <StyledTitle style={{ marginBottom: 10 }}>Menu</StyledTitle>
          <StyledLinks>
            <StyledItem>
              <NavLink
                to="/"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <StyledIcon>
                  <IoHomeSharp />
                </StyledIcon>
                <StyledSpan className="text">Home</StyledSpan>
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
                <StyledSpan className="text">Meal Planner</StyledSpan>
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
                <StyledSpan className="text">Cookbook</StyledSpan>
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
                <StyledSpan className="text">Suggestions</StyledSpan>
              </NavLink>
            </StyledItem>
          </StyledLinks>
        </StyledMenu>
        <StyledMenu>
          <StyledTitle style={{ marginBottom: 10 }}>Account</StyledTitle>
          <StyledLinks>
            <StyledItem>
              <NavLink
                to="/Settings"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "link-active-option" : "link-option"
                }
              >
                <StyledIcon>
                  <CiSettings />
                </StyledIcon>
                <StyledSpan className="text">Settings</StyledSpan>
              </NavLink>
            </StyledItem>
            {/* To do zmiany jak zrobi się firebase i logowanie */}
            <StyledItem>
              <NavLink
                to="/LoginPage"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive ? "link-active-option" : "link-option"
                }
              >
                <StyledIcon>
                  <IoMdLogIn />
                </StyledIcon>
                <StyledSpan className="text">Sign Out</StyledSpan>
              </NavLink>
            </StyledItem>
          </StyledLinks>
        </StyledMenu>
      </StyledNav>
    </StyledContainer>
  );
};

export default Menu;
