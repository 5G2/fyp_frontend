import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import axios from "axios";
import "./TaskHeader.scss";
const TaskHeader = (props) => {
  useEffect(() => {}, []);

  const checkPriority = (value) => {
    switch (value) {
      case 1:
        return "/highest.svg";
      case 2:
        return "/high.svg";
      case 3:
        return "/medium.svg";
      case 4:
        return "/low.svg";
      case 5:
        return "/lowest.svg";
      default:
        return "/medium.svg";
    }
  };

  return (
    <div className="task-header">
      <div className="task-title">
        {props.title}
        <div className="task-id">- {props.id}</div>
      </div>
      <div className="task-basic-info-title-container">
        <div className="task-basic-info-title"> Assignee</div>
        <div className="task-basic-info-title">Project</div>
        <div className="task-basic-info-title">Due Date</div>
      </div>
      <div className="task-basic-info-data">
        <Link className="task-basic-info assignee clickable">
          <FaUserCircle size={25} className="user-svg" />
          {props.assignee}
        </Link>
        <Link className="task-basic-info clickable">{props.project}</Link>
        <div className="task-basic-info non-clickable">{props.dueDate}</div>
      </div>
      <div className="task-description-container">
        <div className="task-description-title">Description</div>
        <div className="task-description">{props.description}</div>
      </div>
    </div>
  );
};
export default TaskHeader;
