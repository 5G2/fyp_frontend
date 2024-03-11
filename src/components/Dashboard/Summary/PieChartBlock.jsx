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

  const data = [
    { label: "Open", value: 240 },
    { label: "Closed", value: 467 },
    { label: "In Progress", value: 198 },
    { label: "On Hold", value: 900 },
  ];
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
