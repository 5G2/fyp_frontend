import React, { useEffect, useState } from "react";
import "./Layout.scss";

import MenuBar from "../components/MenuBar/MenuBar";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="menu-bar-container">
        <MenuBar />
      </div>
      <div className="layout-children-container">{children}</div>
    </div>
  );
};

export default Layout;
