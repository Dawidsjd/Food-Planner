import globalTheme from "../../../globalTheme/globalTheme";
import { styled } from "@mui/system";
import Background from "../../../assets/background.svg";

export const StyledContainer = styled("div")(({ theme }) => ({
  backgroundImage: `url(${Background})`,
  minHeight: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

export const LoginContainer = styled("div")(({ theme }) => ({
  background: globalTheme.palette.secondary.main,
  borderRadius: "30px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.35)",
  position: "relative",
  overflow: "hidden",
  width: "1200px",
  maxWidth: "100%",
  minHeight: "520px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "20px",
  margin: "20px auto",
}));

export const FormContainer = styled("form")(({ theme }) => ({
  background: globalTheme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0 40px",
  height: "100%",
}));

export const StyledTypography = styled("h1")(({ theme }) => ({}));

export const StyledSocialIcons = styled("div")(({ theme }) => ({}));

export const StyledIcon = styled("button")(({ theme }) => ({}));

export const StyledSpan = styled("span")(({ theme }) => ({}));

export const StyledInput = styled("input")(({ theme }) => ({
  background: globalTheme.palette.complementary.main,
  border: "none",
  margin: "8px 0",
  padding: "10px 15px",
  fontSize: globalTheme.typography.secondary.main,
  borderRadius: "8px",
  width: "100%",
  outline: "none",
}));

export const StyledButton = styled("button")(({ theme }) => ({
  background: globalTheme.palette.primary.main,
  color: globalTheme.palette.secondary.main,
}));

export const StyledToggleButton = styled("button")(({ theme }) => ({
  background: "none",
  // border: "1px solid #fff",
}));

export const StyledLink = styled("a")(({ theme }) => ({}));

export const StyledToggleContainer = styled("div")(({ theme }) => ({}));

export const StyledToggle = styled("div")(({ theme }) => ({}));

export const StyledTogglePanel = styled("div")(({ theme }) => ({}));

export const StyledAnimation = styled("div")(({ theme }) => ({
  "&.hidden": {
    opacity: "0",
    zIndex: "1",
  },
  "&:not(.hidden)": {
    opacity: "1",
    zIndex: "5",
  },
  animation: "$move 0.6s",
}));

// export const StyledContainer = styled("div")(({ theme }) => ({}));

// export const StyledContainer = styled("div")(({ theme }) => ({}));

// export const StyledContainer = styled("div")(({ theme }) => ({}));

// export const StyledContainer = styled("div")(({ theme }) => ({}));
