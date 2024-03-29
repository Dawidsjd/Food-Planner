import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*Pages*/
import Home from "./components/pages/Home/Home.jsx";
import MealPlanner from "./components/pages/MealPlanner/MealPlanner.jsx";
import Cookbook from "./components/pages/Cookbook/Cookbook.jsx";
import Suggestions from "./components/pages/Suggestions/Suggestions.jsx";
import Settings from "./components/pages/Settings/Settings.jsx";
import LoginPage from "./components/pages/LoginPage/LoginPage.jsx";
/***************************/
import FoodList from "./components/FoodList/FoodList";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/MealPlanner"
            element={
              <>
                <MealPlanner />
              </>
            }
          />
          <Route
            exact
            path="/Cookbook"
            element={
              <>
                <Cookbook />
              </>
            }
          />
          <Route exact path="/Suggestions" element={<Suggestions />} />
          <Route exact path="/Settings" element={<Settings />} />
          <Route exact path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
