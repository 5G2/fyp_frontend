import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import axios from "axios";
import "./TaskDetails.scss";
import { border } from "@cloudinary/url-gen/qualifiers/background";

const TaskDetails = (props) => {
  var currentValue = props.state;

  const ChangeTaskState = (value) => {
    currentValue = value;
    try {
      axios.post(
        "http://127.0.0.1:8000/api/modifyTask/",
        {
          task_id: props.task_id,
          state: value,
        },
        {
          headers: { Authorization: `JWT ${localStorage.getItem("access")}` },
        }
      );
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };
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
    <div className="task-details">
      <div className="task-details-item-container first-container">
        <div className="tast-person-title">Creator:</div>
        <div className="tast-person">
          <FaUserCircle size={25} className="people-svg" />
          <div className="tast-person-username">{props.creatorName}</div>
        </div>
      </div>
      <div className="task-details-item-container">
        <div className="tast-person-title">Reportor:</div>
        <div className="tast-person">
          <FaUserCircle size={25} className="people-svg" />
          <div className="tast-person-username">{props.reportor}</div>
        </div>
      </div>
      <div className="task-details-item-container">
        <div className="tast-person-title">Assignee:</div>
        <div className="tast-person">
          <FaUserCircle size={25} className="people-svg" />
          <div className="tast-person-username">{props.assignee}</div>
        </div>
      </div>
      <div className="task-details-item-container">
        <div className="tast-person-title">Status:</div>
        <select
          // defaultValue={props.state}
          value={currentValue}
          className="status-selector"
          onChange={(e) => ChangeTaskState(e.target.value)}
        >
          <option value={1}>Open</option>
          <option value={2}>In Progress</option>
          <option value={3}>Closed</option>
          <option value={4}>On Hold</option>
        </select>
      </div>
      <div className="task-details-item-container">
        <div className="tast-person-title">Prioriy:</div>
        <div className="tast-person">
          <img
            className="task-priority-svg"
            src={checkPriority(props.priority)}
            alt="Hour-of-Code"
            width={25}
          />
        </div>
      </div>
      <div className="task-details-item-container">
        <div className="tast-person-title">Task Creation Date:</div>
        <div className="tast-date">{props.creationDate}</div>
      </div>
      <div className="task-details-item-container">
        <div className="tast-person-title">Start Date:</div>
        <div className="tast-date">{props.startDate}</div>
      </div>
    </div>
  );
};
export default TaskDetails;
