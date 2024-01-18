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

  // Responsywność - telefon
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

export const SectionHeader = styled("div")(({ theme }) => ({
  display: "flex",
  boxShadow: "0px 4px 8px -2px rgba(0, 0, 0, 0.1)",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  padding: "30px",

  "& .header": {
    fontSize: globalTheme.typography.subtitle.main,
    fontWeight: 600,

    // Responsywność - telefon
    [theme.breakpoints.down("md")]: {
      fontSize: globalTheme.typography.primary.main,
    },
  },

  // Responsywność - telefon
  [theme.breakpoints.down("md")]: {
    padding: "15px",
  },
}));

export const SectionLinks = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
}));

export const LinkBtn = styled("button")(({ theme }) => ({
  margin: "0 10px",
  border: "none",
  background: "none",
  cursor: "pointer",
  position: "relative",
  textDecoration: "none",
  fontSize: globalTheme.typography.primary.main,

  // Responsywność - telefon
  [theme.breakpoints.down("md")]: {
    fontSize: globalTheme.typography.secondary.main,
    margin: "0 5px",
  },

  "&:after": {
    content: '""',
    position: "absolute",
    background: globalTheme.palette.primary.main,
    height: "3px",
    width: 0,
    left: 0,
    bottom: "-5px",
    transition: "0.3s",
  },

  "&:hover:after": {
    width: "100%",
  },

  "&.active:after": {
    width: "100%",
  },
}));

export const ActiveSection = styled("div")(({ theme }) => ({}));
