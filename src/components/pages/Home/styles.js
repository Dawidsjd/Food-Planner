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
