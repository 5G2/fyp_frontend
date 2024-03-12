import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./TaskListBlock.scss";
import Task from "./Task";

const TaskList = (props) => {
  //   const context = useContext(UserContext);

  useEffect(() => {}, []);

  const id = "tk-001";
  return (
    <div className="task-list">
      <div className="task-list-title">Task List</div>
      <div className="task-list-details">
        Check out your upcoming task to be complete.
      </div>
      <Link to={`/task/${id}`} className="task-link">
        <Task
          id={id}
          title={"Design Web Interface"}
          description={"UI Design, User Experience"}
          priority={1}
        />
      </Link>
      <Task
        title={"Design Web Interface"}
        description={"UI Design, User Experience"}
        priority={1}
      />
      <Task
        title={"Design Web Interface"}
        description={"UI Design, User Experience"}
        priority={3}
      />
      <Task
        title={"Design Web Interface"}
        description={"UI Design, User Experience"}
        priority={4}
      />
    </div>
  );
};
export default TaskList;
