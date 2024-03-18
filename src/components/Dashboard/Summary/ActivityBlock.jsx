import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./ActivityBlock.scss";
import Activity from "./Activity";

const ActivityBlock = (props) => {
  // const context = useContext(UserContext);

  const [tasks, setTasks] = useState([
    {
      taskId: 1,
      user: "user1",
      userId: "ivanng",
      action: "create",
      name: "task 1",
    },
    { id: 2, user: "user2", action: "update", name: "task 1" },
    { id: 3, user: "user3", action: "comment", name: "task 1" },
    { id: 4, user: "user4", action: "create", name: "task 1" },
    { id: 1, user: "user1", action: "create", name: "task 1" },
  ]);
  return (
    <div className="activity-block">
      <div className="activity-block-title">Recent Activity</div>
      <div className="activity-block-details">
        Check out any update in your project!{" "}
        <Link className="activity-block-create-new-tasks" to="/create-task">
          Create new tasks.
        </Link>
      </div>
      <div className="this-month">This Month:</div>
      <div className="task-container">
        {tasks ? (
          tasks.map((task) => {
            return (
              <Activity
                taskId={task.taskId}
                userId={task.userId}
                user={task.user}
                action={task.action}
                name={task.name}
                date={"2022-9-7"}
              />
            );
          })
        ) : (
          <div>No updated task in this month</div>
        )}
      </div>
    </div>
  );
};
export default ActivityBlock;
