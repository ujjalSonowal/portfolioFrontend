import React from "react";
import styled from "styled-components";
import img from "../../Assets/myimg.jpg";

const AboutContainer = styled.div`
  /* max-width: 800px; */
  margin: 0 auto;
  /* padding: 20px; */
`;

const AboutHeading = styled.h2`
  position: absolute;
  left: 45%;
  font-size: 28px;
  margin-bottom: 20px;
  margin-top: 50px;
  padding: 30px;
  @media (max-width: 768px) {
    left: 30%;
  }
`;

const AboutContent = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

export const About = ({ about }) => {
  return (
    <AboutContainer>
      <Main>
        <ImageContainer>
          <Image src={img} alt="profile" />
        </ImageContainer>
        <AboutHeading>About Me</AboutHeading>
        <More>
          <AboutContent>{about.description} </AboutContent>
          <Pa>
            <strong>Skills: </strong>
            {about.skills}
          </Pa>
        </More>
      </Main>
    </AboutContainer>
  );
};
const Pa = styled.p`
  /* margin-left: 20px; */
  @media (max-width: 768px) {
    margin-left: -125px;
  }
`;
const More = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin-top: 140px;
  margin-right: 50px;
  @media (max-width: 768px) {
    margin: 40px;
    align-items: center;
    gap: 30px;
    /* margin-top: 30px; */
  }
`;
const Main = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 768px) {
    margin: 0;
    align-items: center;
    flex-direction: column;
    gap: 150px;
  }
`;
const Image = styled.img`
  /* position: relative; */
  /* top: 130px; */
  /* left: 10px; */
  height: 400px;
  width: 400px;
  border-radius: 190px;
  /* padding: 20px; */
  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  top: 90px;
  display: flex;
  margin: 40px;
  /* border: 1px solid black; */
  height: 400px;
  width: 500px;
  /* background-color: aliceblue; */
  @media (max-width: 768px) {
    top: 150px;
    margin: 0;
    align-items: center;
    gap: 0;
    height: 200px;
    width: 200px;
  }
`;

export default About;
