import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  margin: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: calc(33.33% - 20px);
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });
  const [updateMode, setUpdateMode] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://portfolioserver-7.onrender.com/blog"
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (updateMode) {
        await axios.patch(
          `https://portfolioserver-7.onrender.com/blog/update/${selectedBlogId}`,
          formData
        );
        setUpdateMode(false);
        setSelectedBlogId(null);
      } else {
        await axios.post(
          "https://portfolioserver-7.onrender.com/blog/post",
          formData
        );
      }
      setFormData({ name: "", description: "", image: "" });
      fetchData(); // Refresh blogs after adding or updating
    } catch (error) {
      console.error("Error adding/updating blog: ", error);
    }
  };

  const handleUpdate = (id) => {
    const selectedBlog = blogs.find((blog) => blog._id === id);
    setFormData({
      name: selectedBlog.name,
      description: selectedBlog.description,
    });
    setUpdateMode(true);
    setSelectedBlogId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://portfolioserver-7.onrender.com/blog/delete/${id}`
      );
      fetchData(); // Refresh blogs after deletion
    } catch (error) {
      console.error("Error deleting blog: ", error);
    }
  };

  return (
    <Container>
      <h2>Blog Management</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <TextArea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        {!updateMode && (
          <Input
            type="file"
            name="image"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
          />
        )}
        <Button type="submit">{updateMode ? "Update Blog" : "Add Blog"}</Button>
      </Form>
      <CardContainer>
        {blogs.map((blog) => (
          <Card key={blog._id}>
            <h3>{blog.name}</h3>
            <p>{blog.description}</p>
            <img src={blog.image} alt="Blog" />
            <CombineBtn>
              <Button onClick={() => handleUpdate(blog._id)}>Update</Button>
              <Button onClick={() => handleDelete(blog._id)}>Delete</Button>
            </CombineBtn>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

const CombineBtn = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
`;
