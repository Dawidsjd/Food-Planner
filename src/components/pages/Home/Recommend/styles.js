import globalTheme from "../../../../globalTheme/globalTheme.js";
import { styled } from "@mui/system";

export const WidgetBox = styled("div")(({ theme }) => ({
  background: globalTheme.palette.secondary.main,
  borderRadius: "40px",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  maxWidth: "900px",
  width: "95%",
}));

export const StyledTitle = styled("p")(({ theme }) => ({
  margin: "5px 10px",
  fontSize: globalTheme.typography.title.main,
}));

export const RecipesBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

export const Recipe = styled("div")(({ theme }) => ({
  width: "20%",
  height: "20%",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  background: globalTheme.palette.complementary.main,
  margin: "20px",
  borderRadius: "10px",
}));

export const RecipeImg = styled("img")(({ theme }) => ({
  width: "90px",
  height: "90px",
  objectFit: "cover",
  borderRadius: "90%",
  margin: "10px",
  pointerEvents: "none",
  userSelect: "none",
}));

export const RecipeTitle = styled("p")(({ theme }) => ({
  textAlign: "center",
  fontSize: globalTheme.typography.subtitle.main,
  margin: "0 5px",
}));
