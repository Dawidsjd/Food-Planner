import { createTheme } from "@mui/material";

const globalTheme = createTheme({
  palette: {
    primary: {
      main: "#6A8D73",
    },
    secondary: {
      main: "#FFFFFF",
    },
    tetriary: {
      main: "#FFE8C2",
    },
    complementary: {
      main: "#D9D9D9",
    },
    background: {
      main: "#E4FFE1",
      additional: "#F4FDD9",
    },
    textcolor: {
      primary: "#000000",
      secondary: "#9F8BE8",
    },
    additional: {
      first: "#86BF80",
      second: "#F0A868",
    },
  },
  typography: {
    header: {
      main: "36px",
    },
    title: {
      main: "24px",
    },
    subtitle: {
      main: "18px",
    },
    primary: {
      main: "16px",
    },
    secondary: {
      main: "14px",
    },
    button: {
      main: "16px",
    },
  },
});

export default globalTheme;
