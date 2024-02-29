import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Layout.scss";

import MenuBar from "../components/MenuBar/MenuBar";

const Layout = ({ children }) => {


  return (
    <div className="layout-container">
      <MenuBar />
      <div className="layout-children">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default (Layout);
