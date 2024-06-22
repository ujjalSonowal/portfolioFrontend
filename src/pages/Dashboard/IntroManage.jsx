import React from "react";
import { IntroManagement } from "../../components/Admin/IntroManagement/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export function IntroManage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home"); // Adjust the path to match your admin home page route
  };

  return (
    <ProfileContainer>
      <BackButton onClick={handleBack}>
        <FaArrowLeft /> Back to Admin Home
      </BackButton>
      <IntroManagement />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  padding: 20px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }

  svg {
    margin-right: 10px;
  }
`;
