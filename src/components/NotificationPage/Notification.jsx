import React, { useState, useEffect, useContext } from "react";

import "./Notification.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notification = (props) => {
  //   const context = useContext(UserContext);

  useEffect(() => {}, []);
  return (
    <div className="notification">
      <div className="notificaiton-main-msg">
        <FaUserCircle size={35} className="people-svg" />
        <div className="notification-right">
          <div className="notification-details">
            <Link className="notification-user" to={`/profile/${props.userId}`}>
              {props.user}
            </Link>
            <div className="notification-action">{props.action}</div>
            <Link
              className="notification-link-to-task"
              to={`/task/${props.taskId}`}
            >
              <div className="notification-id">{props.taskId} - </div>
              <div className="notification-name">{props.name}</div>
            </Link>
          </div>
          <div className="notification-creation-date-time">{props.date}</div>
        </div>
      </div>
      {props.comment ? (
        <div className="comment-on-task">{props.comment}</div>
      ) : null}
    </div>
  );
};
export default Notification;
