import React, { useState } from "react";
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
  StyledToggleButton,
  StyledLink,
  StyledToggleContainer,
  StyledToggle,
  StyledTogglePanel,
  StyledAnimation,
} from "./styles";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { styled } from "@mui/system";

const moveKeyframes = styled.keyframes({
  "0%, 49.99%": {
    opacity: "0",
    zIndex: "1",
  },
  "50%, 100%": {
    opacity: "1",
    zIndex: "5",
  },
});

StyledAnimation.defaultProps = {
  css: {
    animation: `${moveKeyframes} 0.6s`,
  },
};

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleToggleClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <StyledContainer>
      <LoginContainer id="container">
        <FormContainer>
          <StyledTypography>
            {isSignIn ? "Sign In" : "Create Account"}{" "}
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
              : "or use your email for registraion"}
          </StyledSpan>
          {!isSignIn && <StyledInput type="text" placeholder="Username" />}
          <StyledInput type="email" placeholder="Email" />
          <StyledInput type="password" placeholder="Password" />
          {!isSignIn && <StyledButton>Sign Up</StyledButton>}
          {isSignIn && <StyledLink href="#">Forgot Your Password?</StyledLink>}
          <StyledButton
            onClick={handleToggleClick}
            className={isSignIn ? "hidden" : ""}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </StyledButton>
        </FormContainer>
        <StyledToggleContainer>
          <StyledToggle>
            <StyledTogglePanel
              className={`toggle-left ${isSignIn ? "hidden" : ""}`}
            >
              <StyledTypography>Welcome Back!</StyledTypography>
              <StyledTypography>
                Enter your personal details to use all site features
              </StyledTypography>
              <StyledToggleButton id="login" className="hidden">
                Sign In
              </StyledToggleButton>
            </StyledTogglePanel>
            <StyledTogglePanel
              className={`toggle-right ${isSignIn ? "" : "hidden"}`}
            >
              <StyledTypography variant="h1">Hello, Friend!</StyledTypography>
              <StyledTypography>
                Register with your personal details to use all site features
              </StyledTypography>
              <StyledAnimation className={`hidden ${isSignIn ? "hidden" : ""}`}>
                <StyledToggleButton id="register">Sign Up</StyledToggleButton>
              </StyledAnimation>
            </StyledTogglePanel>
          </StyledToggle>
        </StyledToggleContainer>
      </LoginContainer>
    </StyledContainer>
  );
};

export default LoginPage;

// const StyledContainer = styled(Container)(({ theme }) => ({
//   backgroundColor: '#fff',
//   borderRadius: '30px',
//   boxShadow: '0 5px 15px rgba(0, 0, 0, 0.35)',
//   position: 'relative',
//   overflow: 'hidden',
//   width: '768px',
//   maxWidth: '100%',
//   minHeight: '480px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   padding: '20px',
//   margin: '20px auto',
// }));

// const StyledForm = styled('form')({
//   backgroundColor: '#fff',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   padding: '0 40px',
//   height: '100%',
// });

// const StyledInput = styled(TextField)({
//   backgroundColor: '#eee',
//   border: 'none',
//   margin: '8px 0',
//   padding: '10px 15px',
//   fontSize: '13px',
//   borderRadius: '8px',
//   width: '100%',
//   outline: 'none',
// });

// const StyledButton = styled(Button)({
//   backgroundColor: '#512da8',
//   color: '#fff',
//   fontSize: '12px',
//   padding: '10px 45px',
//   border: '1px solid transparent',
//   borderRadius: '8px',
//   fontWeight: '600',
//   letterSpacing: '0.5px',
//   textTransform: 'uppercase',
//   marginTop: '10px',
//   cursor: 'pointer',
//   '&.hidden': {
//     backgroundColor: 'transparent',
//     borderColor: '#fff',
//   },
// });

// const StyledLink = styled(Link)({
//   color: '#333',
//   fontSize: '13px',
//   textDecoration: 'none',
//   margin: '15px 0 10px',
// });

// const StyledToggleContainer = styled('div')({
//   position: 'absolute',
//   top: '0',
//   left: '50%',
//   width: '50%',
//   height: '100%',
//   overflow: 'hidden',
//   transition: 'all 0.6s ease-in-out',
//   borderRadius: '150px 0 0 100px',
//   zIndex: '1000',
// });

// const StyledToggle = styled('div')({
//   backgroundColor: '#512da8',
//   height: '100%',
//   background: 'linear-gradient(to right, #5c6bc0, #512da8)',
//   color: '#fff',
//   position: 'relative',
//   left: '-100%',
//   width: '200%',
//   transform: 'translateX(0)',
//   transition: 'all 0.6s ease-in-out',
// });

// const StyledTogglePanel = styled('div')({
//   position: 'absolute',
//   width: '50%',
//   height: '100%',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   padding: '0 30px',
//   textAlign: 'center',
//   top: '0',
//   transform: 'translateX(0)',
//   transition: 'all 0.6s ease-in-out',
// });

// const StyledSocialIcons = styled('div')({
//   margin: '20px 0',
// });

// const StyledSocialIcon = styled('a')({
//   border: '1px solid #ccc',
//   borderRadius: '20%',
//   display: 'inline-flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   margin: '0 3px',
//   width: '40px',
//   height: '40px',
// });

// const StyledTypography = styled(Typography)({
//   fontSize: '14px',
//   lineHeight: '20px',
//   letterSpacing: '0.3px',
//   margin: '20px 0',
// });

// const StyledSpan = styled('span')({
//   fontSize: '12px',
// });

// const StyledAnimation = styled('div')({
//   '&.hidden': {
//     opacity: '0',
//     zIndex: '1',
//   },
//   '&:not(.hidden)': {
//     opacity: '1',
//     zIndex: '5',
//   },
//   animation: '$move 0.6s',
// });

// const ModernLoginPage = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   const handleToggleClick = () => {
//     setIsSignIn(!isSignIn);
//   };

//   return (
//     <StyledContainer>
//       <StyledForm>
//         <StyledTypography variant="h1">{isSignIn ? 'Sign In' : 'Create Account'}</StyledTypography>
//         <StyledSocialIcons>
//           <StyledSocialIcon href="#" className="icon">
//             {/* Add your social icons */}
//           </StyledSocialIcon>
//           {/* Add more social icons as needed */}
//         </StyledSocialIcons>
//         <StyledSpan>{isSignIn ? 'or use your email and password' : 'or use your email for registration'}</StyledSpan>
//         {!isSignIn && <StyledInput type="text" placeholder="Name" />}
// <StyledInput type="email" placeholder="Email" />
//         <StyledInput type="password" placeholder="Password" />
//         {!isSignIn && <StyledButton>Sign Up</StyledButton>}
//         {isSignIn && <StyledLink href="#">Forgot Your Password?</StyledLink>}
//         <StyledButton onClick={handleToggleClick} className={isSignIn ? 'hidden' : ''}>
//           {isSignIn ? 'Sign In' : 'Sign Up'}
//         </StyledButton>
//       </StyledForm>

//     </StyledContainer>
//   );
// };

// export default ModernLoginPage;
