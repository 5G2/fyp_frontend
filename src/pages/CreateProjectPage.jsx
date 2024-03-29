import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import axios from "axios";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs, format } from "dayjs";

import "./CreateProjectPage.scss";
import PeopleSelector from "../components/PeopleSelector";
import { Button } from "@mui/material";
const CreateProjectPage = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [leader, setLeader] = useState(1);
  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const [dueDate, setDueDate] = useState(dayjs(new Date() + 1));
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/createProject/",
        {
          name: name,
          code: code,
          start_date: changeDateFormat(startDate),
          due_date: changeDateFormat(dueDate),
          state: 0,
          description: description,
          leader: leader,
        },
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
          },
        }
      );

      navigate("../project");
    } catch (error) {
      console.error(error);
    }
  };
  const changeDateFormat = (value) => {
    const date = new Date(value.$d);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate; // Output: 2024-03-18
  };

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
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="create-project-body-general-project-code">
              <div className="create-project-body-general-project-code-title">
                Project code
              </div>
              <input
                className="create-project-body-general-project-code-input"
                placeholder="APK"
                value={code}
                onChange={handleCodeChange}
              />
            </div>
          </div>
          <div className="create-project-body-general-description">
            <div className="create-project-body-general-project-description-title">
              Project description
            </div>
            <textarea
              className="create-project-body-general-project-description-input"
              placeholder="Enter a brief description of this project"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <div className="create-project-body-details">
          <div className="create-project-body-details-title">Details</div>
          <div className="leader-container">
            <div className="leader-title">Leader:</div>
            <PeopleSelector setPeople={setLeader} />
          </div>
          <div className="date-container">
            <div className="date-title">Start date</div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  inputFormat="YYYY-MM-DD"
                  format="YYYY-MM-DD"
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
                  // inputFormat="YYYY-MM-DD"
                  format="YYYY-MM-DD"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <Button className="create-btn" onClick={() => handleSubmit()}>
          Create new project
        </Button>
      </div>
    </div>
  );
};
export default CreateProjectPage;
