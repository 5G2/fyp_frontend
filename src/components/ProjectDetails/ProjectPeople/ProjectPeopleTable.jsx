import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
// import "./PeopleTable.scss";
const ProjectPeopleTable = (props) => {
  const [peoples, setPeoples] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getAllUser/?project_code=${id}`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setPeoples(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); // Invoke the fetchData function
  }, []);

  const changePeopleProject = async (value, user_id) => {
    if (value) {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/addPeopleInProject/`,
          {
            project_id: id,
            user_id: user_id,
          },
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/deletePeopleInProject/`,

          {
            data: { project_id: id, user_id: user_id },
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <table className="people-list-table">
      <tr className="people-table-title">
        <th className="people-table-title-item  ">Id</th>
        <th className="people-table-title-item  ">Join Project</th>
        <th className="people-table-title-item  ">Role</th>
        <th className="people-table-title-item ">User Name</th>
        <th className="people-table-title-item ">Email</th>
        <th className="people-table-title-item ">Phone Number</th>
        <th className="people-table-title-item ">Gender</th>
        <th className="people-table-title-item people-table-title-item-date">
          Birthday
        </th>
        <th className="people-table-title-item people-table-title-item-em-contact">
          Emergency Contact
        </th>
        <th className="people-table-title-item people-table-title-item-date">
          Creation At
        </th>
        <th className="people-table-title-item people-table-title-item-date">
          Last Login
        </th>
      </tr>
      {peoples.map((person) => {
        return (
          <tr className="people-table-item">
            <td className="people-table-item-info">
              <Link
                className="people-table-item-id"
                to={`/profile/${person.id}`}
              >
                {person.id}
              </Link>
            </td>
            <td>
              <input
                type="checkbox"
                className="check-box"
                name="scales"
                style={{ transform: "scale(1.2)" }}
                defaultChecked={person.is_project_memeber}
                onChange={(value) => {
                  changePeopleProject(value.target.checked, person.id);
                }}
              />
            </td>
            <td className="people-table-item-role">
              <select
                className={`status-selector ${
                  person.role === 1
                    ? "status-selector-student"
                    : "status-selector-tutor"
                }`}
                defaultValue={person.role}
              >
                <option value={0}>Student</option>
                <option value={1}>Tutor</option>
              </select>
            </td>
            <td className="people-table-item-info">
              <Link
                className="people-table-item-username"
                to={`/profile/${person.id}`}
              >
                {person.username}
              </Link>
            </td>
            <td className="people-table-item-info"> {person.email}</td>
            <td className="people-table-item-info">{person.phone}</td>
            <td className="people-table-item-info">{person.gender}</td>
            <td className="people-table-item-info">{person.birthday}</td>
            <td className="people-table-item-info">
              {person.emergencyContact}
            </td>
            <td className="people-table-item-info">{person.creationAt}</td>
            <td className="people-table-item-info">{person.lastLogin}</td>
          </tr>
        );
      })}
    </table>
  );
};
export default ProjectPeopleTable;
