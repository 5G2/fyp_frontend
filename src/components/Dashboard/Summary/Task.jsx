import React, { useState, useEffect, useContext } from "react";

import "./Task.scss";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";

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

const Task = (props) => {
  //   const context = useContext(UserContext);

  useEffect(() => {}, []);
  return (
    <div className="task">
      <img
        className="priority-svg"
        src={checkPriority(props.priority)}
        alt="Hour-of-Code"
        width={25}
      />
      <div className="task-right">
        <div className="task-details-info">
          <div className="task-name">{props.title}</div>
          <div className="task-detail">{props.description}</div>
        </div>
        <MdOutlineArrowRightAlt
          size={30}
          className="task-details-info-arrow-svg"
        />
      </div>
    </div>
  );
};
export default Task;
