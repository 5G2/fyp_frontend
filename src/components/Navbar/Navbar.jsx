import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ setLoginOn, setLoginClose, setSignupOn, setSignupClose }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-band">Hour of Code</h1>
      </div>
    </div>
  );
};
export default Navbar;
