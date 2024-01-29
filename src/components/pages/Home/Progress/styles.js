import globalTheme from "../../../../globalTheme/globalTheme.js";
import { styled } from "@mui/system";

export const WidgetBox = styled("div")(({ theme }) => ({
  border: "1px solid black",
  background: globalTheme.palette.secondary.main,
  borderRadius: "40px",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  maxWidth: "300px",
  width: "95%",
}));

// export const HomeContainer = styled("div")(({ theme }) => ({}));

// export const HomeContainer = styled("div")(({ theme }) => ({}));
