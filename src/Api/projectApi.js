import axios from "axios";

const API_URL = "http://localhost:5002";

const projectApi = {
  createProject: async (projectData) => {
    const response = await axios.post(`${API_URL}/project/post`, projectData);
    return response.data;
  },
  getAllProjects: async () => {
    const response = await axios.get(`${API_URL}/project`);
    return response.data;
  },
  getProjectById: async (id) => {
    const response = await axios.get(`${API_URL}/project/${id}`);
    return response.data;
  },
  updateProject: async (id, projectData) => {
    const response = await axios.patch(
      `${API_URL}/project/update/${id}`,
      projectData
    );
    return response.data;
  },
  deleteProject: async (id) => {
    const response = await axios.delete(`${API_URL}/project/delete/${id}`);
    return response.data;
  },
};

export default projectApi;
