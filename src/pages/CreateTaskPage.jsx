import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import axios from "axios";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs, format } from "dayjs";

import "./CreateTaskPage.scss";
import PeopleSelector from "../components/PeopleSelector";
import { Button } from "@mui/material";
import ProjectSelector from "../components/ProjectSelector";
import PrioritySelector from "../components/PrioritySelector";
const CreateTaskPage = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState(1);
  const [reporter, setReporter] = useState(1);
  const [state, setState] = useState(1);
  const [priority, setPriority] = useState(1);
  const [project, setProject] = useState(0);
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
        "http://127.0.0.1:8000/api/createTask/",
        {
          name: name,
          code: code,
          start_date: changeDateFormat(startDate),
          due_date: changeDateFormat(dueDate),
          state: state,
          description: description,
          assignee: assignee,
          reportor: reporter,
          project_id: project,
          priority: priority,
        },
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
          },
        }
      );

      navigate("../dashboard/summary");
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

  console.log(priority);
  return (
    <div className="create-project">
      <div className="create-project-header">
        <Link to="/project">
          <LuArrowLeft size={25} className="back-to-project-page-svg" />
        </Link>
        <div className="create-project-title">New Task</div>
      </div>
      <div className="create-project-body">
        <div className="create-project-body-general">
          <div className="create-project-body-general-title">General</div>
          <div className="create-project-body-general-project-info">
            <div className="create-project-body-general-project-name">
              <div className="create-project-body-general-project-name-title">
                Task name
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
                Task code (will be generated automatically)
              </div>
              <input
                className="create-project-body-general-project-code-input"
                placeholder="APK-XXX"
                value={code}
                disabled
                onChange={handleCodeChange}
              />
            </div>
          </div>
          <div className="create-project-body-general-description">
            <div className="create-project-body-general-project-description-title">
              Task description
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
          <div className="people-container">
            <div className="people-title">Assignee:</div>
            <PeopleSelector setPeople={setAssignee} color={"#1976d2"} />
          </div>
          <div className="people-container">
            <div className="people-title">Reporter:</div>
            <PeopleSelector setPeople={setReporter} color={"#8c619d"} />
          </div>
          <div className="people-container">
            <div className="people-title">Project:</div>
            <ProjectSelector setPeople={setProject} />
          </div>
          <div className="people-container">
            <div className="people-title">Priority:</div>
            <PrioritySelector setPeople={setPriority} />
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
          Create new Task
        </Button>
      </div>
    </div>
  );
};
export default CreateTaskPage;
