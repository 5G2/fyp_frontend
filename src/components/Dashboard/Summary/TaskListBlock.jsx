import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./TaskListBlock.scss";
import Task from "./Task";

const TaskListBlock = (props) => {
  //   const context = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getTasks/?user_id=${localStorage.getItem(
            "user_id"
          )}`,
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

  const id = "tk-001";
  return (
    <div className="summary-task-list">
      <div className="summary-task-list-title">Task List</div>
      <div className="summary-task-list-details">
        Check out your upcoming task to be complete.
      </div>
      {tasks.slice(0, 4).map((task) => {
        return (
          <Link to={`/task/${task.code}`} className="summary-task-link">
            <Task
              id={task.id}
              title={task.title}
              description={task.description}
              priority={task.priority}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default TaskListBlock;
