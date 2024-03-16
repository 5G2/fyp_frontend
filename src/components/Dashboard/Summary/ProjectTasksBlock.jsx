import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";

import "./ProjectTasksBlock.scss";

const ProjectTasksBlock = (props) => {
  // const context = useContext(UserContext);
  const [taskData, setTaskData] = useState([
    {
      project_id: 5,
      project__code: "",
      open: 0,
      inprogress: 0,
      closed: 0,
      onhold: 0,
    },
  ]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getTaskCountByGroup/?user_id=${localStorage.getItem(
            "user_id"
          )}`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setTaskData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks(); // Invoke the fetchData function
  }, []);
  // const dataset = [
  //   {
  //     project_id: 5,
  //     project__code: "ASD",
  //     open: 0,
  //     inprogress: 1,
  //     closed: 0,
  //     onhold: 0,
  //   },
  //   {
  //     project_id: 6,
  //     project__code: "APK",
  //     open: 0,
  //     inprogress: 0,
  //     closed: 2,
  //     onhold: 0,
  //   },
  // ];

  return (
    <div className="project-chart">
      <div className="project-chart-title">Project Workload</div>
      <div className="project-chart-details">
        Get a view of how work is being organized.
      </div>

      <BarChart
        // dataset={dataset}
        dataset={taskData}
        xAxis={[{ scaleType: "band", dataKey: "project__code" }]}
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
