import globalTheme from "../../globalTheme/globalTheme";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const StyledContainer = styled("div")(({ theme }) => ({
  width: "20%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  background: globalTheme.palette.secondary.main,
  padding: "24px",
  borderRadius: "0 40px 40px 0",

  // Responsywność - tablet
  [theme.breakpoints.down("lg")]: {
    width: "100px",
  },
}));

export const StyledHeader = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  paddingBottom: "20px",
  borderBottom: "1px solid #f6f6f6",
}));

export const UserImg = styled("div")(({ theme }) => ({
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  overflow: "hidden",
}));

export const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
}));

export const UserDetails = styled("div")(({ theme }) => ({
  // Responsywność - tablet
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const StyledTitle = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.secondary.main,
  fontWeight: "500",
  color: "#757575",
  textTransform: "uppercase",

  // Responsywność - tablet
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
  },
}));

export const StyledName = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.primary.main,
  fontWeight: "500",
}));

export const StyledNav = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  "& .link, & .link-active": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "500",
    textDecoration: "none",
    padding: "12px 8px",
    borderRadius: "20px",
    transition: "all 0.3s",
    color: globalTheme.palette.textcolor.primary,
    fontSize: globalTheme.typography.subtitle.main,
    "&:hover, &.link-active": {
      background: globalTheme.palette.primary.main,
      color: globalTheme.palette.secondary.main,
    },
  },

  "& .link-option, & .link-active-option": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "500",
    textDecoration: "none",
    padding: "12px 8px",
    borderRadius: "20px",
    transition: "all 0.3s",
    color: globalTheme.palette.textcolor.primary,
    fontSize: globalTheme.typography.subtitle.main,
    "&:hover, &.link-active-option": {
      background: globalTheme.palette.complementary.main,
      color: globalTheme.palette.textcolor.primary,
    },
  },

  // Responsywność - tablet
  [theme.breakpoints.down("lg")]: {
    "& .link, & .link-active": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover > .text": {
        left: "40px",
        opacity: "1",
        visibility: "visible",
      },
    },

    "& .link-option, & .link-active-option": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover > .text": {
        left: "40px",
        opacity: "1",
        visibility: "visible",
      },
    },
  },
}));

export const StyledMenu = styled("div")(({ theme }) => ({
  "&:last-child": {
    marginTop: "auto",
  },
}));

export const StyledLinks = styled("ul")(({ theme }) => ({}));

export const StyledItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  marginBottom: "5px",
  padding: "0",
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  fontSize: globalTheme.typography.subtitle.main,
  display: "flex",
  alignItems: "center",
  marginLeft: "15px",

  // Responsywność - tablet
  [theme.breakpoints.down("lg")]: {
    marginLeft: "0",
  },
}));

export const StyledSpan = styled("span")(({ theme }) => ({
  // Responsywność - tablet
  [theme.breakpoints.down("lg")]: {
    position: "absolute",
    left: "50px",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "5px",
    borderRadius: "4px",
    color: globalTheme.palette.secondary.main,
    background: globalTheme.palette.textcolor.primary,
    opacity: "0",
    visiblity: "hidden",
    transition: "all 0.3s",
    whiteSpace: "nowrap",

    "&::after": {
      content: '""',
      position: "absolute",
      left: "-5px",
      width: "20px",
      height: "20px",
      borderRadius: "2px",
      background: globalTheme.palette.textcolor.primary,
      transform: "rotate(45deg)",
      zIndex: "-1",
    },
  },
}));

// export const StyledSpan = styled("span")(({ theme }) => ({}));

// export const StyledSpan = styled("span")(({ theme }) => ({}));

// export const StyledSpan = styled("span")(({ theme }) => ({}));
