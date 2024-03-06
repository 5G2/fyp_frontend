import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineUpdate } from "react-icons/md";

import axios from "axios";
import "./Block.scss";
const UpdateBlock = (props) => {
  useEffect(() => {}, []);
  return (
    <Link className="block">
      <MdOutlineUpdate size={30} className="block-svg" />
      <div className="block-right">
        <div className="task-number"> {props.taskUpdate} updated</div>
        <div className="seven-days">in the previous 7 days</div>
      </div>
    </Link>
  );
};
export default UpdateBlock;
