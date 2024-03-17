import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

import "./ContributingProjectTable.scss";
import ContributingProject from "./ContributingProject";
const ContributingProjectTable = (props) => {
  //   const context = useContext(UserContext);
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
    <div className="contributing-project-table">
      <div className="contributing-project-table-title">Project</div>
      <div className="contributing-project-container">
        {projects.map((project) => {
          return (
            <ContributingProject
              projectName={project.name}
              lead={project.pic}
              startDate={project.start_date}
              openTask={project.open_task}
              closeTask={project.done_task}
              inProgressTask={project.in_progress_task}
              onHoldTask={project.on_hold_task}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ContributingProjectTable;
