import React, { useState, useEffect, useContext } from "react";

import "./Activity.scss";
import { FaUserCircle } from "react-icons/fa";

const Activity = (props) => {
  //   const context = useContext(UserContext);

  useEffect(() => {}, []);
  return (
    <div className="activity">
      <FaUserCircle size={35} className="people-svg" />
      <div className="activity-right">
        <div className="activity-details">
          <div className="activity-user">{props.user}</div>
          <div className="activity-action">{props.action}</div>
          <div className="activity-id">{props.id} - </div>
          <div className="activity-name">{props.name}</div>
        </div>
        <div className="activity-creation-date-time">2021-12-23</div>
      </div>
    </div>
  );
};
export default Activity;
