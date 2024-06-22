import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  background-color: #0f354b;
  color: #fff;
  padding: 1rem 0;
  position: fixed; /* Added */
  width: 100%; /* Added */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  margin-left: 100px;
  &:hover {
    color: #b62222;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-right: 100px;

  li {
    margin-right: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff4500;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;
    position: fixed;
    top: 50px;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: ${({ open }) => (open ? "35vh" : "0")};
    overflow-y: auto;
    flex-direction: column;
    background-color: #0f354b;
    transition: right 0.3s ease; /* Changed to right */
    z-index: 1;

    li {
      margin: 10px 0;
    }
  }
`;

const ToggleButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <StyledNavbar>
      <Container>
        <Logo>Ujjal Sonowal</Logo>
        <ToggleButton onClick={toggleNavbar}>{open ? "✕" : "☰"}</ToggleButton>
        <NavLinks open={open}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/certificate">Certifications</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </NavLinks>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
