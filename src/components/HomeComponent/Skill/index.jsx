import React from "react";
import styled from "styled-components";

// const Main = styled.div`
//   width: 100%;
//   padding: 10px;
//   box-sizing: border-box;
// `;

// const SkillContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   background-color: #f9f9f9;
//   padding: 20px;
//   margin-bottom: 20px;
//   border-radius: 10px;
//   box-shadow: 14px 18px 10px rgba(40, 137, 156, 0.552),
//     inset 0 0 10px rgba(190, 210, 210, 0);
//   transition: box-shadow 0.3s ease;

//   &:hover {
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2),
//       inset 0 0 10px rgba(129, 175, 129, 0.2);
//     background-color: #248080;
//     color: gold;
//   }

//   @media (min-width: 480px) {
//     flex-direction: column;
//     flex-wrap: wrap;
//   }

//   @media (min-width: 768px) {
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;
//   }

//   @media (min-width: 1024px) {
//     /* padding: 20px; */
//   }
// `;

const SkillName = styled.h3`
  /* display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px; */

  @media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    /* font-size: 22px; */
  }
`;

const SkillDescription = styled.p`
  font-size: 14px;
  color: red;

  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    margin-left: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Skill = ({ skill }) => {
  return (
    <MainContainer>
      <SkillMain>
        <Name>{skill.skill_name}</Name>
        <Level>{skill.level}</Level>
      </SkillMain>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  /* display: flex; */
  padding: 10px;
  box-sizing: border-box;
`;

const SkillMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 10px 28px 30px rgba(40, 137, 156, 0.552),
    inset 10px 10px 10px rgba(190, 210, 210, 0);
  transition: box-shadow 0.3s ease;
  padding: 20px;
  /* width: 200px; */
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2),
      inset 0 0 10px rgba(129, 175, 129, 0.2);
    background-color: #248080;
    color: gold;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    /* width: 100%; */
    gap: 20px;
  }
`;

const Name = styled.p`
  font-size: 20px;
`;

const Level = styled.p`
  font-size: 14px;
  color: red;
`;

export default Skill;
