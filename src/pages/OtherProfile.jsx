import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { FaUserCircle } from "react-icons/fa";
import "./Profile.scss";
import ProfileAbout from "../components/Profile/ProfileAbout";
import TaskOnHandTable from "../components/Profile/TaskOnHandTable";
import ContributingProjectTable from "../components/Profile/ContributingProjectTable";
import { Button } from "@mui/material";
const OtherProfile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Ivan");
  const context = useContext(UserContext);
  const logout = () => {
    context.setUser(null);
    context.setRole(null);
    context.setJwt(null);
    localStorage.removeItem("username");
    localStorage.removeItem("access");
    localStorage.removeItem("role");
    navigate("../");
  };
  return (
    <div className="profile">
      <div className="top-bg-color"> </div>
      <div className="profile-left">
        <FaUserCircle size={140} className="user-svg" />
        <div className="username">{username}</div>
        {/* <Button onClick={() => logout()} className="logout-btn">
          logout
        </Button> */}
        <div className="profile-about-container">
          <ProfileAbout
            role={"Student"}
            gender={"Male"}
            email={"testing001@gmail.com"}
            phone={"12312312"}
          />
        </div>
      </div>
      <div className="profile-right">
        <div className="task-on-hand-title">Tasks on hand</div>
        <TaskOnHandTable />
        <div className="contributing-to-title">Contributing to</div>
        <ContributingProjectTable />
      </div>
    </div>
  );
};
export default OtherProfile;
