import globalTheme from "../../../globalTheme/globalTheme";
import { styled } from "@mui/system";

export const SettingsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  position: "relative",
}));

export const SettingsPanel = styled("div")(({ theme }) => ({
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

export const ActiveSection = styled("div")(({ theme }) => ({
  minHeight: "300px",
  margin: "10px",
}));

export const ImageSection = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "15px",
  width: "50%",
}));

export const ProfileImage = styled("img")(({ theme }) => ({
  width: "120px",
  height: "120px",
  margin: "0 15px",
  borderRadius: "10px",
}));

export const ProfileButtons = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "10px",
}));

export const StyledBtn = styled("button")(({ theme }) => ({
  margin: "10px",
  width: "120px",
  height: "35px",
  borderRadius: "15px",
  border: "none",
  background: globalTheme.palette.primary.main,
  color: globalTheme.palette.secondary.main,
  fontSize: globalTheme.typography.secondary.main,
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",

  "&:hover": {
    background: "transparent",
    border: "1px solid #6A8D73",
    color: globalTheme.palette.primary.main,
  },

  "&.cancel": {
    background: "transparent",
    border: "1px solid #6A8D73",
    color: globalTheme.palette.primary.main,

    "&:hover": {
      background: globalTheme.palette.primary.main,
      border: "none",
      color: globalTheme.palette.secondary.main,
    },
  },
}));

export const GeneralSection = styled("div")(({ theme }) => ({
  display: "flex",
}));

export const StyledForm = styled("form")(({ theme }) => ({
  width: "50%",
  margin: "15px",
}));

export const StyledTitle = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.subtitle.main,
  fontWeight: "600",
  marginBottom: "5px",
}));

export const StyledSubtitle = styled("p")(({ theme }) => ({
  fontSize: globalTheme.typography.primary.main,
}));

export const StyledInput = styled("input")(({ theme }) => ({
  width: "60%",
  borderRadius: "5px",
  border: ".5px solid #D9D9D9",
  padding: "3px ",
  marginTop: "5px",
}));

export const FavoriveBox = styled("div")(({ theme }) => ({
  margin: "15px",
  width: "50%",
}));

export const SetSection = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
}));

export const StyledIcon = styled("i")(({ theme }) => ({
  fontSize: globalTheme.typography.subtitle.main,
  margin: "1px 10px",
}));
