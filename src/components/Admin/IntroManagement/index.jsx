import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const IntroContainer = styled.div`
  padding: 20px;
`;

const IntroCard = styled.div`
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

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
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

export const IntroManagement = () => {
  const [introData, setIntroData] = useState({
    welcomeText: "",
    firstname: "",
    lastname: "",
    caption: "",
    description: "",
  });

  useEffect(() => {
    fetchIntroData();
  }, []);

  const fetchIntroData = async () => {
    try {
      const response = await axios.get("http://localhost:5002/intro");
      if (response.data.length > 0) {
        setIntroData(response.data[0]); // Assuming there's only one intro data
      }
    } catch (error) {
      console.error("Error fetching intro data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIntroData({ ...introData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (introData._id) {
        await axios.patch(
          `http://localhost:5002/intro/update/${introData._id}`,
          introData
        );
      } else {
        await axios.post("http://localhost:5002/intro/post", introData);
      }
      // Refresh data after saving
      fetchIntroData();
    } catch (error) {
      console.error("Error saving intro data:", error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`http://localhost:5002/intro/delete/${introData._id}`);
      // Clear data after deleting
      setIntroData({
        welcomeText: "",
        firstname: "",
        lastname: "",
        caption: "",
        description: "",
      });
    } catch (error) {
      console.error("Error deleting intro data:", error);
    }
  };

  return (
    <IntroContainer>
      <IntroCard>
        <Title>Intro Information</Title>
        <form onSubmit={handleFormSubmit}>
          <Field>
            <Label>Welcome Text:</Label>
            <Input
              type="text"
              name="welcomeText"
              value={introData.welcomeText}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>First Name:</Label>
            <Input
              type="text"
              name="firstname"
              value={introData.firstname}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Last Name:</Label>
            <Input
              type="text"
              name="lastname"
              value={introData.lastname}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Caption:</Label>
            <Input
              type="text"
              name="caption"
              value={introData.caption}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Description:</Label>
            <TextArea
              name="description"
              value={introData.description}
              onChange={handleInputChange}
            />
          </Field>
          <ButtonContainer>
            <Button type="submit">Save</Button>
            {introData._id && (
              <Button type="button" onClick={handleDeleteClick}>
                Delete
              </Button>
            )}
          </ButtonContainer>
        </form>
      </IntroCard>
    </IntroContainer>
  );
};

export default IntroManagement;
