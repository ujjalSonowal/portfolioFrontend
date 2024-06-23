import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EducationContainer = styled.div`
  padding: 20px;
`;

const EducationCard = styled.div`
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

export const EducationManagement = () => {
  const [educationData, setEducationData] = useState([]);
  const [newEducation, setNewEducation] = useState({
    degree: "",
    fieldofstudy: "",
    institution: "",
    startYear: "",
    endYear: "",
    cgpa: "",
  });
  const [editEducationId, setEditEducationId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEducationData();
  }, []);

  const fetchEducationData = async () => {
    try {
      const response = await axios.get(
        "https://portfolioserver-7.onrender.com/education"
      );
      setEducationData(response.data);
    } catch (error) {
      console.error("Error fetching education data:", error);
      setError("Failed to fetch education data");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editEducationId) {
        await axios.patch(
          `https://portfolioserver-7.onrender.com/education/update/${editEducationId}`,
          newEducation
        );
        setEditEducationId(null);
      } else {
        await axios.post(
          "https://portfolioserver-7.onrender.com/education/post",
          newEducation
        );
      }
      // Refresh data after saving or updating
      fetchEducationData();
      // Reset newEducation state
      setNewEducation({
        degree: "",
        fieldofstudy: "",
        institution: "",
        startYear: "",
        endYear: "",
        cgpa: "",
      });
    } catch (error) {
      console.error("Error saving education data:", error);
      setError("Failed to save education data");
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(
        `https://portfolioserver-7.onrender.com/education/delete/${id}`
      );
      // Refresh data after deletion
      fetchEducationData();
    } catch (error) {
      console.error("Error deleting education data:", error);
      setError("Failed to delete education data");
    }
  };

  const handleEditClick = (education) => {
    setNewEducation({ ...education });
    setEditEducationId(education._id);
  };

  const handleCancelEdit = () => {
    setNewEducation({
      degree: "",
      fieldofstudy: "",
      institution: "",
      startYear: "",
      endYear: "",
      cgpa: "",
    });
    setEditEducationId(null);
  };

  return (
    <EducationContainer>
      {error && <div>Error: {error}</div>}
      <EducationCard>
        <Title>{editEducationId ? "Update Education" : "Add Education"}</Title>
        <form onSubmit={handleFormSubmit}>
          <Field>
            <Label>Degree:</Label>
            <Input
              type="text"
              name="degree"
              value={newEducation.degree}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Field of Study:</Label>
            <Input
              type="text"
              name="fieldofstudy"
              value={newEducation.fieldofstudy}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Institution:</Label>
            <Input
              type="text"
              name="institution"
              value={newEducation.institution}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Start Year:</Label>
            <Input
              type="number"
              name="startYear"
              value={newEducation.startYear}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>End Year:</Label>
            <Input
              type="number"
              name="endYear"
              value={newEducation.endYear}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>CGPA:</Label>
            <Input
              type="number"
              name="cgpa"
              value={newEducation.cgpa}
              onChange={handleInputChange}
            />
          </Field>
          <ButtonContainer>
            <Button type="submit">{editEducationId ? "Update" : "Save"}</Button>
            {editEducationId && (
              <Button type="button" onClick={handleCancelEdit}>
                Cancel
              </Button>
            )}
          </ButtonContainer>
        </form>
      </EducationCard>
      {educationData.map((education) => (
        <EducationCard key={education._id}>
          <Title>{education.degree}</Title>

          <strong>Field of Study: </strong>
          {education.fieldofstudy}
          <div>
            <strong>Institution: </strong>
            {education.institution}
          </div>
          <div>
            <strong>Start Year: </strong>
            {education.startYear}
          </div>
          <div>
            <strong>End Year: </strong>
            {education.endYear}
          </div>
          <div>
            <strong>CGPA: </strong>
            {education.cgpa}
          </div>
          <ButtonContainer>
            <Button onClick={() => handleEditClick(education)}>Edit</Button>
            <Button onClick={() => handleDeleteClick(education._id)}>
              Delete
            </Button>
          </ButtonContainer>
        </EducationCard>
      ))}
    </EducationContainer>
  );
};

export default EducationManagement;
