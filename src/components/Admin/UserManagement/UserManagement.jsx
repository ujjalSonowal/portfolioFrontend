import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    pincode: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);
  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const projectResponse = await axios.get(
  //           "http://localhost:5002/certificates"
  //         );
  //         setCertificate(projectResponse.data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     }

  //     fetchData();
  //   }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5002/user");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user._id);
    setFormData(user);
  };

  const handleDeleteClick = async (userId) => {
    try {
      await axios.delete(`http://localhost:5002/user/delete/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5002/user/update/${editingUser}`,
        formData
      );
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Container>
      <h1>User Management</h1>
      <UserTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.pincode}</td>
              <td>
                <button onClick={() => handleEditClick(user)}>Edit</button>
                <button onClick={() => handleDeleteClick(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </UserTable>
      {editingUser && (
        <EditForm onSubmit={handleFormSubmit}>
          <h2>Edit User</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Pincode:
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Update</button>
          <button type="button" onClick={() => setEditingUser(null)}>
            Cancel
          </button>
        </EditForm>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  button {
    margin-right: 10px;
  }
`;

const EditForm = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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

export default UserManagement;
