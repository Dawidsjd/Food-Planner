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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SettingsBox = styled("div")(({ theme }) => ({
  background: globalTheme.palette.background.additional,
  borderRadius: "15px",
  width: "80%",
  boxShadow: "2px 1px 5px -2px rgba(0, 0, 0, 1)",
}));

export const SectionHeader = styled("div")(({ theme }) => ({
  display: "flex",
  boxShadow: "0px 4px 8px -2px rgba(0, 0, 0, 0.1)",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  padding: "15px",
}));

export const SectionLinks = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
}));

export const LinkBtn = styled("button")(({ theme }) => ({}));

export const ActiveSection = styled("div")(({ theme }) => ({}));
