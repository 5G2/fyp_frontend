import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./BoardTaskList.scss";
const OnHoldTaskList = (props) => {
  return (
    <div className="open-task-list">
      <div className="board-task-list-header">
        <div className="board-task-list-title on-hold-task-title">On Hold</div>
        <div className="board-task-list-number">{props.openTaskNumber}</div>
      </div>
    </div>
  );
};
export default OnHoldTaskList;
