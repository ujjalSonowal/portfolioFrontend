import React from "react";
import styled from "styled-components";

const EducationCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  perspective: 1000px;
`;

const Line = styled.div`
  width: 9px;
  height: 100%;
  background-color: #ff4500; /* Set line color */
`;

const EducationCard = styled.div`
  width: 400px;
  background-color: #222;
  color: #e0d0d0;
  border-radius: 10px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);
  padding: 20px;
  /* margin-left: 20px; */
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  transform-style: preserve-3d;
  font-family: "Roboto", sans-serif;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    background-color: #378397;
    color: #ae9992;
    transform: rotateY(5deg);
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-size: 16px;
  min-width: 120px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
`;

const Value = styled.span`
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
`;

export const Education = ({ education }) => {
  return (
    <div>
      <EducationCardContainer>
        <Line />
        <EducationCard>
          <Title>{education.degree}</Title>
          <DetailList>
            <DetailItem>
              <Label>Field of Study:</Label>
              <Value>{education.fieldofstudy}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Institution:</Label>
              <Value>{education.institution}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Duration:</Label>
              <Value>
                {education.startYear} - {education.endYear || "Present"}
              </Value>
            </DetailItem>
            <DetailItem>
              <Label>CGPA:</Label>
              <Value>{education.cgpa}</Value>
            </DetailItem>
          </DetailList>
        </EducationCard>
      </EducationCardContainer>
    </div>
  );
};

export default Education;
