import globalTheme from "../../../globalTheme/globalTheme";
import { styled } from "@mui/system";

export const HomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
}));

export const ContentWrapper = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));

export const HomePanel = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export const HomeContent = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
}));

export const RecommendWidget = styled("div")(({ theme }) => ({
  margin: "10px",
  gridRowStart: "1",
  gridRowEnd: "2",
}));

export const CookbookWidget = styled("div")(({ theme }) => ({
  margin: "10px",
  gridRowStart: "2",
  gridRowEnd: "3",
}));

export const ProgressWidget = styled("div")(({ theme }) => ({
  margin: "5px",
  gridRowStart: "1",
  gridRowEnd: "3",
}));
