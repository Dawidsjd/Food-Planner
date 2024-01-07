import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import AddchartIcon from '@mui/icons-material/Addchart';
import styles from './style';
import { CircularProgress } from '@mui/material';
import Carbs from '../../../assets/Group 1.svg'
import Fats from '../../../assets/Group 2.svg'
import Protein from '../../../assets/Group 3.svg'
import Calories from '../../../assets/Group 4.svg'

const MakroProgress = ({ draggedRecipes }) => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCarbohydrates, setTotalCarbohydrates] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [dailyGoals, setDailyGoals] = useState({
    calories: 2000,
    fat: 70,
    protein: 50,
    carbohydrates: 200
  });
  const colors = ['#9F8BE8', '#F0A868', '#f2685e', '#6A8D73'];

  useEffect(() => {
    const sumCalories = draggedRecipes.reduce((acc, recipe) => acc + (recipe.caloriesValue || 0), 0);
    const sumFat = draggedRecipes.reduce((acc, recipe) => acc + (recipe.fatValue || 0), 0);
    const sumProtein = draggedRecipes.reduce((acc, recipe) => acc + (recipe.proteinValue || 0), 0);
    const sumCarbohydrates = draggedRecipes.reduce(
      (acc, recipe) => acc + (recipe.carbohydratesValue || 0),
      0
    );

    setTotalCalories(sumCalories);
    setTotalFat(sumFat);
    setTotalProtein(sumProtein);
    setTotalCarbohydrates(sumCarbohydrates);
  }, [draggedRecipes]);

  // Funkcja do obliczania procentowego spełnienia celu
  const calculateGoalPercentage = (value, goal) => {
    const percentage = ((value / goal) * 100).toFixed(1);
    return percentage > 100 ? 100 : percentage;
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDailyGoalChange = (event, macro) => {
    setDailyGoals((prevGoals) => ({
      ...prevGoals,
      [macro]: parseInt(event.target.value, 10)
    }));
  };

  return (
    <div style={styles.WidgetStatsContainer}>
      

      <div style={styles.StatsContainer}>
      <div style={styles.ProgressContainer}>
        {['carbohydrates', 'fat', 'protein', 'calories'].map((macro, index) => (
          <div key={index} style={styles.ProgressIcon}>
            <CircularProgress
              variant="determinate"
              value={Math.min(
                calculateGoalPercentage(
                  macro === 'calories'
                    ? totalCalories
                    : macro === 'fat'
                    ? totalFat
                    : macro === 'protein'
                    ? totalProtein
                    : totalCarbohydrates,
                  dailyGoals[macro]
                ),
                100 // Maksymalna wartość dla CircularProgress
              )}
              size={[65, 85, 110, 140][index]}
              style={{ color: colors[index] }}
            />
          </div>
        ))}
      </div>
        <div style={styles.RightAlignContainer}>
          <Tooltip title="Open Macro Goals">
            <IconButton onClick={handleOpenDialog}>
              <AddchartIcon style={{ color: '111' }} />
            </IconButton>
          </Tooltip>
        </div>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
        <DialogTitle>Macro Goals</DialogTitle>
        <DialogContent>
          <p>Set your daily goals for macros:</p>
          <div>
            <label>Calories:</label>
            <input
              type="number"
              value={dailyGoals.calories}
              onChange={(e) => handleDailyGoalChange(e, 'calories')}
            />
          </div>
          <div>
            <label>Fat:</label>
            <input
              type="number"
              value={dailyGoals.fat}
              onChange={(e) => handleDailyGoalChange(e, 'fat')}
            />
          </div>
          <div>
            <label>Protein:</label>
            <input
              type="number"
              value={dailyGoals.protein}
              onChange={(e) => handleDailyGoalChange(e, 'protein')}
            />
          </div>
          <div>
            <label>Carbohydrates:</label>
            <input
              type="number"
              value={dailyGoals.carbohydrates}
              onChange={(e) => handleDailyGoalChange(e, 'carbohydrates')}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
      
        <div style={styles.InfoProgressContainer}>

          <div style={styles.StatsElement}>
            <img src={Carbs} alt="Carbs" />
            <div style={styles.MakroContent}>
              <h2 style={{color: '#6A8D73'}}>Carbs</h2>
              <p>
              {calculateGoalPercentage(totalCarbohydrates, dailyGoals.carbohydrates)}% {totalCarbohydrates}g
              </p>
            </div>
          </div>

          <div style={styles.StatsElement}>
            <img src={Fats} alt="Fats" />
            <div style={styles.MakroContent}>
            <h2 style={{color: '#9F8BE8'}}>Fats</h2>
              <p>
              {calculateGoalPercentage(totalFat, dailyGoals.fat)}% {totalFat}g
              </p>
            </div>
          </div>
        </div>
        <div style={styles.InfoProgressContainer}>
        <div style={styles.StatsElement}>
            <img src={Protein} alt="Protein" />
            <div style={styles.MakroContent}>
            <h2 style={{color: '#F0A868'}}>Protein</h2>
              <p>
              {calculateGoalPercentage(totalProtein, dailyGoals.protein)}% {totalProtein}g
              </p>
            </div>
          </div>
          <div style={styles.StatsElement}>
            <img src={Calories} alt="Calories" />
            <div style={styles.MakroContent}>
            <h2 style={{color: '#000000'}}>Calories</h2>
              <p>
                {calculateGoalPercentage(totalCalories, dailyGoals.calories)}% {totalCalories}g
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MakroProgress;
