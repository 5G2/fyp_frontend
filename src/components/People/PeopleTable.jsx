import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import "./PeopleTable.scss";
const PeopleTable = (props) => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getAllUser/`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setPeoples(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); // Invoke the fetchData function
  }, []);

  const changeRole = async (current_role, user_id) => {
    let role = 1;
    if (current_role == 1) role = 0;
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/changeUserRole/`,
        {
          role: role,
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
  };

  return (
    <table className="people-list-table">
      <tr className="people-table-title">
        <th className="people-table-title-item  ">Id</th>
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
            <td className="people-table-item-role">
              <select
                className={`status-selector ${
                  person.role === 1
                    ? "status-selector-student"
                    : "status-selector-tutor"
                }`}
                defaultValue={person.role}
                onChange={(value) => {
                  console.log(person.role);
                  changeRole(person.role, person.id);
                }}
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
export default PeopleTable;
