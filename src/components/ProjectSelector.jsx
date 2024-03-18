import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../App";

import axios from "axios";

import "./PeopleSelector.scss";

const ProjectSelector = (props) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getProjects/?user_id=${localStorage.getItem(
            "user_id"
          )}`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks(); // Invoke the fetchData function
  }, []);

  function handleSelectChange(event) {
    const selectedValue = event.target.value;
    props.setPeople(selectedValue); // You can do whatever you need with the selected value
  }

  return (
    <select
      className="people-selector"
      defaultValue={1}
      onChange={handleSelectChange}
      style={{ backgroundColor: "rgb(2, 178, 175)" }}
    >
      {projects.map((project) => {
        return <option value={project.id}>{project.name}</option>;
      })}
    </select>
  );
};
export default ProjectSelector;
