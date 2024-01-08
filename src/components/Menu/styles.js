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
  [theme.breakpoints.up("md")]: {
    display: "flex",
    width: "90%",
    height: "auto",
    margin: "0 0 50px 0",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const StyledNavbar = styled("div")(({ theme, clicked }) => ({
  "& .link, & .link-active": {
    "&:hover, &.link-active": {
      background: "#002950",
    },
  },
  "& .link-other, & .link-active-other": {
    "&:hover, &.link-active-other": {
      background: "#2F3",
    },
  },
  [theme.breakpoints.up("md")]: {},
}));

export const StyledWrapper = styled("section")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    margin: "50px 0",
  },
}));

export const StyledItem = styled("li")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {},
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {},
}));
