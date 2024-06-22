// ResetPassword.js

import React, { useState } from "react";
import styled from "styled-components";

const ResetPasswordContainer = styled.div`
  /* Styles for ResetPasswordContainer */
`;

const ResetPasswordBox = styled.div`
  /* Styles for ResetPasswordBox */
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

export const Reset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate password and confirm password
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Code to update password goes here

    // After updating the password, you can redirect the user to the login page
    alert("Password updated successfully");
    // Redirect to the login page
    // navigate("/login");
  };

  return (
    <ResetPasswordContainer>
      <ResetPasswordBox>
        <Title>Reset Password</Title>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="new-password">New Password </InputLabel>
          <InputField
            id="new-password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <InputLabel htmlFor="confirm-password">Confirm Password </InputLabel>
          <InputField
            id="confirm-password"
            type="password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <br />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </ResetPasswordBox>
    </ResetPasswordContainer>
  );
};
