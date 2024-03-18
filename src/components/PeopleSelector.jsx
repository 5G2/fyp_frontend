import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../App";

import axios from "axios";

import "./PeopleSelector.scss";

const PeopleSelector = (props) => {
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
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); // Invoke the fetchData function
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
      style={{ backgroundColor: props.color }}
    >
      {peoples.map((people) => {
        return <option value={people.id}>{people.username}</option>;
      })}
    </select>
  );
};
export default PeopleSelector;
