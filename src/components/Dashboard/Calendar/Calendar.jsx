import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import moment from "moment";
import axios from "axios";
import { EventCalendar } from "react-mui-event-calendar";

import CalendarEventPopUp from "./CalendarEventPopUp";

import "./Calendar.scss";

// import "./List.scss";
const Calendar = (props) => {
  const checkPriority = (value) => {
    switch (value) {
      case 1:
        return "#fc5434";
      case 2:
        return "#ff7452";
      case 3:
        return "#fcd01c";
      case 4:
        return "#0864fc";
      case 5:
        return "#8cb4fc";
      default:
        return "#fcd01c";
    }
  };

  const stateName = (value) => {
    switch (value) {
      case 1:
        return "Open";
      case 2:
        return "In-Progress";
      case 3:
        return "Done";
      case 4:
        return "On-Hold";
    }
  };
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getTasks/?user_id=${localStorage.getItem(
            "user_id"
          )}`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`,
            },
          }
        );
        setDataSource(
          response.data.map((task) => ({
            date: new Date(task.due_date.split("T")[0]), // Assuming task.due_date is in the correct format
            color: checkPriority(task.priority),
            title: "Task Details",
            popupContent: (
              <CalendarEventPopUp
                taskID={task.code}
                creator={task.creator}
                reportor={task.reportor}
                assignee={task.assignee}
                status={stateName(task.state)}
                priority={task.priority}
                creationDate={task.create_at}
                startDate={task.start_date}
              />
            ),
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);
  const data = [
    {
      date: new Date("2024-03-27"),
      color: checkPriority(2),

      title: "Task Details",
      popupContent: (
        <CalendarEventPopUp
          taskID={"APK-001"}
          creator={"Ivan"}
          reportor={"Ivan"}
          assignee={"Ivan"}
          status={"In-Progress"}
          priority={4}
          creationDate={"2022-12-1"}
          startDate={"2023-4-3"}
        />
      ),
    },
  ];
  // const [dataSource, setDataSource] = useState(eventsData);
  const [dataSource, setDataSource] = useState(data);

  return (
    <div className="calendar-container">
      <EventCalendar
        className="calendar"
        width={"95%"}
        dataSource={dataSource}
        pallet={{ primary: "#9660bf", secondary: "#00ff00" }}
        elevation={5}
        // showEventPopup={false}
        // onDataChange={(newEvents) => setDataSource(newEvents)}
      />
    </div>
  );
};
export default Calendar;
