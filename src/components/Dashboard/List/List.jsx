import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./List.scss";
import ListTable from "./ListTable";
const List = (props) => {
  return (
    <div className="list">
      <button className="create-new-task-btn">Create new task</button>
      <ListTable />
    </div>
  );
};
export default List;
