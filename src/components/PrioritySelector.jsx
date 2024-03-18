import React, { useState, useEffect, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

import axios from "axios";

import "./PeopleSelector.scss";

const PrioritySelector = (props) => {
  function handleSelectChange(event) {
    const selectedValue = event.target.value;
    props.setPeople(selectedValue); // You can do whatever you need with the selected value
  }

  return (
    <select
      className="people-selector"
      defaultValue={3}
      onChange={handleSelectChange}
      style={{ backgroundColor: "#999999" }}
    >
      <option value={5}>Lowest</option>
      <option value={4}> Low</option>
      <option value={3}> Medium</option>
      <option value={2}> High</option>
      <option value={1}> Highest</option>
    </select>
  );
};
export default PrioritySelector;
