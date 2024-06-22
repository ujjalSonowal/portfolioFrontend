import axios from "axios";

const API_URL = "http://localhost:5002";

const userApi = {
  createUser: async (userData) => {
    const response = await axios.post(`${API_URL}/user/adduser`, userData);
    return response.data;
  },
  getAllUsers: async () => {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
  },
  getUserById: async (id) => {
    const response = await axios.get(`${API_URL}/user/${id}`);
    return response.data;
  },
  updateUser: async (id, userData) => {
    const response = await axios.patch(
      `${API_URL}/user/update/${id}`,
      userData
    );
    return response.data;
  },
  deleteUser: async (id) => {
    const response = await axios.delete(`${API_URL}/user/delete/${id}`);
    return response.data;
  },
};

export default userApi;
