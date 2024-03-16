import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

import "./ListTable.scss";
const ListTable = (props) => {
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getTasks/?user_id=${localStorage.getItem(
            "user_id"
          )}`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks(); // Invoke the fetchData function
  }, []);
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
      case 1:
        return "list-table-item-status-open";
      case 2:
        return "list-table-item-status-in-progress";
      case 3:
        return "list-table-item-status-done";
      case 4:
        return "list-table-item-status-on-hold";
    }
  };

  const stateName = (value) => {
    switch (value) {
      case 1:
        return "Open";
      case 2:
        return "In-Progress";
      case 3:
        return "Done";
      case 4:
        return "On-Hold";
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
              <Link
                className="list-table-item-id-link"
                to={`/task/${task.code}`}
              >
                {task.code}
              </Link>
            </td>
            <td className="list-table-item-summary">{task.description}</td>
            <td className="">
              <div
                className={"list-table-item-status " + checkStatus(task.state)}
              >
                {stateName(task.state)}
              </div>
            </td>
            <td className="list-table-item-date"> {task.due_date}</td>
            <td className="list-table-item-id">{task.project_code}</td>
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
