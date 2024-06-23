import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Certificate } from "../../components/HomeComponent/Certificate.jsx";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const ProjectTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  margin-top: 70px;
  margin-bottom: 20px;
  color: white;

  &:hover {
    color: #a33b3b;
  }
`;

export function CertificationPage() {
  const [certificate, setCertificate] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const projectResponse = await axios.get(
          "https://portfolioserver-7.onrender.com/certificates"
        );
        setCertificate(projectResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <MainContainer>
      <ProjectTitle>My Certification</ProjectTitle>
      <ProjectContainer>
        {certificate.map((certificate) => (
          <Certificate key={certificate._id} certificate={certificate} />
        ))}
      </ProjectContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #222;
`;
