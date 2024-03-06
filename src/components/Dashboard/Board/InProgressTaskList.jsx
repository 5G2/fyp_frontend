import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./BoardTaskList.scss";
const InProgressTaskList = (props) => {
  return (
    <div className="open-task-list">
      <div className="board-task-list-header">
        <div className="board-task-list-title in-progress-task-title">
          In Progress
        </div>
        <div className="board-task-list-number">{props.openTaskNumber}</div>
      </div>
    </div>
  );
};
export default InProgressTaskList;
