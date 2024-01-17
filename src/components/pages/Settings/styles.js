import globalTheme from "../../../globalTheme/globalTheme";
import { styled } from "@mui/system";

export const SettingsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  position: "relative",
}));

export const SettingsPanel = styled("div")(({ theme }) => ({
  border: "1px solid black",
  flex: 1,
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SettingsBox = styled("div")(({ theme }) => ({
  background: globalTheme.palette.background.additional,
}));

// export const SettingsPanel = styled("div")(({ theme }) => ({}));

// export const SettingsPanel = styled("div")(({ theme }) => ({}));

// export const SettingsPanel = styled("div")(({ theme }) => ({}));
