import globalTheme from "../../../globalTheme/globalTheme";
import { styled } from "@mui/system";
import Background from "../../../assets/background.svg";

export const StyledContainer = styled("div")(({ theme }) => ({
  backgroundImage: `url(${Background})`,
  minHeight: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover", // Responsywne dostosowanie szerokości
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

export const LoginContainer = styled("div")(({ theme }) => ({}));

export const FormContainer = styled("form")(({ theme }) => ({}));

export const StyledTypography = styled("h1")(({ theme }) => ({}));

export const StyledSocialIcons = styled("div")(({ theme }) => ({}));

export const StyledIcon = styled("button")(({ theme }) => ({}));

export const StyledSpan = styled("span")(({ theme }) => ({}));

// export const StyledContainer = styled("div")(({ theme }) => ({}));

// export const StyledContainer = styled("div")(({ theme }) => ({}));

// export const StyledContainer = styled("div")(({ theme }) => ({}));

// export const StyledContainer = styled("div")(({ theme }) => ({}));

// export const StyledContainer = styled("div")(({ theme }) => ({}));
