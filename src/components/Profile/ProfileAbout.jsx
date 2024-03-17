import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./ProfileAbout.scss";
import { FaTransgender } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const ProfileAbout = (props) => {
  const checkRole = (value) => {
    if (value === 0) return "Student";
    else return "Tutor";
  };

  return (
    <div className="profile-about">
      <div className="about">ABOUT</div>
      <div className="profile-about-item">
        <IoPeopleSharp className="profile-about-svg" size={30} />
        <div className="profile-about-info">{checkRole(props.role)}</div>
      </div>
      <div className="profile-about-item">
        <FaTransgender className="profile-about-svg" size={30} />
        <div className="profile-about-info">{props.gender}</div>
      </div>
      <div className="profile-about-item">
        <MdEmail className="profile-about-svg" size={30} />
        <div className="profile-about-info">{props.email}</div>
      </div>
      <div className="profile-about-item">
        <FaPhoneAlt className="profile-about-svg" size={30} />
        <div className="profile-about-info">{props.phone}</div>
      </div>
    </div>
  );
};
export default ProfileAbout;
