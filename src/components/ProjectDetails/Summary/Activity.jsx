import React, { useState, useEffect, useContext } from "react";

import "./Activity.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Activity = (props) => {
  //   const context = useContext(UserContext);

  useEffect(() => {}, []);
  return (
    <div className="activity">
      <FaUserCircle size={35} className="people-svg" />
      <div className="activity-right">
        <div className="activity-details">
          <Link className="activity-user" to={`/profile/${props.userId}`}>
            {props.user}
          </Link>
          <div className="activity-action">{props.action}</div>
          <Link className="activity-link-to-task" to={`/task/${props.taskId}`}>
            <div className="activity-id">{props.taskId} - </div>
            <div className="activity-name">{props.name}</div>
          </Link>
        </div>
        <div className="activity-creation-date-time">{props.date}</div>
      </div>
    </div>
  );
};
export default Activity;
