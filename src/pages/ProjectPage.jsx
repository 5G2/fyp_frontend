import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Button } from "@mui/material";
import { IoIosAdd } from "react-icons/io";
import Project from "../components/ProjectPage/Project";
import "./ProjectPage.scss";
const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getProjects/?user_id=${localStorage.getItem(
            "user_id"
          )}`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks(); // Invoke the fetchData function
  }, []);
  return (
    <div className="project-page">
      <div className="project-page-title">Your Projects</div>
      <input className="project-page-search" placeholder="Search project" />
      <Link to="/create-project">
        <Button className="create-project-btn">
          <IoIosAdd size={26} />
          Add new
        </Button>
      </Link>

      <div className="project-section">
        <div className="project-section-title">In - Progress</div>
        <div className="projects-container">
          {projects
            // .filter((project) => project.state === 0)
            .map((project) => {
              // console.log(new Date(project.start_date));
              return (
                <Project
                  title={project.name}
                  teamsize={project.teamsize}
                  taskCompletePercentage={(
                    (project.done_task / project.total_task) *
                    100
                  ).toFixed(0)}
                  projectProgress={(
                    ((new Date() - new Date(project.start_date)) /
                      (new Date(project.due_date) -
                        new Date(project.start_date))) *
                    100
                  ).toFixed(0)}
                  openTask={project.open_task}
                  inProgress={project.in_progress_task}
                  onHoldTask={project.on_hold_task}
                  code={project.code}
                />
              );
            })}
        </div>
      </div>
      <br />
      <br />
      <div className="project-section">
        <div className="project-section-title">Completed</div>
        <div className="projects-container">
          {projects
            .filter((project) => project.state === 1)
            .map((project) => {
              // console.log(new Date(project.start_date));
              return (
                <Project
                  title={project.name}
                  teamsize={project.teamsize}
                  taskCompletePercentage={(
                    (project.done_task / project.total_task) *
                    100
                  ).toFixed(0)}
                  projectProgress={(
                    ((new Date() - new Date(project.start_date)) /
                      (new Date(project.due_date) -
                        new Date(project.start_date))) *
                    100
                  ).toFixed(0)}
                  openTask={project.open_task}
                  inProgress={project.in_progress_task}
                  onHoldTask={project.on_hold_task}
                  id={project.code}
                />
              );
            })}{" "}
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
