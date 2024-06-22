import React from "react";
import styled, { keyframes } from "styled-components";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import img from "../../../Assets/img3.png";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;

  /* justify-content: space-evenly; */
  border-radius: 10px;
  text-align: center;
  gap: 200px;

  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
    gap: 0;
  }
`;

const Main = styled.div`
  margin-left: 140px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const dropLetterAnimation = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Letter = styled.span`
  display: inline-block;
  animation: ${dropLetterAnimation} 1s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s;

  @media (max-width: 768px) {
    animation-duration: 0.5s;
  }
`;

const AnimatedText = ({ text }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <Letter key={index} delay={index * 0.1}>
          {char}
        </Letter>
      ))}
    </>
  );
};

const WelcomeText = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
  color: white;

  &:hover {
    color: #e63946;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const P = styled.p`
  display: flex;
  gap: 3px;
  font-size: 40px;
  margin-bottom: 10px;
  color: red;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;
const Name = styled.p`
  /* display: flex; */
  position: relative;
  top: 70px;
  font-size: 40px;
  font-family: Cinzel, serif;
  text-transform: uppercase;
  /* font-weight: bold; */
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  color: #fff; /* Golden color */
  animation: ${typingAnimation} 2s steps(70) forwards;
  animation-delay: 1s;

  @media (max-width: 768px) {
    font-size: 24px;
    top: 100px;
  }
`;

const Caption = styled.p`
  position: relative;
  top: 70px;
  display: flex;
  font-size: 60px;
  margin-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  color: #2c8b6b; /* Bright green color */
  width: 0;
  animation: ${typingAnimation} 2s steps(40) forwards;
  animation-delay: 3s;

  @media (max-width: 768px) {
    font-size: 32px;
    position: relative;
    top: 110px;
  }
`;

const Description = styled.p`
  position: absolute;
  top: 250px;
  font-size: 16px;
  color: #ffffff; /* White color */
  display: flex;
  /* flex-wrap: wrap; */
  /* align-items: center; */

  &:first-line {
    color: red;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    top: 250px;
  }
`;

const Button = styled.div`
  position: relative;
  top: 120px;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    top: 180px;
  }
`;

const ContactBtn = styled.button`
  padding: 10px 20px;
  border: 1px solid #ffd700; /* Golden color */
  border-radius: 5px;
  cursor: pointer;
  color: #c91414; /* Golden color */

  &:hover {
    background-color: #f0f7ff;
    color: #000; /* Black color */
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ResumeBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SocialMediaContainer = styled.div`
  position: relative;
  top: 130px;
  display: flex;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
    top: 190px;
  }
`;

const SocialMediaLink = styled.a`
  color: #0d2055;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Red = styled.p`
  position: relative;
  top: 10px;
  color: red;

  @media (max-width: 768px) {
    position: relative;
    top: -30px;
  }
`;

const Text = styled.div`
  display: flex;
  position: relative;
  top: 70px;
  @media (max-width: 768px) {
    position: relative;
    top: 100px;
  }
`;

export const Intro = ({ intro, formRef }) => {
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <IntroContainer>
      <Main>
        <IntroOne>
          <Text>
            <WelcomeText>
              <AnimatedText text="Hi," />
            </WelcomeText>
            <P>
              <AnimatedText text="I am" />
            </P>
          </Text>
          <Name>
            {intro.firstname} {intro.lastname}
          </Name>
        </IntroOne>
        <Caption>
          {intro.caption}
          <Red>!</Red>
        </Caption>
        <Description>{intro.description}</Description>
        <Button>
          <ContactBtn onClick={scrollToForm}>Contact Me</ContactBtn>
          <ResumeBtn>My Resume</ResumeBtn>
        </Button>
        <SocialMediaContainer>
          <SocialMediaLink
            href="https://www.instagram.com/mr._ujjwal_sonowal/?hl=en"
            target="_blank"
          >
            <FaInstagram />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.linkedin.com/in/ujjal-sonowal-56161b1b1/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://github.com/ujjalSonowal"
            target="_blank"
          >
            <FaGithub />
          </SocialMediaLink>
        </SocialMediaContainer>
      </Main>
      <ImageContainer>
        {/* Insert your image source here */}
        <Image src={img} alt="Your Image" />
      </ImageContainer>
    </IntroContainer>
  );
};

const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  /* position: fixed; */
  width: 50%;
  /* max-width: 400px; */
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 70%;
    height: 300px;
  }
`;

const IntroOne = styled.div`
  /* display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  } */
`;
export default Intro;
