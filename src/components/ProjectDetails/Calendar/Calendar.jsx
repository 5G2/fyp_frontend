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
    {
      date: new Date("2024-03-27"),
      color: checkPriority(1),

      title: "Task Details",
      popupContent: (
        <CalendarEventPopUp
          taskID={"APK-001"}
          creator={"Ivan"}
          reportor={"Ivan"}
          assignee={"Ivan"}
          status={"In-Progress"}
          priority={1}
          creationDate={"2022-12-1"}
          startDate={"2023-4-3"}
        />
      ),
    },
    {
      date: new Date("2024-03-27"),
      color: checkPriority(3),

      title: "Task Details",
      popupContent: (
        <CalendarEventPopUp
          taskID={"APK-001"}
          creator={"Ivan"}
          reportor={"Ivan"}
          assignee={"Ivan"}
          status={"In-Progress"}
          priority={3}
          creationDate={"2022-12-1"}
          startDate={"2023-4-3"}
        />
      ),
    },
    {
      date: new Date("2024-03-27"),
      color: checkPriority(4),

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
    {
      date: new Date("2024-03-27"),
      color: checkPriority(5),

      title: "Task Details",
      popupContent: (
        <CalendarEventPopUp
          taskID={"APK-001"}
          creator={"Ivan"}
          reportor={"Ivan"}
          assignee={"Ivan"}
          status={"In-Progress"}
          priority={5}
          creationDate={"2022-12-1"}
          startDate={"2023-4-3"}
        />
      ),
    },
  ];
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
