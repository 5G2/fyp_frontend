import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <Link
        className={
          props.dashboardPage === "summary"
            ? "nav-bar-item active"
            : "nav-bar-item "
        }
        to="/dashboard/summary"
      >
        Summary
      </Link>
      <Link
        className={
          props.dashboardPage === "board"
            ? "nav-bar-item active"
            : "nav-bar-item "
        }
        to="/dashboard/board"
      >
        Board
      </Link>
      <Link
        className={
          props.dashboardPage === "list"
            ? "nav-bar-item active"
            : "nav-bar-item "
        }
        to="/dashboard/list"
      >
        List
      </Link>
      <Link
        className={
          props.dashboardPage === "calendar"
            ? "nav-bar-item active"
            : "nav-bar-item "
        }
        to="/dashboard/calendar"
      >
        Calendar
      </Link>
      <Link
        className={
          props.dashboardPage === "attachment"
            ? "nav-bar-item active"
            : "nav-bar-item "
        }
        to="/dashboard/attachment"
      >
        Attachment
      </Link>
    </div>
  );
};
export default NavBar;
