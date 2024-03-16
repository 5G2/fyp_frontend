import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./BoardTask.scss";
const BoardTask = (props) => {
  const checkPriorityBGColor = () => {
    switch (props.priority) {
      case 1:
        return "highest-priority-bg";
      case 2:
        return "high-priority-bg";
      case 3:
        return "meidum-priority-bg";
      case 4:
        return "low-priority-bg";
      case 5:
        return "lowest-priority-bg";
      default:
        return "meidum-priority-bg";
    }
  };
  const checkPrioritySVG = () => {
    switch (props.priority) {
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
    <Link className="board-task-link" to={`/task/${props.code}`}>
      <div className={"board-task " + checkPriorityBGColor(1)}>
        <div className="board-task-id"> {props.id}</div>
        <div className="board-task-name">{props.taskName}</div>
        <div className="board-task-details">Assignee: {props.assigneeName}</div>
        <div className="board-task-details">Due Date: {props.dueDate}</div>
      </div>
    </Link>
  );
};
export default BoardTask;
