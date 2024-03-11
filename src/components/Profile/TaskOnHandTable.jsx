import React, { useState, useEffect, useContext } from "react";
import "./TaskOnHandTable.scss";
import OnHandTask from "./OnHandTask";
const TaskOnHandTable = () => {
  return (
    <div className="task-on-hand-table">
      <div className="task-title">Task</div>

      <OnHandTask
        title={"This is a new task"}
        project={"IEEE xtreme coding comepetion"}
        dueDate={"2024-1-24"}
        priority={1}
      />
      <OnHandTask
        title={"This is a new task"}
        project={"IEEE xtreme coding comepetion"}
        dueDate={"2024-1-24"}
        priority={1}
      />
      <OnHandTask
        title={"This is a new task"}
        project={"IEEE xtreme coding comepetion"}
        dueDate={"2024-1-24"}
        priority={2}
      />
      <OnHandTask
        title={"This is a new task"}
        project={"IEEE xtreme coding comepetion"}
        dueDate={"2024-1-24"}
        priority={3}
      />
      <OnHandTask
        title={"This is a new task"}
        project={"IEEE xtreme coding comepetion"}
        dueDate={"2024-1-24"}
        priority={5}
      />
    </div>
  );
};
export default TaskOnHandTable;
