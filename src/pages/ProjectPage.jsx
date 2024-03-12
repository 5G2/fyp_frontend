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

      <div className="project-section">
        <div className="project-section-title">In - Progress</div>
        <div className="projects-container">
          <Project
            title={"A new project"}
            teamsize={18}
            taskCompletePercentage={49}
            projectProgress={12}
            openTask={240}
            inProgress={240}
            onHoldTask={240}
            id={"PJ-981"}
          />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      <br />
      <br />
      <div className="project-section">
        <div className="project-section-title">Completed</div>
        <div className="projects-container">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
