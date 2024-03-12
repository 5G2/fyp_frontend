import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./CalendarEventPopUp.scss";
const CalendarEventPopUp = (props) => {
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
  const checkStatus = (value) => {
    switch (value) {
      case "Open":
        return "list-table-item-status-open";
      case "In-Progress":
        return "list-table-item-status-in-progress";
      case "Done":
        return "list-table-item-status-done";
      case "On-Hold":
        return "list-table-item-status-on-hold";
    }
  };
  return (
    <div className="calendar-event-pop-up">
      <div className="task-details-item-container first-container">
        <div className="tast-details-item-title">Task ID:</div>
        <Link className="tast-details-item-id" to={`/task/${props.taskID}`}>
          {props.taskID}
        </Link>
      </div>
      <div className="task-details-item-container">
        <div className="tast-details-item-title">Creator:</div>
        <div className="tast-person">
          <FaUserCircle size={25} className="people-svg" />
          <div className="tast-person-username">{props.creator}</div>
        </div>
      </div>
      <div className="task-details-item-container">
        <div className="tast-details-item-title">Reportor:</div>
        <div className="tast-person">
          <FaUserCircle size={25} className="people-svg" />
          <div className="tast-person-username">{props.reportor}</div>
        </div>
      </div>
      <div className="task-details-item-container">
        <div className="tast-details-item-title">Assignee:</div>
        <div className="tast-person">
          <FaUserCircle size={25} className="people-svg" />
          <div className="tast-person-username">{props.assignee}</div>
        </div>
      </div>
      <div className="task-details-item-container">
        <div className="tast-details-item-title">Status:</div>
        <div
          className={"tast-details-item-status " + checkStatus(props.status)}
        >
          {props.status}
        </div>
      </div>
      <div className="task-details-item-container">
        <div className="tast-details-item-title">Prioriy:</div>
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
        <div className="tast-details-item-title">Creation Date:</div>
        <div className="tast-date">{props.creationDate}</div>
      </div>
      <div className="task-details-item-container">
        <div className="tast-details-item-title">Start Date:</div>
        <div className="tast-date">{props.startDate}</div>
      </div>
    </div>
  );
};
export default CalendarEventPopUp;
