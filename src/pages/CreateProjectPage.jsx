import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import axios from "axios";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

import "./CreateProjectPage.scss";
const CreateProjectPage = () => {
  const [state, setState] = useState(1);
  const [priority, setPriority] = useState(1);
  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const [dueDate, setDueDate] = useState(dayjs(new Date() + 1));
  const navigate = useNavigate();
  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     try {
  //       const response = await axios.post(
  //         "http://127.0.0.1:8000/auth/jwt/create/",
  //         {
  //           email: email,
  //           password: password,
  //         }
  //       );
  //       if (response.status === 200) {
  //         const decode = jwtDecode(response.data.refresh);
  //         context.setUser(response.data.username);
  //         context.setRole(response.data.role);
  //         context.setJwt(response.data.access);
  //         localStorage.setItem("username", response.data.username);
  //         localStorage.setItem("user_id", response.data.user_id);
  //         localStorage.setItem("role", response.data.role);
  //         localStorage.setItem("access", response.data.access);
  //         navigate("../dashboard/summary");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  console.log(state);
  return (
    <div className="create-project">
      <div className="create-project-header">
        <Link to="/project">
          <LuArrowLeft size={25} className="back-to-project-page-svg" />
        </Link>
        <div className="create-project-title">New Project</div>
      </div>
      <div className="create-project-body">
        <div className="create-project-body-general">
          <div className="create-project-body-general-title">General</div>
          <div className="create-project-body-general-project-info">
            <div className="create-project-body-general-project-name">
              <div className="create-project-body-general-project-name-title">
                Project name
              </div>
              <input
                className="create-project-body-general-project-name-input"
                placeholder="Organizing a code competition"
              />
            </div>
            <div className="create-project-body-general-project-code">
              <div className="create-project-body-general-project-code-title">
                Project code
              </div>
              <input
                className="create-project-body-general-project-code-input"
                placeholder="APK"
              />
            </div>
          </div>
          <div className="create-project-body-general-description">
            <div className="create-project-body-general-project-description-title">
              Project description
            </div>
            <textarea
              className="create-project-body-general-project-description-input"
              placeholder="APK"
            />
          </div>
        </div>
        <div className="create-project-body-details">
          <div className="create-project-body-details-title">Details</div>
          <div className="date-container">
            <div className="date-title">Start date</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="date-container">
            <div className="date-title">Start date</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  value={dueDate}
                  onChange={(newValue) => setDueDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="leader-container"></div>
        </div>
      </div>
    </div>
  );
};
export default CreateProjectPage;
