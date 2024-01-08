import globalTheme from "../../globalTheme/globalTheme";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const StyledContainer = styled("div")(({ theme }) => ({
  border: "1px solid black",
  minHeight: "100vh",
  borderRadius: "0 40px 40px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  width: "20%",
  margin: "0",

  [theme.breakpoints.down("lg")]: {
    width: "15%",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
    minHeight: "0vh",
    height: "60px",
    borderRadius: "0",
    position: "fixed",
    bottom: "0",
    left: "0",
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export const LogoContainer = styled("Link")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    marginTop: "40px",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const StyledLogo = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    borderRadius: "100px",
    width: "85px",
    height: "85px",
    background: "#2C0909",
  },
}));

export const StyledNav = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    width: "80%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
}));

export const StyledNavbar = styled("div")(({ theme, clicked }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "75%",
  "& .link, & .link-active": {
    display: "flex",
    width: "100%",
    height: "100%",
    textDecoration: "none",
    borderRadius: "20px",
    alignItems: "center",
    justifyContent: "left",
    color: globalTheme.palette.textcolor.primary,
    fontSize: globalTheme.typography.subtitle.main,
    "&:hover, &.link-active": {
      background: globalTheme.palette.primary.main,
      color: globalTheme.palette.secondary.main,
    },
  },
  "& .link-other, & .link-active-other": {
    "&:hover, &.link-active-other": {
      background: "#2F3",
    },
  },
  [theme.breakpoints.down("lg")]: {
    "& .link, & .link-active": {
      width: "85px",
      height: "85px",
      borderRadius: "90px",
      justifyContent: "center",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .link, & .link-active": {
      width: "85px",
      height: "85px",
      justifyContent: "space-betwen",
      "&:hover, &.link-active": {
        background: "none",
        color: globalTheme.palette.primary.main,
      },
    },
  },
}));

export const StyledWrapper = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  margin: "50px 0",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    margin: "0px",
  },
}));

export const StyledWrapperOption = styled("section")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    margin: "50px 0",
  },
}));

export const StyledItem = styled("li")(({ theme }) => ({
  listStyleType: "none",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const StyledText = styled("p")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  fontSize: globalTheme.typography.title.main,
  padding: "5px",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));
