import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <Link
        className={
          props.projectDetailsPage === "summary"
            ? "nav-bar-item active"
            : "nav-bar-item "
        }
        to={`/project/${props.id}/summary`}
      >
        Summary
      </Link>
      <Link
        className={
          props.projectDetailsPage === "board"
            ? "nav-bar-item active"
            : "nav-bar-item "
        }
        to={`/project/${props.id}/board`}
      >
        Board
      </Link>
      <Link
        className={
          props.projectDetailsPage === "list"
            ? "nav-bar-item active"
            : "nav-bar-item "
        }
        to={`/project/${props.id}/list`}
      >
        List
      </Link>
      <Link
        className={
          props.projectDetailsPage === "calendar"
            ? "nav-bar-item active"
            : "nav-bar-item "
        }
        to={`/project/${props.id}/calendar`}
      >
        Calendar
      </Link>
      <Link
        className={
          props.projectDetailsPage === "attachment"
            ? "nav-bar-item active"
            : "nav-bar-item "
        }
        to={`/project/${props.id}/attachment`}
      >
        Attachment
      </Link>
    </div>
  );
};
export default NavBar;
