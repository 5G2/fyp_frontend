import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IoCalendarNumber } from "react-icons/io5";

import axios from "axios";
import "./Block.scss";
const DueBlock = (props) => {
  useEffect(() => {}, []);
  return (
    <Link className="block">
      <IoCalendarNumber size={30} className="block-svg" />
      <div className="block-right">
        <div className="task-number"> {props.taskDue} due</div>
        <div className="seven-days">in the coming 7 days</div>
      </div>
    </Link>
  );
};
export default DueBlock;
