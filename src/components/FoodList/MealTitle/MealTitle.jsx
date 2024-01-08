import React from 'react';
import moment from 'moment';
import { TitleContainer, PlanParagraph, MealHeading, DateContainer, ContentContainer } from './style';

const MealTitle = () => {
  const todayDate = moment().format('dddd, MMM. D');

  return (
    <TitleContainer>
      <ContentContainer>
        <PlanParagraph>Plan your meal</PlanParagraph>
        <MealHeading>Meal Planner</MealHeading>
      </ContentContainer>
      <DateContainer>
        <p>Current Day</p>
        <p>{todayDate}</p>
      </DateContainer>
    </TitleContainer>
  );
};

export default MealTitle;
