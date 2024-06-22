import axios from "axios";

const API_URL = "http://localhost:5002";

const educationApi = {
  // Create a new education
  createEducation: async (educationData) => {
    try {
      const response = await axios.post(`${API_URL}/educations`, educationData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Get all educations
  getAllEducations: async () => {
    try {
      const response = await axios.get(`${API_URL}/educations`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Get a single education by ID
  getEducationById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/educations/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Update an education by ID
  updateEducation: async (id, educationData) => {
    try {
      const response = await axios.patch(
        `${API_URL}/educations/${id}`,
        educationData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Delete an education by ID
  deleteEducation: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/educations/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default educationApi;
