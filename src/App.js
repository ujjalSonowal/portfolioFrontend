import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/index";
import AllRouter from "./AllRoutes";
import { Login } from "./pages/AuthPage/Login";
// import "./App.css";

function App() {
  const location = useLocation();

  // List of routes where the navbar should be hidden
  const routesWithoutNavbar = [
    "/login",
    "/home",
    "/myproject",
    "/profile",
    "/myskill",
    "/myintro",
    "/myeducation",
    "/myexperience",
    "/mycertificate",
    "/meabout",
    "/myblog",
    "/forgotpassword",
  ];

  // Check if the current route is in the list of routes without navbar
  const hideNavbar = routesWithoutNavbar.includes(location.pathname);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />{" "}
      </Routes>{" "}
      <header className="App-header">
        {" "}
        {!hideNavbar && (
          <Navbar />
        )} {/* Render navbar if hideNavbar is false */}{" "}
        <div className="main">
          <AllRouter />
        </div>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
