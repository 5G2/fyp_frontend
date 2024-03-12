import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./BoardTaskList.scss";
import BoardTask from "./BoardTask";
const OnHoldTaskList = (props) => {
  return (
    <div className="open-task-list">
      <div className="board-task-list-header">
        <div className="board-task-list-title on-hold-task-title">On Hold</div>
        <div className="board-task-list-number">{props.taskNumber}</div>
      </div>
      <BoardTask
        id={"BBK-121"}
        taskName={"This is a new task. Make it longer, longer and longer "}
        priority={4}
        assigneeName={"Jelly Ng"}
        dueDate={"2022-12-01"}
      />
    </div>
  );
};
export default OnHoldTaskList;
