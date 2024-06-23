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

export const AboutManagement = () => {
  const [aboutData, setAboutData] = useState({
    lottieUrl: "",
    description: "",
    description1: "",
    skills: "",
    resume: "",
    fb: "",
    github: "",
    linkedin: "",
    twitter: "",
  });

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const response = await axios.get(
        "https://portfolioserver-7.onrender.com/about"
      );
      if (response.data.length > 0) {
        setAboutData(response.data[0]); // Assuming there's only one intro data
      }
    } catch (error) {
      console.error("Error fetching intro data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAboutData({ ...aboutData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (aboutData._id) {
        await axios.patch(
          `https://portfolioserver-7.onrender.com/about/update/${aboutData._id}`,
          aboutData
        );
      } else {
        await axios.post(
          "https://portfolioserver-7.onrender.com/about/post",
          aboutData
        );
      }
      // Refresh data after saving
      fetchAboutData();
    } catch (error) {
      console.error("Error saving intro data:", error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(
        `https://portfolioserver-7.onrender.com/about/delete/${aboutData._id}`
      );
      // Clear data after deleting
      setAboutData({
        lottieUrl: "",
        description: "",
        description1: "",
        skills: "",
        resume: "",
        fb: "",
        github: "",
        linkedin: "",
        twitter: "",
      });
    } catch (error) {
      console.error("Error deleting intro data:", error);
    }
  };

  return (
    <IntroContainer>
      <IntroCard>
        <Title>About Information</Title>
        <form onSubmit={handleFormSubmit}>
          <Field>
            <Label>Lottie Url:</Label>
            <Input
              type="text"
              name="lottieUrl"
              value={aboutData.lottieUrl}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label> Description:</Label>
            <TextArea
              type="text"
              name="description"
              value={aboutData.description}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label> Description1:</Label>
            <TextArea
              type="text"
              name=" description1"
              value={aboutData.description1}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Skills:</Label>
            <Input
              type="text"
              name="skills"
              value={aboutData.skills}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Resume link:</Label>
            <Input
              name="resume"
              value={aboutData.resume}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Facebook:</Label>
            <Input
              name="fb"
              value={aboutData.fb}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Github:</Label>
            <Input
              name="github"
              value={aboutData.github}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>LinkedIn:</Label>
            <Input
              name="linkedin"
              value={aboutData.linkedin}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Twitter:</Label>
            <Input
              name="twitter"
              value={aboutData.twitter}
              onChange={handleInputChange}
            />
          </Field>
          <ButtonContainer>
            <Button type="submit">Save</Button>
            {aboutData._id && (
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

// export default IntroManagement;
