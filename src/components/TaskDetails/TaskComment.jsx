import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import axios from "axios";
import "./TaskComment.scss";
import Comment from "./Comment";
const TaskComment = (props) => {
  const [comment, setComment] = useState("");
  return (
    <div className="task-comment">
      <div className="task-comment-reminder">
        Check or leave your comment for your task.
      </div>
      <div className="comment-input-container">
        <FaUserCircle size={35} className="user-svg" />
        <input
          className="comment-input"
          placeholder="Add a comment for this task..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
      </div>
      <button className="add-comment">Comment</button>

      <div className="comments">
        <div className="comment-history">Comment History:</div>
        <Comment
          name={"Ivan Ng"}
          datetime={"July 29, 2023 at 1:15 AM"}
          comment={"this is a new comment"}
        />
        <Comment
          name={"Ivan Ng"}
          datetime={"July 29, 2023 at 1:15 AM"}
          comment={"here is another new comment for this task is a new comment"}
        />
      </div>
    </div>
  );
};
export default TaskComment;
