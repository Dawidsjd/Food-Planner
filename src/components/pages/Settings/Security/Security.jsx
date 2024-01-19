import React, { useState } from "react";
import {
  StyledForm,
  StyledTitle,
  StyledSubtitle,
  StyledInput,
  StyledIcon,
} from "../styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Security = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const togglePasswordVisibility = (inputNumber) => {
    switch (inputNumber) {
      case 1:
        setShowPassword1(!showPassword1);
        break;
      case 2:
        setShowPassword2(!showPassword2);
        break;
      case 3:
        setShowPassword3(!showPassword3);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StyledForm>
        <StyledTitle>Change your password</StyledTitle>

        <StyledSubtitle>Current password</StyledSubtitle>
        <StyledInput type={showPassword1 ? "text" : "password"} />
        <StyledIcon onClick={() => togglePasswordVisibility(1)}>
          {showPassword1 ? <FaEye /> : <FaEyeSlash />}
        </StyledIcon>

        <StyledSubtitle>New password</StyledSubtitle>
        <StyledInput type={showPassword2 ? "text" : "password"} />
        <StyledIcon onClick={() => togglePasswordVisibility(2)}>
          {showPassword2 ? <FaEye /> : <FaEyeSlash />}
        </StyledIcon>

        <StyledSubtitle>Confirm new password</StyledSubtitle>
        <StyledInput type={showPassword3 ? "text" : "password"} />
        <StyledIcon onClick={() => togglePasswordVisibility(3)}>
          {showPassword3 ? <FaEye /> : <FaEyeSlash />}
        </StyledIcon>
      </StyledForm>
    </>
  );
};

export default Security;
