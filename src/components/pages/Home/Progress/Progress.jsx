import React from "react";
import {
  WidgetBox,
  StyledHeader,
  StyledTitle,
  StyledLink,
  ProgressBox,
  ProgressContent,
  ProgressImage,
  ProgressStats,
  StyledName,
  StyledSubtitle,
  Reminder,
} from "./styles";
import { FaArrowRightLong } from "react-icons/fa6";
import Carbs from "../../../../assets/Group 1.svg";
import Protein from "../../../../assets/Group 3.svg";
import Fats from "../../../../assets/Group 2.svg";

const Progress = () => {
  return (
    <WidgetBox>
      <StyledHeader>
        <StyledTitle>Today's progress</StyledTitle>
        <StyledLink to="/MealPlanner">
          Show more
          <FaArrowRightLong />
        </StyledLink>
      </StyledHeader>
      <ProgressBox>
        <ProgressContent>
          <ProgressImage src={Carbs} alt="carbs image" />
          <ProgressStats>
            <StyledName style={{ color: "#6A8D73" }}>Carbs</StyledName>
            <StyledSubtitle>0% 0g</StyledSubtitle>
          </ProgressStats>
        </ProgressContent>
        <ProgressContent>
          <ProgressImage src={Protein} alt="protein image" />
          <ProgressStats>
            <StyledName style={{ color: "#F0A868" }}>Protein</StyledName>
            <StyledSubtitle>0% 0g</StyledSubtitle>
          </ProgressStats>
        </ProgressContent>
        <ProgressContent>
          <ProgressImage src={Fats} alt="fats image" />
          <ProgressStats>
            <StyledName style={{ color: "#9F8BE8" }}>Fats</StyledName>
            <StyledSubtitle>0% 0g</StyledSubtitle>
          </ProgressStats>
        </ProgressContent>
      </ProgressBox>
      <Reminder>
        <StyledTitle>Next meal</StyledTitle>
      </Reminder>
    </WidgetBox>
  );
};

export default Progress;
