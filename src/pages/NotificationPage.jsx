import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./NotificationPage.scss";
import Notification from "../components/NotificationPage/Notification";
const NotificationPage = () => {
  const [filterState, setFilterState] = useState(1);
  const changeFilter = (value) => {
    setFilterState(value);
  };
  useEffect(() => {}, []);
  return (
    <div className="notification-page">
      <div className="notification-title">Notifications</div>
      <div className="filter-list">
        <div
          className={`filter-list-item ${
            filterState == 1 ? "filter-list-item-active" : ""
          }`}
          onClick={() => changeFilter(1)}
        >
          All
        </div>
        <div
          className={`filter-list-item ${
            filterState == 2 ? "filter-list-item-active" : ""
          }`}
          onClick={() => changeFilter(2)}
        >
          Create
        </div>
        <div
          className={`filter-list-item ${
            filterState == 3 ? "filter-list-item-active" : ""
          }`}
          onClick={() => changeFilter(3)}
        >
          Comment
        </div>
        <div
          className={`filter-list-item ${
            filterState == 4 ? "filter-list-item-active" : ""
          }`}
          onClick={() => changeFilter(4)}
        >
          Status
        </div>
      </div>
      <Notification
        user={"Ivan NG"}
        action={"Create a new task"}
        taskId={"ASK-96"}
        name={"Help me to do FYP"}
        date={"2022-9-7 12:24:0000HKT"}
      />{" "}
      <Notification
        user={"Ivan NG"}
        action={"Create a new task"}
        taskId={"ASK-96"}
        name={"Help me to do FYP"}
        date={"2022-9-7 12:24:0000HKT"}
        comment={
          "Your challenge is to build out this notifications page and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go. Your users should be able to:"
        }
      />{" "}
      <Notification
        user={"Ivan NG"}
        action={"Create a new task"}
        taskId={"ASK-96"}
        name={"Help me to do FYP"}
        date={"2022-9-7 12:24:0000HKT"}
      />{" "}
      <Notification
        user={"Ivan NG"}
        action={"Create a new task"}
        taskId={"ASK-96"}
        name={"Help me to do FYP"}
        date={"2022-9-7 12:24:0000HKT"}
        comment={
          "This is a testing message.This project will be a brilliant test of your HTML, CSS, and basic JavaScript skills. You'll use JS to toggle the visual state of the notifications."
        }
      />{" "}
      <Notification
        user={"Ivan NG"}
        action={"Create a new task"}
        taskId={"ASK-96"}
        name={"Help me to do FYP"}
        date={"2022-9-7 12:24:0000HKT"}
      />{" "}
      <Notification
        user={"Ivan NG"}
        action={"Create a new task"}
        taskId={"ASK-96"}
        name={"Help me to do FYP"}
        date={"2022-9-7 12:24:0000HKT"}
      />
    </div>
  );
};
export default NotificationPage;
