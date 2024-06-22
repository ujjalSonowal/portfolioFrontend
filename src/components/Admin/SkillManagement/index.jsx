import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export function SkillManagement() {
  const [skills, setSkills] = useState([]);
  const [editingSkill, setEditingSkill] = useState(null);
  const [formData, setFormData] = useState({
    skill_name: "",
    level: "",
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get("http://localhost:5002/skill");
      setSkills(response.data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const handleEditClick = (skill) => {
    setEditingSkill(skill._id);
    setFormData(skill);
  };

  const handleDeleteClick = async (skillId) => {
    try {
      await axios.delete(`http://localhost:5002/skill/delete/${skillId}`);
      fetchSkills();
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingSkill) {
        await axios.patch(
          `http://localhost:5002/skill/update/${editingSkill}`,
          formData
        );
        setEditingSkill(null);
      } else {
        await axios.post("http://localhost:5002/skill/post", formData);
      }
      setFormData({
        skill_name: "",
        level: "",
      });
      fetchSkills();
    } catch (error) {
      console.error("Error saving skill:", error);
    }
  };

  return (
    <Container>
      <h1>Skill Management</h1>
      <SkillGrid>
        {skills.map((skill) => (
          <SkillCard key={skill._id}>
            <h2>{skill.skill_name}</h2>
            <p>
              <strong>Level:</strong> {skill.level}
            </p>
            <button onClick={() => handleEditClick(skill)}>Edit</button>
            <button onClick={() => handleDeleteClick(skill._id)}>Delete</button>
          </SkillCard>
        ))}
      </SkillGrid>
      <EditForm onSubmit={handleFormSubmit}>
        <h2>{editingSkill ? "Edit Skill" : "Add New Skill"}</h2>
        <label>
          Skill Name:
          <input
            type="text"
            name="skill_name"
            value={formData.skill_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Level:
          <input
            type="text"
            name="level"
            value={formData.level}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">{editingSkill ? "Update" : "Add"}</button>
        {editingSkill && (
          <button type="button" onClick={() => setEditingSkill(null)}>
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

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const SkillCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;

  h2 {
    margin: 10px 0;
  }

  p {
    margin: 10px 0;
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

  input {
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

export default SkillManagement;
