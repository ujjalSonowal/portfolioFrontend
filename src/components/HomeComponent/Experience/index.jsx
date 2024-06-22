import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  /* background-color: #f9f9f9; */
  background: #222;
  color: #e0d0d0;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);
  width: 400px;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Add transition */
  transform-style: preserve-3d; /* Add 3D effect */
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: rgb(55, 131, 151);
    color: #ae9992;
    transform: rotateY(7deg); /* Rotate card on Y-axis */
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;
const Red = styled.p`
  position: absolute;
  top: 52px;
  left: 90px;
  color: red;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Period = styled.p`
  display: flex;
  gap: 2px;
  font-size: 16px;
  margin-bottom: 5px;
`;

const Company = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 16px;
`;

export const Experience = ({ experience }) => {
  return (
    <ExperienceContainer>
      <Title>{experience.title}</Title>
      <Period>
        Duration: <Red>{experience.period}</Red>
      </Period>
      <Company>Company: {experience.company}</Company>
      <Description>{experience.description}</Description>
    </ExperienceContainer>
  );
};

export default Experience;
