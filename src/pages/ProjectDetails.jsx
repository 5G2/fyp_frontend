import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../App";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import axios from "axios";
import NavBar from "../components/ProjectDetails/NavBar";
import DoneBlock from "../components/ProjectDetails/Summary/DoneBlock";
import UpdateBlock from "../components/ProjectDetails/Summary/UpdateBlock";
import CreateBlock from "../components/ProjectDetails/Summary/CreateBlock";
import DueBlock from "../components/ProjectDetails/Summary/DueBlock";

import Summary from "../components/ProjectDetails/Summary/Summary";
import List from "../components/ProjectDetails/List/List";
import Board from "../components/ProjectDetails/Board/Board";
import Calendar from "../components/ProjectDetails/Calendar/Calendar";
import "./ProjectDetails.scss";

const ProjectDetails = () => {
  const context = useContext(UserContext);
  let { projectDetailsPage } = useParams();
  let { id } = useParams();

  const [taskDone, setTaskDone] = useState(0);
  const [taskUpdate, setTaskUpdate] = useState(0);
  const [taskCreate, setTaskCreate] = useState(0);
  const [taskDue, setTaskDue] = useState(0);
  const renderSwitch = () => {
    switch (projectDetailsPage) {
      case "summary":
        return (
          <Summary
            taskDone={taskDone}
            taskUpdate={taskUpdate}
            taskCreate={taskCreate}
            taskDue={taskDue}
          />
        );
      case "board":
        return <Board />;
      case "list":
        return <List />;
      case "calendar":
        return <Calendar />;
      default:
        return "foo";
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="project-details-container">
      <div className="project-details-top">
        <Link className="project-link" to="/project">
          Project
        </Link>
        <MdOutlineKeyboardArrowRight className="arrow-right-svg" size={22} />
        <div className="dashboard-title">{id}</div>
      </div>
      <div className="nav-bar-container">
        <NavBar projectDetailsPage={projectDetailsPage} id={id} />
      </div>
      {renderSwitch()}
    </div>
  );
};
export default ProjectDetails;
