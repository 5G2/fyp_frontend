import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import axios from "axios";
import "./Project.scss";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const Project = (props) => {
  const data = [{ label: "Open", value: props.openTask }];
  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={55} y={top + height / 2}>
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
    <Link className="project-link" to={`/project/${props.id}/summary`}>
      <div className="project">
        <div className="project-header">
          <div className="project-title">{props.title}</div>
          <BsThreeDots className="details-svg" size={25} />
        </div>
        <div className="team-size-container">
          <RiTeamFill size={20} />
          <div className="team-size-value">{props.teamsize}</div>
        </div>
        <div className="task-completed-container">
          <div className="progress-bar-top">
            <div className="progress-bar-title">Task Completed</div>
            <div className="progress-bar-percentage"></div>
            {props.taskCompletePercentage}%
          </div>
          <LinearProgress
            variant="determinate"
            value={props.taskCompletePercentage}
            className="linear-bar"
            sx={{
              backgroundColor: "white",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#1976d2",
              },
            }}
          />
        </div>
        <div className="task-completed-container">
          <div className="progress-bar-top">
            <div className="progress-bar-title">Project progress</div>
            <div className="progress-bar-percentage"></div>
            {props.projectProgress}%
          </div>
          <LinearProgress
            variant="determinate"
            value={props.projectProgress}
            className="linear-bar"
            sx={{
              backgroundColor: "white",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#8c619d",
              },
            }}
          />
        </div>

        <div className="task-data-container">
          <div>
            <div className="task-type-title">Open Task</div>
            <PieChart
              className="task-type-data-pie-chart"
              colors={["#dd352b"]}
              series={[
                {
                  data: data,
                  innerRadius: 40,
                  outerRadius: 50,
                  cx: 50,
                },
              ]}
              // viewBox="0 0 100 100"
              height={100}
              width={110}
              slotProps={{
                legend: {
                  hidden: true,
                },
              }}
            >
              <PieCenterLabel>{props.openTask}</PieCenterLabel>
            </PieChart>
          </div>
          <div>
            <div className="task-type-title">In-Progress</div>
            <PieChart
              className="task-type-data-pie-chart"
              colors={["#5698cd"]}
              series={[
                {
                  data: data,
                  innerRadius: 40,
                  outerRadius: 50,
                  cx: 50,
                },
              ]}
              // viewBox="0 0 100 100"
              height={100}
              width={110}
              slotProps={{
                legend: {
                  hidden: true,
                },
              }}
            >
              <PieCenterLabel>{props.inProgress}</PieCenterLabel>
            </PieChart>
          </div>
          <div>
            <div className="task-type-title">On-Hold</div>
            <PieChart
              className="task-type-data-pie-chart"
              colors={["#8c619d"]}
              series={[
                {
                  data: data,
                  innerRadius: 40,
                  outerRadius: 50,
                  cx: 50,
                },
              ]}
              // viewBox="0 0 100 100"
              height={100}
              width={110}
              slotProps={{
                legend: {
                  hidden: true,
                },
              }}
            >
              <PieCenterLabel>{props.onHoldTask}</PieCenterLabel>
            </PieChart>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Project;
