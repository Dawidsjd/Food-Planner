import { styled } from "@mui/system";
import globalTheme from "../../globalTheme/globalTheme";

export const SearchCookBook = styled("div")(({ theme }) => ({
  position: "relative",
  margin: "2.5% 0 5% 5%",
  color: "#726B6B",
  background: "#D9D9D9",
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",
  padding: "0.7em",
  width: "60%",
  "& input": {
    marginLeft: "0.5em",
    border: "none",
    outline: "none",
    background: "#D9D9D9",
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.down("679.95")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export const LogoSection = styled("div")(({ theme }) => ({
  margin: "2.5% 5% 5% 5%",
}));

export const LogoImg = styled("img")(({ theme }) => ({
  width: "70px",
  height: "auto",
  borderRadius: "10px",
  pointerEvents: "none",
  userSelect: "none",
}));

export const SearchSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const MobileOptions = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
    "& .link, & .link-active": {
      "&:hover, &.link-active": {
        background: "none",
        color: globalTheme.palette.complementary.main,
      },
    },
  },
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  margin: "0 5px",
  fontSize: "30px",
}));
