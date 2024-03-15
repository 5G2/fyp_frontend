import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import DoneBlock from "./DoneBlock";
import UpdateBlock from "./UpdateBlock";
import CreateBlock from "./CreateBlock";
import DueBlock from "./DueBlock";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

import "./PieChartBlock.scss";

const PieChartBlock = (props) => {
  // const context = useContext(UserContext);

  const [data, setData] = useState([
    { label: "Open", value: 0 },
    { label: "Closed", value: 0 },
    { label: "In Progress", value: 0 },
    { label: "On Hold", value: 0 },
  ]);
  useEffect(() => {
    const fetchAllTasksNumber = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/getTotalTaskNumber/",
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setData([
          { label: "Open", value: response.data.number_of_open_tasks },
          { label: "Closed", value: response.data.number_of_closed_tasks },
          {
            label: "In Progress",
            value: response.data.number_of_in_progress_tasks,
          },
          { label: "On Hold", value: response.data.number_of_on_hold_tasks },
        ]);
        console.log("success");
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllTasksNumber(); // Invoke the fetchData function
  }, []);

  const task = data.reduce((total, item) => total + item.value, 0);

  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
    fontWeight: 600,
  }));

  return (
    <div className="pie-chart">
      <div className="pie-chart-title">Status</div>
      <div className="pie-chart-details">
        Get a snapshot of the status of your items.{" "}
        <Link>Check all Items.</Link>
      </div>
      <PieChart
        series={[
          {
            data: data,
            innerRadius: 80,
            outerRadius: 140,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 80, additionalRadius: -10 },
          },
        ]}
        height={350}
        slotProps={{
          legend: {
            hidden: false,
            // position: "right",
          },
        }}
      >
        <PieCenterLabel>
          Total task:
          <br />
          {task}
        </PieCenterLabel>
      </PieChart>
    </div>
  );
};
export default PieChartBlock;
