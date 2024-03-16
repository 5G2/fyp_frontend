import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import axios from "axios";
import "./Comment.scss";

const Comment = (props) => {
  const date = new Date(props.datetime);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDate = date.toLocaleString("en-US", options);

  return (
    <div className="comment">
      <div className="comment-info">
        <FaUserCircle size={35} className="user-svg" />
        <div className="comment-right">
          <div className="comment-right-top">
            <div className="comment-user">{props.name}</div>
            <div className="comment-time">{formattedDate}</div>
          </div>
          <div className="comment-comment">{props.comment}</div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
