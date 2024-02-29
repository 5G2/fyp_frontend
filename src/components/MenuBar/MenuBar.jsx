import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const role = useContext(UserContext);

  return (
    <div className="MenuBar">
      {role == 1 ? (
        <div className="menuBar-container">
          <h1 className="menuBar-band">Dashboard</h1>
          <h1 className="menuBar-band">Project</h1>
          <h1 className="menuBar-band">Notification</h1>
        </div>
      ) : (
        <div className="menuBar-container">
          <h1 className="menuBar-band">Dashboard</h1>
          <h1 className="menuBar-band">Project</h1>
          <h1 className="menuBar-band">People</h1>
          <h1 className="menuBar-band">Notification</h1>
        </div>
      )}

      <div>
        <p>Account</p>
      </div>
    </div>
  );
};
export default MenuBar;
