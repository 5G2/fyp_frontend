import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

import "./TaskComment.scss";
import Comment from "./Comment";
const TaskComment = (props) => {
  // const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const PostComment = () => {
    try {
      axios.post(
        "http://127.0.0.1:8000/api/createComment/",
        {
          message: comment,
          task_id: props.taskId,
        },
        {
          headers: { Authorization: `JWT ${localStorage.getItem("access")}` },
        }
      );
      props.setCommentState((value) => value + 1);
      setComment("");
      navigate(window.location.pathname);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

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
      <button className="add-comment" onClick={() => PostComment()}>
        Comment
      </button>

      <div className="comments">
        <div className="comment-history">Comment History:</div>
        {props.comments.map((comment) => {
          return (
            <Comment
              name={comment.creator}
              datetime={comment.create_at}
              comment={comment.message}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskComment;
