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
        <OpenTaskList taskNumber={20} />
        <InProgressTaskList taskNumber={5} />
        <DoneTaskList taskNumber={0} />
        <OnHoldTaskList taskNumber={7} />
      </div>
    </div>
  );
};
export default Board;
