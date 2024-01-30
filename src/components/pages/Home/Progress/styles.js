import globalTheme from "../../../../globalTheme/globalTheme.js";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const WidgetBox = styled("div")(({ theme }) => ({
  background: globalTheme.palette.secondary.main,
  borderRadius: "40px",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  maxWidth: "450px",
  width: "95%",
  height: "100%",
}));

export const StyledHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

export const StyledTitle = styled("p")(({ theme }) => ({
  margin: "5px 10px",
  fontSize: globalTheme.typography.primary.main,
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  alignItems: "center",
  display: "flex",
  fontSize: globalTheme.typography.primary.main,
  color: globalTheme.palette.textcolor.primary,
}));

export const ProgressBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const ProgressContent = styled("div")(({ theme }) => ({
  margin: "5px 20px",
  display: "flex",
}));

export const ProgressImage = styled("img")(({ theme }) => ({
  pointerEvents: "none",
  userSelect: "none",
}));

export const ProgressStats = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "15px",
}));

export const StyledName = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.title.main,
  fontWeight: "700",
}));

export const StyledSubtitle = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.subtitle.main,
}));

export const Reminder = styled("div")(({ theme }) => ({
  marginTop: "10px",
  background: globalTheme.palette.background.additional,
  borderRadius: "20px",
  height: "50%",
}));
