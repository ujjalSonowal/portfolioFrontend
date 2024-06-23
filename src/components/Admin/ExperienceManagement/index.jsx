import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ExperienceContainer = styled.div`
  padding: 20px;
`;

const ExperienceCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Field = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
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

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export function ExperienceManagement() {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    title: "",
    period: "",
    company: "",
    description: "",
  });
  const [editExperienceId, setEditExperienceId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExperienceData();
  }, []);

  const fetchExperienceData = async () => {
    try {
      const response = await axios.get(
        "https://portfolioserver-7.onrender.com/experience"
      );
      setExperiences(response.data);
    } catch (error) {
      console.error("Error fetching experience data:", error);
      setError("Failed to fetch experience data");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editExperienceId) {
        await axios.patch(
          `https://portfolioserver-7.onrender.com/experience/update/${editExperienceId}`,
          newExperience
        );
        setEditExperienceId(null);
      } else {
        await axios.post(
          "https://portfolioserver-7.onrender.com/experience/post",
          newExperience
        );
      }
      fetchExperienceData();
      setNewExperience({
        title: "",
        period: "",
        company: "",
        description: "",
      });
    } catch (error) {
      console.error("Error saving experience data:", error);
      setError("Failed to save experience data");
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(
        `https://portfolioserver-7.onrender.com/experience/delete/${id}`
      );
      fetchExperienceData();
    } catch (error) {
      console.error("Error deleting experience data:", error);
      setError("Failed to delete experience data");
    }
  };

  const handleEditClick = (id) => {
    setEditExperienceId(id);
    const experienceToEdit = experiences.find((exp) => exp._id === id);
    setNewExperience({
      title: experienceToEdit.title,
      period: experienceToEdit.period,
      company: experienceToEdit.company,
      description: experienceToEdit.description,
    });
  };

  return (
    <ExperienceContainer>
      {error && <div>Error: {error}</div>}
      <ExperienceCard>
        <Title>Experience Information</Title>
        <form onSubmit={handleFormSubmit}>
          <Field>
            <Label>Title:</Label>
            <Input
              type="text"
              name="title"
              value={newExperience.title}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Period:</Label>
            <Input
              type="text"
              name="period"
              value={newExperience.period}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Company:</Label>
            <Input
              type="text"
              name="company"
              value={newExperience.company}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Description:</Label>
            <Input
              type="text"
              name="description"
              value={newExperience.description}
              onChange={handleInputChange}
            />
          </Field>
          <ButtonContainer>
            <Button type="submit">
              {editExperienceId ? "Update" : "Save"}
            </Button>
          </ButtonContainer>
        </form>
      </ExperienceCard>
      {experiences.map((experience) => (
        <ExperienceCard key={experience._id}>
          <Title>{experience.title}</Title>
          <div>
            <strong>Period: </strong>
            {experience.period}
          </div>
          <div>
            <strong>Company: </strong>
            {experience.company}
          </div>
          <div>
            <strong>Description: </strong>
            {experience.description}
          </div>
          <ButtonContainer>
            <Button onClick={() => handleEditClick(experience._id)}>
              Edit
            </Button>
            <Button onClick={() => handleDeleteClick(experience._id)}>
              Delete
            </Button>
          </ButtonContainer>
        </ExperienceCard>
      ))}
    </ExperienceContainer>
  );
}
