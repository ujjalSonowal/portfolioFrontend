import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const CertificateContainer = styled.div`
  padding: 20px;
`;

const CertificateCard = styled.div`
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

export function CertificateManagement() {
  const [certificates, setCertificates] = useState([]);
  const [newCertificate, setNewCertificate] = useState({
    title: "",
    image: "",
    link: "",
    duration: "",
    description: "",
  });
  const [editCertificateId, setEditCertificateId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCertificateData();
  }, []);

  const fetchCertificateData = async () => {
    try {
      const response = await axios.get("http://localhost:5002/certificates");
      setCertificates(response.data);
    } catch (error) {
      console.error("Error fetching certificate data:", error);
      setError("Failed to fetch certificate data");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCertificate({ ...newCertificate, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editCertificateId) {
        await axios.patch(
          `http://localhost:5002/certificates/update/${editCertificateId}`,
          newCertificate
        );
        setEditCertificateId(null);
      } else {
        await axios.post(
          "http://localhost:5002/certificates/post",
          newCertificate
        );
      }
      fetchCertificateData();
      setNewCertificate({
        title: "",
        image: "",
        link: "",
        duration: "",
        description: "",
      });
    } catch (error) {
      console.error("Error saving certificate data:", error);
      setError("Failed to save certificate data");
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/certificates/delete/${id}`);
      fetchCertificateData();
    } catch (error) {
      console.error("Error deleting certificate data:", error);
      setError("Failed to delete certificate data");
    }
  };

  const handleEditClick = (id) => {
    setEditCertificateId(id);
    const certificateToEdit = certificates.find((cert) => cert._id === id);
    setNewCertificate({
      title: certificateToEdit.title,
      image: certificateToEdit.image,
      link: certificateToEdit.link,
      duration: certificateToEdit.duration,
      description: certificateToEdit.description,
    });
  };

  return (
    <CertificateContainer>
      {error && <div>Error: {error}</div>}
      <CertificateCard>
        <Title>Certificate Information</Title>
        <form onSubmit={handleFormSubmit}>
          <Field>
            <Label>Title:</Label>
            <Input
              type="text"
              name="title"
              value={newCertificate.title}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Image URL:</Label>
            <Input
              type="text"
              name="image"
              value={newCertificate.image}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Link:</Label>
            <Input
              type="text"
              name="link"
              value={newCertificate.link}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Duration:</Label>
            <Input
              type="text"
              name="duration"
              value={newCertificate.duration}
              onChange={handleInputChange}
            />
          </Field>
          <Field>
            <Label>Description:</Label>
            <Input
              type="text"
              name="description"
              value={newCertificate.description}
              onChange={handleInputChange}
            />
          </Field>
          <ButtonContainer>
            <Button type="submit">
              {editCertificateId ? "Update" : "Save"}
            </Button>
          </ButtonContainer>
        </form>
      </CertificateCard>
      {certificates.map((certificate) => (
        <CertificateCard key={certificate._id}>
          <Title>{certificate.title}</Title>
          <div>
            <strong>Link: </strong>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {certificate.link}
            </a>
          </div>
          <div>
            <strong>Duration: </strong>
            {certificate.duration}
          </div>
          <div>
            <strong>Description: </strong>
            {certificate.description}
          </div>
          <ButtonContainer>
            <Button onClick={() => handleEditClick(certificate._id)}>
              Edit
            </Button>
            <Button onClick={() => handleDeleteClick(certificate._id)}>
              Delete
            </Button>
          </ButtonContainer>
        </CertificateCard>
      ))}
    </CertificateContainer>
  );
}
