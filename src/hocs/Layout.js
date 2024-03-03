import React, { useEffect, useState } from "react";
import "./Layout.scss";

import MenuBar from "../components/MenuBar/MenuBar";

const Layout = ({ children }) => {


  return (
    <div className="layout-container">
      <MenuBar />
      <div className="layout-children">{children}</div>
    </div>
  );
};

export default (Layout);
