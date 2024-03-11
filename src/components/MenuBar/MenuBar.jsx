import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { FaUserCircle } from "react-icons/fa";
// import logo from "../../../public/hour_of_code_logo.png";
import "./MenuBar.scss";

const MenuBar = () => {
  const context = useContext(UserContext);
  // console.log(context.role);
  const page = context.page;
  console.log(page);

  const changePage = (value) => {
    context.setPage(value);
  };
  return (
    <div className="menu-bar">
      <div className="menu-top">
        <img
          className="logo-img"
          src={(require = "/menuBarIcon.png")}
          alt="Hour-of-Code"
          width={180}
        />

        {/* if role ===0, user is student, have less right */}
        {context.role === 0 ? (
          <div className="menuBar-container">
            <div className={"menuBar-menu"}>MENU</div>
            <Link
              to="/dashboard/summary"
              className={page === 1 ? "menuBar-item active" : "menuBar-item"}
              onClick={() => changePage(1)}
            >
              Dashboard
            </Link>
            <Link
              to="/project"
              className={page === 2 ? "menuBar-item active" : "menuBar-item"}
              onClick={() => changePage(2)}
            >
              Project
            </Link>
            <Link
              to="/notification"
              className={page === 3 ? "menuBar-item active" : "menuBar-item"}
              onClick={() => changePage(3)}
            >
              Notification
            </Link>
          </div>
        ) : (
          <div className="menuBar-container">
            <div className="menuBar-menu">MENU</div>
            <Link
              to="/dashboard/summary"
              className={page === 1 ? "menuBar-item active" : "menuBar-item"}
              onClick={() => changePage(1)}
            >
              Dashboard
            </Link>
            <Link
              to="/project"
              className={page === 2 ? "menuBar-item active" : "menuBar-item"}
              onClick={() => changePage(2)}
            >
              Project
            </Link>
            <Link
              to="/people"
              className={page === 4 ? "menuBar-item active" : "menuBar-item"}
              onClick={() => changePage(4)}
            >
              People
            </Link>
            <Link
              to="/notification"
              className={page === 3 ? "menuBar-item active" : "menuBar-item"}
              onClick={() => changePage(3)}
            >
              Notification
            </Link>
          </div>
        )}
      </div>

      <div>
        <Link
          to="/profile"
          className="profile-container"
          onClick={() => changePage(0)}
        >
          <FaUserCircle size={35} className="user-svg" />
          <div>
            <p className="profile-name">Ng Chi To</p>
            <p className="profile-role">Student</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default MenuBar;
