import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Button } from "@mui/material";
import { IoIosAdd } from "react-icons/io";
import Project from "../components/ProjectPage/Project";
import "./ProjectPage.scss";
const ProjectPage = () => {
  useEffect(() => {}, []);
  return (
    <div className="project-page">
      <div className="project-page-title">Your Projects</div>
      <input className="project-page-search" placeholder="Search project" />
      <Button className="create-project-btn">
        <IoIosAdd size={26} />
        Add new
      </Button>

      <div className="in-progress-project-section">
        <div className="in-progress-project-title">In - Progress</div>
        <div className="in-progress-projects-container">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
