import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "@mui/material";
import axios from "axios";

import "./Profile.scss";
import ProfileAbout from "../components/Profile/ProfileAbout";
import TaskOnHandTable from "../components/Profile/TaskOnHandTable";
import ContributingProjectTable from "../components/Profile/ContributingProjectTable";
const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getUserData/`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(); // Invoke the fetchData function
  }, []);
  return (
    <div className="profile">
      <div className="top-bg-color"> </div>
      <div className="profile-left">
        <FaUserCircle size={140} className="user-svg" />
        <div className="username">{userData.username}</div>
        <Button onClick={() => logout()} className="logout-btn">
          logout
        </Button>
        <div className="profile-about-container">
          <ProfileAbout
            role={userData.role}
            gender={userData.gender}
            email={userData.email}
            phone={userData.phone}
          />
        </div>
      </div>
      <div className="profile-right">
        <div className="task-on-hand-title">Tasks on hand</div>
        <TaskOnHandTable />
        <div className="contributing-to-title">Contributing to</div>
        <ContributingProjectTable />
        <div className="feedback-notice">
          Tell us about your experience with the task managemenet system.
        </div>
        <Button className="feedback-btn"> Send Feedback</Button>
      </div>
    </div>
  );
};
export default Profile;
