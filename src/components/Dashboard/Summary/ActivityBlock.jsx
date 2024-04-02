import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ActivityBlock.scss";
import Activity from "./Activity";

const ActivityBlock = (props) => {
  // const context = useContext(UserContext);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getEvent/`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks(); // Invoke the fetchData function
  }, []);
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
          tasks.slice(0, 5).map((task) => {
            return (
              <Activity
                taskId={task.taskId}
                userId={task.userId}
                user={task.user}
                action={task.action}
                name={task.name}
                date={task.create_at}
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
