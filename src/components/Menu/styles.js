import globalTheme from "../../globalTheme/globalTheme";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const StyledContainer = styled("div")(({ theme }) => ({
  background: '#FFFFFF',
  minHeight: "100vh",
  borderRadius: "0 40px 40px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  width: "20%",
  margin: "0",
  backdropFilter: "blur(9.3px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",

  [theme.breakpoints.down("lg")]: {
    width: "17.5%",
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

export const LogoContainer = styled(Link)(({ theme }) => ({
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
  alignItems: "center",
  height: "100%",
  width: "100%",
  "& .link, & .link-active": {
    display: "flex",
    padding: "10px 60px",
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

  "& .link-bottom, & .link-active-bottom": {
    display: "flex",
    padding: "10px 60px",
    width: "100%",
    height: "100%",
    textDecoration: "none",
    borderRadius: "20px",
    alignItems: "center",
    justifyContent: "left",
    color: globalTheme.palette.textcolor.primary,
    fontSize: globalTheme.typography.subtitle.main,
    "&:hover, &.link-active-bottom": {
      background: globalTheme.palette.complementary.main,
    },
  },

  [theme.breakpoints.down("lg")]: {
    "& .link, & .link-active, & .link-bottom, & .link-active-bottom": {
      width: "70px",
      height: "70px",
      borderRadius: "45%",
      justifyContent: "center",
    },
  },
  [theme.breakpoints.up("md")]: {
    "& .link-active, & .link-active-bottom": {
      boxShadow: "0px 0px 4px 4px rgba(231, 231, 231, 1)",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .link, & .link-active": {
      width: "24px",
      height: "24px",
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
  minHeight: "440px",
  justifyContent: "center",
  margin: "20px 0",
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
    margin: "20px 0",
  },
}));

export const StyledItem = styled("li")(({ theme }) => ({
  listStyleType: "none",
  display: "flex",
  justifyContent: "center",
  margin: "10px 0",
  [theme.breakpoints.down("lg")]: {},
}));

export const StyledText = styled("p")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  fontSize: globalTheme.typography.title.main,
  padding: "5px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));
