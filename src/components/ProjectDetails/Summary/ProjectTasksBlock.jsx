import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";

import "./ProjectTasksBlock.scss";

const ProjectTasksBlock = (props) => {
  // const context = useContext(UserContext);

  const dataset = [
    {
      open: 30,
      inprogress: 57,
      closed: 86,
      onhold: 10,
      project: "Project 1",
    },
    {
      open: 50,
      inprogress: 52,
      closed: 30,
      onhold: 80,
      project: "Project 2",
    },
    {
      open: 47,
      inprogress: 53,
      closed: 106,
      onhold: 41,
      project: "Project 3",
    },
  ];

  return (
    <div className="project-chart">
      <div className="project-chart-title">Project Workload</div>
      <div className="project-chart-details">
        Get a view of how work is being organized.
      </div>

      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "project" }]}
        series={[
          { dataKey: "open", label: "Open" },
          { dataKey: "closed", label: "Closed" },
          { dataKey: "inprogress", label: "Inprogress" },
          { dataKey: "onhold", label: "On Hold" },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};
export default ProjectTasksBlock;
