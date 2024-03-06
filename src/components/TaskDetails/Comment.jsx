import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import axios from "axios";
import "./Comment.scss";

const Comment = (props) => {
  useEffect(() => {}, []);
  return (
    <div className="comment">
      <div className="comment-info">
        <FaUserCircle size={35} className="user-svg" />
        <div className="comment-right">
          <div className="comment-right-top">
            <div className="comment-user">{props.name}</div>
            <div className="comment-time">{props.datetime}</div>
          </div>
          <div className="comment-comment">{props.comment}</div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
