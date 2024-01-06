import React from 'react';
import moment from 'moment';

const MealTitle = () => {
  const todayDate = moment().format('dddd, MMM. D');

  return (
    <div>
      <p>Plan your meal</p>
      <h1>Meal Planner</h1>
      <div>{todayDate}</div>
    </div>
  );
};

export default MealTitle;
