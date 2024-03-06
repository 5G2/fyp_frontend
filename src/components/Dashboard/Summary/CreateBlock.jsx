import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";

import axios from "axios";
import "./Block.scss";
const CreateBlock = (props) => {
  useEffect(() => {}, []);
  return (
    <Link className="block">
      <IoMdCreate size={30} className="block-svg" />
      <div className="block-right">
        <div className="task-number"> {props.taskCreate} created</div>
        <div className="seven-days">in the previous 7 days</div>
      </div>
    </Link>
  );
};
export default CreateBlock;
