import axios from "axios";

const API_URL = "http://localhost:5002";

const introApi = {
  createIntro: async (introData) => {
    const response = await axios.post(`${API_URL}/intro/post`, introData);
    return response.data;
  },
  getAllIntro: async () => {
    const response = await axios.get(`${API_URL}/intro`);
    return response.data;
  },
  getIntroById: async (id) => {
    const response = await axios.get(`${API_URL}/intro/${id}`);
    return response.data;
  },
  updateIntro: async (id, introData) => {
    const response = await axios.patch(
      `${API_URL}/intro/update/${id}`,
      introData
    );
    return response.data;
  },
  deleteIntro: async (id) => {
    const response = await axios.delete(`${API_URL}/intro/delete/${id}`);
    return response.data;
  },
};

export default introApi;
