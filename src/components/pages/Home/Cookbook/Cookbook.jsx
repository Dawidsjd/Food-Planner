import React from "react";
import {
  WidgetBox,
  ContentWrapper,
  ImageWrapper,
  StyledImage,
  StyledTitle,
  StyledButton,
  StyledIcon,
} from "./styles";
import { FaArrowRightLong } from "react-icons/fa6";
import Burger from "../../../../assets/burger.svg";
import { Link } from "react-router-dom";

const Cookbook = () => {
  return (
    <WidgetBox>
      <ContentWrapper>
        <StyledTitle>All Best recipes in one place</StyledTitle>
        <Link to="/Cookbook" style={{ textDecoration: "none" }}>
          <StyledButton>
            Check it
            <StyledIcon>
              <FaArrowRightLong />
            </StyledIcon>
          </StyledButton>
        </Link>
      </ContentWrapper>
      <ImageWrapper>
        <StyledImage src={Burger} alt="burger" />
      </ImageWrapper>
    </WidgetBox>
  );
};

export default Cookbook;
