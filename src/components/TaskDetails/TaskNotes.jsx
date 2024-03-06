import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import "./TaskNotes.scss";

const TaskNotes = (props) => {
  useEffect(() => {}, []);
  return <div className="task-notes">{props.note}</div>;
};
export default TaskNotes;
