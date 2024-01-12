import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import {
  StyledContainer,
  LoginContainer,
  FormContainer,
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

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <StyledContainer>
      <LoginContainer>
        <FormContainer>
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
        <StyledToggleContainer>
          <StyledToggle>
            <StyledTogglePanel>
              <StyledTypography className="ToggleText">
                {!isSignIn ? "Welcome Back!" : "Hello, Friend"}
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
