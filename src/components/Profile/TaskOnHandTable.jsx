import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./TaskOnHandTable.scss";
import OnHandTask from "./OnHandTask";
const TaskOnHandTable = () => {
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
  return (
    <div className="task-on-hand-table">
      <div className="task-title">Task</div>
      {tasks.slice(0, 5).map((task) => {
        return (
          <OnHandTask
            title={task.title}
            project={task.project_name}
            dueDate={task.due_date}
            priority={task.priority}
          />
        );
      })}
    </div>
  );
};
export default TaskOnHandTable;
