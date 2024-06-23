import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export function ProjectManagement() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    technologies: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "https://portfolioserver-7.onrender.com/project"
      );
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleEditClick = (project) => {
    setEditingProject(project._id);
    setFormData(project);
  };

  const handleDeleteClick = async (projectId) => {
    try {
      await axios.delete(
        `https://portfolioserver-7.onrender.com/project/delete/${projectId}`
      );
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProject) {
        await axios.patch(
          `https://portfolioserver-7.onrender.com/project/update/${editingProject}`,
          formData
        );
        setEditingProject(null);
      } else {
        await axios.post(
          "https://portfolioserver-7.onrender.com/project/post",
          formData
        );
      }
      setFormData({
        title: "",
        description: "",
        image: "",
        link: "",
        technologies: "",
      });
      fetchProjects();
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  return (
    <Container>
      <h1>Project Management</h1>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project._id}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <button onClick={() => handleEditClick(project)}>Edit</button>
            <button onClick={() => handleDeleteClick(project._id)}>
              Delete
            </button>
          </ProjectCard>
        ))}
      </ProjectGrid>
      <EditForm onSubmit={handleFormSubmit}>
        <h2>{editingProject ? "Edit Project" : "Add New Project"}</h2>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Project Link:
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Technologies:
          <input
            type="text"
            name="technologies"
            value={formData.technologies}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">{editingProject ? "Update" : "Add"}</button>
        {editingProject && (
          <button type="button" onClick={() => setEditingProject(null)}>
            Cancel
          </button>
        )}
      </EditForm>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  h2 {
    margin: 10px 0;
  }

  p {
    margin: 10px 0;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  button {
    margin: 10px 5px;
  }
`;

const EditForm = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  h2 {
    margin-top: 0;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    margin-right: 10px;
  }
`;

export default ProjectManagement;
