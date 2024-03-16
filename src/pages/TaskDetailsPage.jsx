import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./TaskDetailsPage.scss";
import axios from "axios";
import TaskHeader from "../components/TaskDetails/TaskHeader";
import TaskComment from "../components/TaskDetails/TaskComment";
import TaskNotes from "../components/TaskDetails/TaskNotes";
import TaskDetails from "../components/TaskDetails/TaskDetails";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ContactSupportOutlined } from "@mui/icons-material";

const TaskDetailsPage = () => {
  let { code } = useParams();
  const [taskData, setTaskData] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentState, setCommentState] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getTasks/?task_id=${code}`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setTaskData(response.data[0]);
        console.log("task details page");
        console.log(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks(); // Invoke the fetchData function
  }, []);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getComments/?task_code=${code}`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("access")}`, // Use getItem instead of setItem
            },
          }
        );
        setComments(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComment(); // Invoke the fetchData function
  }, [commentState]);
  return (
    <div className="task-details-page">
      <div className="location-list">
        <Link to="/dashboard/list" className="link-to-previous">
          Task List
        </Link>
        <MdOutlineKeyboardArrowRight className="arrow-right-svg" size={22} />
        <div className="task-id">{code}</div>
        <div></div>
      </div>
      <TaskHeader
        title={taskData.title}
        id={taskData.code}
        assignee={taskData.assignee}
        project={taskData.project_name}
        assignee_id={taskData.assignee_id}
        dueDate={taskData.due_date}
        priority={taskData.priority}
        description={taskData.description}
      />
      <div className="task-details-bottom">
        <div className="task-details-bottom-left">
          <div className="task-comment-title">Comment</div>

          <TaskComment
            taskId={taskData.id}
            comments={comments}
            setCommentState={setCommentState}
          />
        </div>
        <div className="task-details-bottom-right">
          <div className="task-notes-title">Notes</div>
          <TaskNotes note={taskData.notes} />
          <div className="task-details-title">Details</div>
          <TaskDetails
            creatorName={taskData.creator}
            reportor={taskData.reportor}
            assignee={taskData.assignee}
            creationDate={taskData.create_at}
            startDate={taskData.start_date}
            priority={taskData.priority}
            status={taskData.state}
          />
        </div>
      </div>
    </div>
  );
};
export default TaskDetailsPage;
