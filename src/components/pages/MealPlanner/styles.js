import { styled } from "@mui/system";

export const MenuContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "-webkit-fill-available",
  height: "100%",
}));

export const FoodListContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  width: "80%",
  height: "100%",
  [theme.breakpoints.down("1274")]: {
    width: '90%',
  },
  [theme.breakpoints.down("920")]: {
    width: '85%',
  },
  [theme.breakpoints.down("680")]: {
    width: '100%',
  },
}));
