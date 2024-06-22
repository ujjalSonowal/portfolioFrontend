import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/index";
import { Projectpage } from "./pages/Projectpage/index";
import { AboutPage } from "./pages/AboutPage/index";
import { Home } from "./pages/Dashboard/Home";
import { CertificationPage } from "./pages/HomePage/CertificationPage";
import { ProfileManage } from "./pages/Dashboard/ProfileManage";
import { ProjectManage } from "./pages/Dashboard/ProjectManage";
import { SkillManage } from "./pages/Dashboard/SkillManage.jsx";
import { Blog } from "./pages/HomePage/Blog.jsx";
import { IntroManage } from "./pages/Dashboard/IntroManage.jsx";
import { EducationManage } from "./pages/Dashboard/EducationManage.jsx";
import { ExperienceManage } from "./pages/Dashboard/ExperienceManage.jsx";
import { CertificateManage } from "./pages/Dashboard/CertificateManage.jsx";
import { AboutManage } from "./pages/Dashboard/AboutManage.jsx";
import { BlogManage } from "./pages/Dashboard/BlogManage.jsx";

// import { Reset } from "./components/Auth/Reset.jsx";

export function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<Home />} />{" "}
        <Route path="/blog" element={<Blog />} />
        <Route path="/certificate" element={<CertificationPage />} />
        <Route path="/profile" element={<ProfileManage />} />
        <Route path="/myproject" element={<ProjectManage />} />
        <Route path="/myskill" element={<SkillManage />} />
        <Route path="/myintro" element={<IntroManage />} />
        <Route path="/myeducation" element={<EducationManage />} />
        <Route path="/myexperience" element={<ExperienceManage />} />
        <Route path="/mycertificate" element={<CertificateManage />} />
        <Route path="/meabout" element={<AboutManage />} />
        <Route path="/myblog" element={<BlogManage />} />
        {/* <Route path="/reset-password/:token" element={<Reset />} /> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;
