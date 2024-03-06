import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./BoardTaskList.scss";
import BoardTask from "./BoardTask";
const OpenTaskList = (props) => {
  return (
    <div className="open-task-list">
      <div className="board-task-list-header">
        <div className="board-task-list-title open-task-title">Open</div>
        <div className="board-task-list-number">{props.taskNumber}</div>
      </div>
      <BoardTask
        id={"BBK-121"}
        taskName={"This is a new task. Make it longer, longer and longer "}
        priority={4}
        assigneeName={"Jelly Ng"}
        dueDate={"2022-12-01"}
      />
      <BoardTask
        id={"BBK-023"}
        taskName={"This is a new task"}
        priority={2}
        assigneeName={"Jelly Ng"}
        dueDate={"2022-12-01"}
      />
      <BoardTask taskName={"This is a new task"} priority={1} />
      <BoardTask taskName={"This is a new task"} priority={3} />
      <BoardTask taskName={"This is a new task"} priority={5} />
      <BoardTask taskName={"This is a new task"} priority={3} />
      <BoardTask />
    </div>
  );
};
export default OpenTaskList;
