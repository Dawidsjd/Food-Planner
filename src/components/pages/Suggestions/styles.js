import globalTheme from "../../../globalTheme/globalTheme";
import { styled } from "@mui/system";

export const SuggestContainer = styled("div")(({ theme }) => ({
  display: "flex",
}));

export const ContentWrapper = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));

export const SuggestionPanel = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));
