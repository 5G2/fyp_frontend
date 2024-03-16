import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./BoardTaskList.scss";
import BoardTask from "./BoardTask";
const InProgressTaskList = (props) => {
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
        setTasks(response.data.filter((task) => task.state === 2));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks(); // Invoke the fetchData function
  }, []);
  return (
    <div className="open-task-list">
      <div className="board-task-list-header">
        <div className="board-task-list-title in-progress-task-title">
          In Progress
        </div>
        <div className="board-task-list-number">{tasks.length}</div>
      </div>

      {tasks.map((task) => {
        return (
          <BoardTask
            id={task.id}
            code={task.code}
            taskName={task.title}
            priority={task.priority}
            assigneeName={task.assignee}
            dueDate={task.due_date}
          />
        );
      })}
    </div>
  );
};
export default InProgressTaskList;
