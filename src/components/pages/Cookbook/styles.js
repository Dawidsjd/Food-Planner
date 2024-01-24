import { styled } from "@mui/system";

export const MenuCookContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "-webkit-fill-available",
  height: "100%",
  [theme.breakpoints.down("679.95")]: {
    height: "auto",
    zIndex: "1",
  },
}));

export const CookBookContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  width: "80%",
  height: "100%",
  [theme.breakpoints.down("1279.95")]: {
    width: "87%",
  },
  [theme.breakpoints.down("679.95")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
