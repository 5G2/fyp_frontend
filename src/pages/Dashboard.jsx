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

const Dashboard = () => {
  const context = useContext(UserContext);
  let { dashboardPage } = useParams();

  const [taskDone, setTaskDone] = useState(0);
  const [taskUpdate, setTaskUpdate] = useState(0);
  const [taskCreate, setTaskCreate] = useState(0);
  const [taskDue, setTaskDue] = useState(0);
  console.log(dashboardPage);
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
      default:
        return "foo";
    }
  };

  useEffect(() => {}, []);
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
