import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import DoneBlock from "./DoneBlock";
import UpdateBlock from "./UpdateBlock";
import CreateBlock from "./CreateBlock";
import DueBlock from "./DueBlock";

import "./Summary.scss";
import PieChartBlock from "./PieChartBlock";
import ActivityBlock from "./ActivityBlock";
import ProjectTasksBlock from "./ProjectTasksBlock";
import TaskList from "./TaskListBlock";

const Summary = (props) => {
  //   const context = useContext(UserContext);

  return (
    <div className="summary">
      <div className="block-container">
        <DoneBlock taskDone={props.taskDone} />
        <UpdateBlock taskUpdate={props.taskUpdate} />
        <CreateBlock taskCreate={props.taskCreate} />
        <DueBlock taskDue={props.taskDue} />
      </div>
      <div className="second-block-container">
        <PieChartBlock />
        <ActivityBlock />
      </div>
      <div className="third-block-container">
        <TaskList />
        <ProjectTasksBlock />
      </div>
    </div>
  );
};
export default Summary;
