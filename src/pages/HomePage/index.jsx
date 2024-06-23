import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Education } from "../../components/HomeComponent/Education";
import { Intro } from "../../components/HomeComponent/Intro";
import { Experience } from "../../components/HomeComponent/Experience";
import { Skill } from "../../components/HomeComponent/Skill/index";
import { Project } from "../../components/ProjectComponent/Project";

const HomeContainer = styled.div`
  /* padding: 20px; */
  width: 100%;

  /* position: relative;  */
  @media (max-width: 768px) {
    /* padding: 10px; */
  }
`;

const SectionContainer = styled.div`
  margin-bottom: 40px;
`;

const SkillContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
  /* display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  } */
`;

const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgb(164, 203, 172);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: rgb(25, 83, 37);
    color: #a8c33e;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* width: 100px; */
    gap: 4px;
  }
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  margin: 20px;

  &:hover {
    color: #a33b3b;
  }
`;

const SkillTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 44px;
  font-weight: bold;
  margin-bottom: 20px;
  margin: 30px;
  position: relative;

  &:hover {
    color: #ce2c2c;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 2px;
    background-color: red;
  }

  &::before {
    top: -10px; /* Adjust the distance above the text */
  }

  &::after {
    bottom: -10px; /* Adjust the distance below the text */
  }
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, #100404eb 0%, #9a5151f5 100%);
  color: white;
  perspective: 1000px;
  overflow: hidden;
  /* position: relative; */
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const IntroContent = styled.div`
  position: relative;
  z-index: 1;
  transform: translateZ(60px);
  transition: transform 0.3s;

  &:hover {
    transform: translateZ(80px);
  }
`;

const Combine = styled.div`
  width: 100%;
  background-color: #222;
  padding-top: 20px;
  display: flex;
  justify-content: space-around; /* Adjust spacing equally */
  flex-wrap: wrap;
  position: relative; /* Add relative positioning */

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  margin-top: 40px;
  /* height: 400px; */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    gap: 20px;
  }
  @media (max-width: 48px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  margin-top: 20px;

  @media (max-width: 768px) {
    /* margin-top: 0; */
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #222;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  /* margin: 0 auto; */
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const FormTextarea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Link = styled.a`
  color: #333;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: absolute;
  left: 0;
  right: 0;
  @media (max-width: 768px) {
  }
`;

export const HomePage = () => {
  const [intro, setIntro] = useState(null);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skill, setSkill] = useState([]);
  const [projects, setProject] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const introResponse = await axios.get(
          "https://portfolioserver-7.onrender.com/intro"
        );
        setIntro(introResponse.data);

        const educationResponse = await axios.get(
          "https://portfolioserver-7.onrender.com/education"
        );
        setEducations(educationResponse.data);

        const experienceResponse = await axios.get(
          "https://portfolioserver-7.onrender.com/experience"
        );
        setExperiences(experienceResponse.data);

        const skillResponse = await axios.get(
          "https://portfolioserver-7.onrender.com/skill"
        );
        setSkill(skillResponse.data);

        const projectResponse = await axios.get(
          "https://portfolioserver-7.onrender.com/project"
        );
        setProject(projectResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");
    try {
      await axios.post(
        "https://portfolioserver-7.onrender.com/contact/post",
        formData
      );
      setSuccess("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError("Failed to send message.");
    }
    setIsLoading(false);
  };
  return (
    <HomeContainer>
      <IntroContainer>
        {/* <WaterDrop /> */}
        <IntroContent>
          {intro &&
            intro.map((intro) => (
              <Intro key={intro._id} intro={intro} formRef={formRef} />
            ))}
        </IntroContent>
      </IntroContainer>

      <div>
        <SkillTitle>Skills</SkillTitle>
        <SkillContainer>
          {skill.map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </SkillContainer>
      </div>
      <Combine>
        <SectionContainer>
          <SectionTitle>Education</SectionTitle>
          <div>
            {educations.map((education) => (
              <Education key={education._id} education={education} />
            ))}
          </div>
        </SectionContainer>
        {/* <VerticalLine /> */}
        <SectionContainer>
          <SectionTitle>Experience</SectionTitle>
          <div>
            {experiences.map((experience) => (
              <Experience key={experience._id} experience={experience} />
            ))}
          </div>
        </SectionContainer>
      </Combine>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectContainer>
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </ProjectContainer>
      <ContactContainer ref={formRef}>
        <Form onSubmit={handleSubmit}>
          <H1>Contact Me</H1>
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormTextarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <FormButton type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </FormButton>
        </Form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <QcLink>
          <QuickLinks>
            <Link href="#">About</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Contact</Link>
          </QuickLinks>
          <ContactDetails>
            {/* <h2>Contact Details</h2> */}
            <p>Phone: 9864699834</p>
            <p>Email: ujjalsonowal978@gmail.com</p>
            <p>Address: Bormura Miri Pathar, Tinsukia, 786154, Assam, India</p>
          </ContactDetails>
        </QcLink>
      </ContactContainer>
      <Footer>
        &copy; {new Date().getFullYear()} Ujjal Sonowal. All rights reserved.
      </Footer>
    </HomeContainer>
  );
};

const QcLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
