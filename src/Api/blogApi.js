import axios from "axios";

const API_URL = "http://localhost:5002";

const blogApi = {
  // Create a new blog
  createBlog: async (blogData) => {
    try {
      const response = await axios.post(`${API_URL}/blogs`, blogData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Get all blogs
  getAllBlogs: async () => {
    try {
      const response = await axios.get(`${API_URL}/blogs`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Get a single blog by ID
  getBlogById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/blogs/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Update a blog by ID
  updateBlog: async (id, blogData) => {
    try {
      const response = await axios.patch(`${API_URL}/blogs/${id}`, blogData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Delete a blog by ID
  deleteBlog: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/blogs/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default blogApi;
