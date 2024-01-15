import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import {
  StyledContainer,
  LoginContainer,
  FormContainer,
  StyledHeader,
  StyledTypography,
  StyledSocialIcons,
  StyledIcon,
  StyledSpan,
  StyledInput,
  StyledButton,
  StyledLink,
  StyledToggleContainer,
  StyledToggle,
  StyledTogglePanel,
} from "./styles";
import Logo from "../../../assets/logo.png";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleClick = (event) => {
    event.preventDefault(); // Prevents the default behavior of the button

    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };

  return (
    <StyledContainer>
      <LoginContainer>
        <FormContainer isSignIn={isSignIn}>
          <StyledHeader isSignIn={isSignIn}>
            <div>
              <img src={Logo} className="logo" />
            </div>
            <div>
              <button
                className="toggleBtn"
                onClick={(e) => handleToggleClick(e)}
              >
                {!isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </StyledHeader>
          <StyledTypography>
            {isSignIn ? "Sign In" : "Create Account"}
          </StyledTypography>
          <StyledSocialIcons>
            <StyledIcon>
              <FaFacebookF />
            </StyledIcon>
            <StyledIcon>
              <FaGoogle />
            </StyledIcon>
            <StyledIcon>
              <FaApple />
            </StyledIcon>
          </StyledSocialIcons>
          <StyledSpan>
            {isSignIn
              ? "or use your email account"
              : "or use your email for registration"}
          </StyledSpan>
          {!isSignIn && <StyledInput type="text" placeholder="Username" />}
          <StyledInput type="email" placeholder="Email" />
          <StyledInput type="password" placeholder="Password" />
          {!isSignIn && <StyledButton>Sign Up</StyledButton>}
          {isSignIn && <StyledLink href="#">Forgot Your Password?</StyledLink>}
          {isSignIn && <StyledButton>Sign In</StyledButton>}
        </FormContainer>
        <StyledToggleContainer isSignIn={isSignIn}>
          <StyledToggle>
            <StyledTogglePanel>
              <StyledTypography className="ToggleText">
                {!isSignIn ? "Welcome Back!" : "New here?"}
              </StyledTypography>
              <StyledSpan className="ToggleText">
                {!isSignIn
                  ? "Enter your personal details to use all site features"
                  : "Register with your personal details to use all site features"}
              </StyledSpan>
              <StyledButton className="hidden" onClick={handleToggleClick}>
                {!isSignIn ? "Sign In" : "Sign Up"}
              </StyledButton>
            </StyledTogglePanel>
          </StyledToggle>
        </StyledToggleContainer>
      </LoginContainer>
    </StyledContainer>
  );
};

export default Login;
