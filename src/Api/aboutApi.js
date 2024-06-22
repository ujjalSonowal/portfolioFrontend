import axios from "axios";

const API_URL = "http://localhost:5002";

const aboutApi = {
  // Create a new about entry
  createAbout: async (aboutData) => {
    try {
      const response = await axios.post(`${API_URL}/about`, aboutData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Get all about entries
  getAllAbout: async () => {
    try {
      const response = await axios.get(`${API_URL}/about`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Get a single about entry by ID
  getAboutById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/about/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Update an about entry by ID
  updateAbout: async (id, aboutData) => {
    try {
      const response = await axios.patch(`${API_URL}/about/${id}`, aboutData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Delete an about entry by ID
  deleteAbout: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/about/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default aboutApi;
