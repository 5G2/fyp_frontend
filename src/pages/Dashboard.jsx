import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

import axios from "axios";
import NavBar from "../components/Dashboard/NavBar";
import DoneBlock from "../components/Dashboard/DoneBlock";
import UpdateBlock from "../components/Dashboard/UpdateBlock";
import CreateBlock from "../components/Dashboard/CreateBlock";
import DueBlock from "../components/Dashboard/DueBlock";

const Dashboard = () => {
  const context = useContext(UserContext);

  const [taskDone, setTaskDone] = useState(0);
  const [taskUpdate, setTaskUpdate] = useState(0);
  const [taskCreate, setTaskCreate] = useState(0);
  const [taskDue, setTaskDue] = useState(0);

  useEffect(() => {}, []);
  return (
    <div>
      Good Morning {context.user}
      <br />
      Here's where you'll view a summary of your PROJECT PROGRESS's status,
      priorities, workload, and more.
      <NavBar />
      <div>
        <DoneBlock taskDone={taskDone} />
        <UpdateBlock taskUpdate={taskUpdate} />
        <CreateBlock taskCreate={taskCreate} />
        <DueBlock taskDue={taskDue} />
      </div>
    </div>
  );
};
export default Dashboard;
