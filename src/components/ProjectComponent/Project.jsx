import React, { useState } from "react";
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const ProjectCard = styled.div`
  width: 400px;
  background-color: #222;
  color: #fff;
  border-radius: 15px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  box-shadow: 0px 1px 2px 0px rgba(255, 0, 0, 0.7),
    1px 2px 4px 0px rgba(255, 0, 0, 0.7), 2px 4px 8px 0px rgba(255, 0, 0, 0.7),
    2px 4px 16px 0px rgba(255, 0, 0, 0.7);
  padding: 20px;
  margin: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: rgb(55, 131, 151);
    color: #c4a89f;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  text-align: start;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.expanded ? "none" : 2)};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MoreLink = styled.span`
  color: #fff;
  cursor: pointer;
  text-align: center;
  display: block;
  margin-top: 10px;
  transition: color 0.3s ease;
  padding-bottom: 30px;

  &:hover {
    color: #c4a89f;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const ProjectButton = styled.a`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
`;

export const Project = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <ProjectCardContainer>
      <ProjectCard>
        <ProjectTitle>Project Title: {project.title}</ProjectTitle>
        <ProjectDescription expanded={expanded}>
          {project.description}
        </ProjectDescription>
        <p>
          <strong>Technologies:</strong> {project.technologies}
        </p>
        <MoreLink onClick={toggleExpand}>
          {expanded ? "Show less" : "More..."}
        </MoreLink>
        <ButtonContainer>
          <ProjectButton
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </ProjectButton>
          <ProjectButton
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </ProjectButton>
        </ButtonContainer>
      </ProjectCard>
    </ProjectCardContainer>
  );
};

export default Project;
