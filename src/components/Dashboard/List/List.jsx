import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./List.scss";
import ListTable from "./ListTable";
const List = (props) => {
  return (
    <div className="list">
      <Link className="create-new-task-btn" to="/create-task">
        Create new task
      </Link>
      <ListTable />
    </div>
  );
};
export default List;
