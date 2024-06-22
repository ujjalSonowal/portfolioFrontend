// ForgotPassword.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ForgotPasswordContainer = styled.div`
  /* Styles for ForgotPasswordContainer */
`;

const ForgotPasswordBox = styled.div`
  /* Styles for ForgotPasswordBox */
`;

const Title = styled.h1`
  /* Styles for Title */
`;

const InputLabel = styled.label`
  /* Styles for InputLabel */
`;

const InputField = styled.input`
  /* Styles for InputField */
`;

const SubmitButton = styled.button`
  /* Styles for SubmitButton */
`;

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send password reset instructions to the user's email address
    // Code for sending email instructions goes here

    // Redirect to the reset password page
    navigate("/reset-password");
  };

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordBox>
        <Title>Forgot Password</Title>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="forgot-password-email">Email </InputLabel>
          <InputField
            id="forgot-password-email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <SubmitButton type="submit">Reset Password</SubmitButton>
        </form>
      </ForgotPasswordBox>
    </ForgotPasswordContainer>
  );
};
