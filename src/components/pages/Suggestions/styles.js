import globalTheme from "../../../globalTheme/globalTheme";
import { styled } from "@mui/system";

export const MenuSuggestContainer = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    position: "relative",
}));

export const SuggestionsPanel = styled("div")(({ theme }) => ({
    border: "1px solid black",
    flex: 1,
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));
