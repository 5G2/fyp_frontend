import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./ListTable.scss";
const ListTable = (props) => {
  const [tasks, setTasks] = useState([
    {
      id: "APK-001",
      summary:
        "Sumary of the first task in the table. Make it longer to have two line. in the summary",
      status: "Open",
      dueDate: "2022-12-4",
      project: "New Project",
      assignee: "Ivan Ng",
    },
    {
      id: "APK-001",
      summary:
        "Sumary of the first task in the table. Make it longer to have two line. in the summary",
      status: "Done",
      dueDate: "2022-12-4",
      project: "New Project",
      assignee: "Ivan Ng",
    },
    {
      id: "APK-001",
      summary:
        "Sumary of the first task in the table. Make it longer to have two line. in the summary",
      status: "In-Progress",
      dueDate: "2022-12-4",
      project: "New Project",
    },
    {
      id: "APK-001",
      summary:
        "Sumary of the first task in the table. Make it longer to have two line. in the summary",
      status: "Open",
      dueDate: "2022-12-4",
      project: "New Project",
    },
  ]);

  const checkStatus = (value) => {
    switch (value) {
      case "Open":
        return "list-table-item-status-open";
      case "In-Progress":
        return "list-table-item-status-in-progress";
      case "Done":
        return "list-table-item-status-done";
      case "On-Hold":
        return "list-table-item-status-on-hold";
    }
  };

  return (
    <table className="list-table">
      <tr className="list-table-title">
        <th className="list-table-title-item list-table-title-key ">Key</th>
        <th className="list-table-title-item list-table-title-summary">
          Summary
        </th>
        <th className="list-table-title-item list-table-title-status">
          Status
        </th>
        <th className="list-table-title-item list-table-title-due-date">
          Due Date
        </th>
        <th className="list-table-title-item list-table-title-project">
          Project
        </th>
        <th className="list-table-title-item list-table-title-assignee">
          Assignee
        </th>
      </tr>
      {tasks.map((task) => {
        return (
          <tr className="list-table-item">
            <td className="list-table-item-id">
              <Link className="list-table-item-id-link" to={`/task/${task.id}`}>
                {task.id}
              </Link>
            </td>
            <td className="list-table-item-summary">{task.summary}</td>
            <td className="">
              <div
                className={"list-table-item-status " + checkStatus(task.status)}
              >
                {task.status}
              </div>
            </td>
            <td className="list-table-item-date"> {task.dueDate}</td>
            <td className="list-table-item-id">{task.project}</td>
            <td className="list-table-item-assignee">
              <div className="list-table-item-assignee-container">
                <FaUserCircle size={25} className="people-svg" />
                {task.assignee}
              </div>
            </td>
          </tr>
        );
      })}
    </table>
  );
};
export default ListTable;
