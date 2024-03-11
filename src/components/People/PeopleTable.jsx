import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./PeopleTable.scss";
const PeopleTable = (props) => {
  const [people, setPeople] = useState([
    {
      id: 1,
      role: "Student",
      username: "john_doe",
      email: "john.doe@example.com",
      phone: "12312312",
      birthday: "2023-11-30",
      gender: "Male",
      creationAt: "2022-01-01",
      emergencyContact: "Jane Doe (123-456-7890)",
      lastLogin: "2023-12-31",
    },
    {
      id: 2,
      role: "Tutor",
      username: "jane_smith",
      email: "jane.smith@example.com",
      phone: "12312312",
      birthday: "2023-11-30",
      gender: "Female",
      creationAt: "2022-02-01",
      emergencyContact: "John Smith (987-654-3210)",
      lastLogin: "2023-11-30",
    },
    // Add more people as needed...
    {
      id: 10,
      role: "Student",
      username: "mark_johnson",
      email: "mark.johnson@example.com",
      phone: "12312312",
      birthday: "2023-11-30",
      gender: "Male",
      creationAt: "2022-10-15",
      emergencyContact: "Mary Johnson (555-555-5555)",
      lastLogin: "2023-09-15",
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
    <table className="people-list-table">
      <tr className="people-table-title">
        <th className="people-table-title-item  ">Id</th>
        <th className="people-table-title-item  ">Role</th>
        <th className="people-table-title-item ">User Name</th>
        <th className="people-table-title-item ">Email</th>
        <th className="people-table-title-item ">Phone Number</th>
        <th className="people-table-title-item ">Gender</th>
        <th className="people-table-title-item ">Birthday</th>
        <th className="people-table-title-item ">Emergency Contact</th>
        <th className="people-table-title-item ">Creation At</th>
        <th className="people-table-title-item ">Last Login</th>
      </tr>
      {people.map((person) => {
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
                  person.role === "Student"
                    ? "status-selector-student"
                    : "status-selector-tutor"
                }`}
                value={person.role}
              >
                <option value="Student">Student</option>
                <option value="Tutor">Tutor</option>
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
