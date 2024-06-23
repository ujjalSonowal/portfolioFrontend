import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Project } from "../../components/ProjectComponent/Project";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  /* background-color: #222; */
`;
const ProjectTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;

  &:hover {
    color: #a33b3b;
  }
`;

export function Projectpage() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
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

  return (
    <MainContainer>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectContainer>
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </ProjectContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #222;
  width: 100%;
`;

export default Projectpage;
