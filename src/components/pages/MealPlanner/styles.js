import { styled } from "@mui/system";

export const MenuContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "-webkit-fill-available",
  height: "100%",
}));

export const FoodListContainer = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  width: "80%",
  height: "100%",
});
