import axios from "axios";

const API_URL = "http://localhost:5002";

const skillApi = {
  // Create a new skill
  createSkill: async (skillData) => {
    try {
      const response = await axios.post(`${API_URL}/skills`, skillData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Get all skills
  getAllSkills: async () => {
    try {
      const response = await axios.get(`${API_URL}/skills`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Get a single skill by ID
  getSkillById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/skills/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Update a skill by ID
  updateSkill: async (id, skillData) => {
    try {
      const response = await axios.patch(`${API_URL}/skills/${id}`, skillData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Delete a skill by ID
  deleteSkill: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/skills/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default skillApi;
