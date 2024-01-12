import globalTheme from "../../../globalTheme/globalTheme";
import { styled } from "@mui/system";
import Background from "../../../assets/background.svg";
import BackgroundSection from "../../../assets/backgroundSection.svg";

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
  minHeight: "550px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
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
  width: "60%",
  position: "absolute",
  top: "0",
  left: "50%",
  transition: "left 0.6s ease",
}));

export const StyledTypography = styled("h1")(({ theme }) => ({
  fontSize: globalTheme.typography.title.main,
  color: globalTheme.palette.primary.main,
  lineHeight: "20px",
  letterSpacing: "0.3px",
  margin: "10px 0",
  textAlign: "center",
}));

export const StyledSocialIcons = styled("div")(({ theme }) => ({
  margin: "20px 0",
}));

export const StyledIcon = styled("button")(({ theme }) => ({
  border: "1px solid #000",
  cursor: "pointer",
  background: "none",
  borderRadius: "50%",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 8px",
  width: "50px",
  height: "50px",
  "&:hover": {
    background: "#000",
    color: globalTheme.palette.secondary.main,
  },
}));

export const StyledSpan = styled("span")(({ theme }) => ({
  fontSize: globalTheme.typography.secondary.main,
  textAlign: "center",
}));

export const StyledInput = styled("input")(({ theme }) => ({
  background: globalTheme.palette.complementary.main,
  border: "none",
  margin: "8px 0",
  padding: "10px 15px",
  fontSize: globalTheme.typography.secondary.main,
  borderRadius: "8px",
  width: "70%",
  outline: "none",
}));

export const StyledButton = styled("button")(({ theme }) => ({
  background: globalTheme.palette.primary.main,
  color: globalTheme.palette.secondary.main,
  fontSize: globalTheme.typography.secondary.main,
  padding: "10px 45px",
  border: "1px solid transparent",
  borderRadius: "15px",
  fontWeight: "600",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  marginTop: "10px",
  cursor: "pointer",
  "&:hover": {
    background: "transparent",
    borderColor: globalTheme.palette.primary.main,
    color: globalTheme.palette.primary.main,
  },
  "&.hidden": {
    background: "transparent",
    borderColor: globalTheme.palette.secondary.main,
    "&:hover": {
      background: globalTheme.palette.secondary.main,
    },
  },
}));

export const StyledLink = styled("a")(({ theme }) => ({
  color: "#333",
  fontSize: "13px",
  textDecoration: "none",
  margin: "15px 0 10px",
}));

export const StyledToggleContainer = styled("div")(({ theme }) => ({
  backgroundImage: `url(${BackgroundSection})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "absolute",
  top: "0",
  right: "0",
  width: "40%",
  height: "100%",
  overflow: "hidden",
  transition: "left 0.6s ease",
  zIndex: "1000",
}));

export const StyledToggle = styled("div")(({ theme }) => ({
  height: "100%",
  color: "#fff",
  position: "relative",
  width: "200%",
}));

export const StyledTogglePanel = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0 30px",
  textAlign: "center",
  top: "0",
  transform: "translateX(0)",
  transition: "all 0.6s ease-in-out",
  "& .ToggleText": {
    color: globalTheme.palette.secondary.main,
    marginBottom: "15px",
  },
}));
