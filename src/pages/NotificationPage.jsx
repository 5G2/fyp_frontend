import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import "./NotificationPage.scss";
import Notification from "../components/NotificationPage/Notification";
const NotificationPage = () => {
  let { page } = useParams();
  const [filterState, setFilterState] = useState(1);
  const [tasks, setTasks] = useState([]);
  const changeFilter = (value) => {
    setFilterState(value);
  };

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
        let task_data = response.data;
        switch (page) {
          case "create":
            task_data = response.data.filter(
              (task) => task.action === "create"
            );
            break;
          case "comment":
            task_data = response.data.filter(
              (task) => task.action === "comment"
            );
            break;
          case "state":
            task_data = response.data.filter(
              (task) => task.action === "change state of"
            );
            break;
        }
        setTasks(task_data);
        console.log(task_data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks(); // Invoke the fetchData function
  }, [filterState]);

  return (
    <div className="notification-page">
      <div className="notification-title">Notifications</div>
      <div className="filter-list">
        <Link
          to="/notification"
          className={`filter-list-item ${
            filterState == 1 ? "filter-list-item-active" : ""
          }`}
          onClick={() => changeFilter(1)}
        >
          All
        </Link>
        <Link
          to="/notification/create"
          className={`filter-list-item ${
            filterState == 2 ? "filter-list-item-active" : ""
          }`}
          onClick={() => changeFilter(2)}
        >
          Create
        </Link>
        <Link
          to="/notification/comment"
          className={`filter-list-item ${
            filterState == 3 ? "filter-list-item-active" : ""
          }`}
          onClick={() => changeFilter(3)}
        >
          Comment
        </Link>
        <Link
          to="/notification/state"
          className={`filter-list-item ${
            filterState == 4 ? "filter-list-item-active" : ""
          }`}
          onClick={() => changeFilter(4)}
        >
          Status
        </Link>
      </div>
      {tasks.map((task) => {
        return (
          <Notification
            user={task.user}
            action={task.action}
            taskId={task.taskId}
            name={task.name}
            date={task.create_at}
            comment={task.message}
          />
        );
      })}
    </div>
  );
};
export default NotificationPage;
