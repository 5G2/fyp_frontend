import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../App";

import axios from "axios";
import NavBar from "../components/Dashboard/NavBar";
import DoneBlock from "../components/Dashboard/Summary/DoneBlock";
import UpdateBlock from "../components/Dashboard/Summary/UpdateBlock";
import CreateBlock from "../components/Dashboard/Summary/CreateBlock";
import DueBlock from "../components/Dashboard/Summary/DueBlock";

import "./Dashboard.scss";
import Summary from "../components/Dashboard/Summary/Summary";
import List from "../components/Dashboard/List/List";
import Board from "../components/Dashboard/Board/Board";
import Calendar from "../components/Dashboard/Calendar/Calendar";

const Dashboard = () => {
  const context = useContext(UserContext);
  let { dashboardPage } = useParams();

  const [taskDone, setTaskDone] = useState(0);
  const [taskUpdate, setTaskUpdate] = useState(0);
  const [taskCreate, setTaskCreate] = useState(0);
  const [taskDue, setTaskDue] = useState(0);
  const renderSwitch = () => {
    switch (dashboardPage) {
      case "summary":
        return (
          <Summary
            taskDone={taskDone}
            taskUpdate={taskUpdate}
            taskCreate={taskCreate}
            taskDue={taskDue}
          />
        );
      case "board":
        return <Board />;
      case "list":
        return <List />;
      case "calendar":
        return <Calendar />;
      default:
        return "foo";
    }
  };
  useEffect(() => {
    const fetchSevenDaysTasksNumber = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/getSevenDaysTasksNumber/",
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setTaskDone(response.data.number_of_done_task);
        setTaskUpdate(response.data.number_of_updated_tasks);
        setTaskCreate(response.data.number_of_create_task);
        setTaskDue(response.data.number_of_due_tasks);
        // Process the response data here
      } catch (error) {
        console.log(error);
      }
    };

    fetchSevenDaysTasksNumber(); // Invoke the fetchData function
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        <div className="dashboard-title">Dashboard</div>
        <div className="dashboard-greeting">
          Hi {context.user}, Good morning!{" "}
        </div>
      </div>
      <div className="nav-bar-container">
        <NavBar dashboardPage={dashboardPage} />
      </div>
      {renderSwitch()}
    </div>
  );
};
export default Dashboard;
