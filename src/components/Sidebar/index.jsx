import React, { useState } from "react";
import styled from "styled-components";
import {
  FaUser,
  FaProjectDiagram,
  FaBlogger,
  FaTools,
  FaBook,
  FaBriefcase,
  FaHome,
  FaCertificate,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const SidebarContainer = styled.div`
  width: ${(props) =>
    props.isOpen ? "250px" : "60px"}; /* Adjust width based on isOpen state */
  height: 100%;
  background-color: #333; /* Sidebar background color */
  color: #fff; /* Text color */
  padding-top: 20px;
  transition: width 0.3s ease; /* Smooth transition for width change */
  position: relative;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: ${(props) =>
    props.isOpen
      ? "-40px"
      : "-40px"}; /* Adjust position based on isOpen state */
  background-color: #333;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
`;

const SidebarTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  display: ${(props) =>
    props.isOpen ? "block" : "none"}; /* Hide title when sidebar is closed */
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarMenuItem = styled.li`
  display: flex;
  align-items: center; /* Center the items vertically */
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555; /* Darker background color on hover */
  }
`;

const SidebarIcon = styled.span`
  margin-right: ${(props) =>
    props.isOpen ? "10px" : "0"}; /* Adjust margin based on isOpen state */
`;

const SidebarLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: ${(props) =>
    props.isOpen
      ? "block"
      : "none"}; /* Hide link text when sidebar is closed */

  &.active {
    font-weight: bold; /* Style for active link */
  }
`;

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar open/close status
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("User");
    navigate("/login");
    window.location.reload();
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton isOpen={isOpen} onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </ToggleButton>
      <SidebarTitle isOpen={isOpen}>Admin Dashboard</SidebarTitle>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarIcon isOpen={isOpen}>
            <FaUser />
          </SidebarIcon>
          <SidebarLink to="/profile" isOpen={isOpen}>
            Manage Profile
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarIcon isOpen={isOpen}>
            <FaProjectDiagram />
          </SidebarIcon>
          <SidebarLink to="/myproject" isOpen={isOpen}>
            Manage Project
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarIcon isOpen={isOpen}>
            <FaBlogger />
          </SidebarIcon>
          <SidebarLink to="/myblog" isOpen={isOpen}>
            Manage Blog
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarIcon isOpen={isOpen}>
            <FaTools />
          </SidebarIcon>
          <SidebarLink to="/myskill" isOpen={isOpen}>
            Manage Skill
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarIcon isOpen={isOpen}>
            <FaBook />
          </SidebarIcon>
          <SidebarLink to="/myeducation" isOpen={isOpen}>
            Manage Education
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarIcon isOpen={isOpen}>
            <FaBriefcase />
          </SidebarIcon>
          <SidebarLink to="/myexperience" isOpen={isOpen}>
            Manage Experience
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarIcon isOpen={isOpen}>
            <FaHome />
          </SidebarIcon>
          <SidebarLink to="/myintro" isOpen={isOpen}>
            Manage Intro
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarIcon isOpen={isOpen}>
            <FaCertificate />
          </SidebarIcon>
          <SidebarLink to="/mycertificate" isOpen={isOpen}>
            Manage Certificate
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarIcon isOpen={isOpen}>
            <FaInfoCircle />
          </SidebarIcon>
          <SidebarLink to="/meabout" isOpen={isOpen}>
            Manage About
          </SidebarLink>
        </SidebarMenuItem>
        <SidebarMenuItem onClick={handleLogout}>
          <SidebarIcon isOpen={isOpen}>
            <FaProjectDiagram />
          </SidebarIcon>
          <SidebarLink as="div" isOpen={isOpen}>
            Logout
          </SidebarLink>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
