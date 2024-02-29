import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Layout.scss";

import {
  checkAuthenticated,
  load_user,
  googleAuthenticate,
} from "../actions/auth";
import queryString from "query-string";
import { connect } from "react-redux";

const Layout = ({ children }) => {


  return (
    <div className="layout-container">

      <div className="layout-children">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
