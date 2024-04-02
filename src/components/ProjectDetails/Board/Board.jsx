import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Board.scss";
import OpenTaskList from "./OpenTaskList";
import InProgressTaskList from "./InProgressTaskList";
import DoneTaskList from "./DoneTaskList";
import OnHoldTaskList from "./OnHoldTaskList";
const Board = (props) => {
  return (
    <div className="board">
      <div className="kan-ban-container">
        <OpenTaskList />
        <InProgressTaskList />
        <DoneTaskList />
        <OnHoldTaskList />
      </div>
    </div>
  );
};
export default Board;
