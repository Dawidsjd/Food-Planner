import globalTheme from "../../../../globalTheme/globalTheme.js";
import { styled } from "@mui/system";

export const WidgetBox = styled("div")(({ theme }) => ({
  background: "#FFE8C2",
  borderRadius: "40px",
  display: "flex",
  flexDirection: "row",
  padding: "20px",
  maxWidth: "900px",
  width: "95%",
}));

export const ContentWrapper = styled("div")(({ theme }) => ({
  flex: "1",
  display: "flex",
  flexDirection: "column",
}));

export const ImageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledImage = styled("img")(({ theme }) => ({
  width: "200px",
  marginLeft: "auto",
  pointerEvents: "none",
  userSelect: "none",
}));

export const StyledTitle = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.header.main,
  fontWeight: "700",
  color: globalTheme.palette.primary.main,
}));

export const StyledButton = styled("button")(({ theme }) => ({
  marginTop: "30px",
  background: globalTheme.palette.primary.main,
  border: "none",
  padding: "10px 20px",
  color: globalTheme.palette.secondary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  fontSize: globalTheme.typography.subtitle.main,
  cursor: "pointer",
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  margin: "0 10px",
}));
