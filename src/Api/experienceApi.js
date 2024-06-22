import axios from "axios";

const API_URL = "http://localhost:5002";

const experienceApi = {
  // Create a new experience
  createExperience: async (experienceData) => {
    try {
      const response = await axios.post(
        `${API_URL}/experiences`,
        experienceData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Get all experiences
  getAllExperiences: async () => {
    try {
      const response = await axios.get(`${API_URL}/experiences`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Get a single experience by ID
  getExperienceById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/experiences/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Update an experience by ID
  updateExperience: async (id, experienceData) => {
    try {
      const response = await axios.patch(
        `${API_URL}/experiences/${id}`,
        experienceData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Delete an experience by ID
  deleteExperience: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/experiences/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default experienceApi;
