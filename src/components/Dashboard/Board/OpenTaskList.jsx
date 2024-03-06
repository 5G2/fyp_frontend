import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./BoardTaskList.scss";
const OpenTaskList = (props) => {
  return (
    <div className="open-task-list">
      <div className="board-task-list-header">
        <div className="board-task-list-title open-task-title">Open</div>
        <div className="board-task-list-number">{props.taskNumber}</div>
      </div>
    </div>
  );
};
export default OpenTaskList;
