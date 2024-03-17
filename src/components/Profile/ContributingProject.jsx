import React, { useState, useEffect, useContext } from "react";

import "./ContributingProject.scss";
import { Link } from "react-router-dom";

const ContributingProject = (props) => {
  //   const context = useContext(UserContext);

  return (
    <Link
      className="contributing-project-link"
      to={`/project/${props.projectName}`}
    >
      <div className="contributing-project">
        <div className="contributing-project-title">{props.projectName}</div>
        <div className="contributing-project-pic">Lead: {props.lead}</div>
        <div className="contributing-project-pic">
          Start Date: {props.startDate}
        </div>
        <div className="contributing-project-task-container">
          <div className="contributing-project-task-info contributing-project-task-info-open">
            Open: {props.openTask}
          </div>
          <div className="contributing-project-task-info contributing-project-task-info-in-progress">
            In-Progress: {props.inProgressTask}
          </div>
          <div className="contributing-project-task-info contributing-project-task-info-done">
            Done: {props.closeTask}
          </div>
          <div className="contributing-project-task-info contributing-project-task-info-on-hold">
            On-Hold: {props.onHoldTask}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ContributingProject;
