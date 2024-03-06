import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./TaskDetailsPage.scss";
import axios from "axios";
import TaskHeader from "../components/TaskDetails/TaskHeader";
import TaskComment from "../components/TaskDetails/TaskComment";
import TaskNotes from "../components/TaskDetails/TaskNotes";
import TaskDetails from "../components/TaskDetails/TaskDetails";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TaskDetailsPage = () => {
  let { id } = useParams();
  return (
    <div className="task-details-page">
      <div className="location-list">
        <Link to="/dashboard/list" className="link-to-previous">
          Task List
        </Link>
        <MdOutlineKeyboardArrowRight className="arrow-right-svg" size={22} />
        <div className="task-id">{id}</div>
        <div></div>
      </div>
      <TaskHeader
        title={"Create design system for Exceed Suite"}
        id={"APK-101"}
        assignee={"Ivan Ng"}
        project={"FYP"}
        project_id={"APK"}
        assignee_id={"Ivan Ng"}
        dueDate={"2024-12-22"}
        priority={1}
        description={
          "This is a testing project, for showcase how the css work in this page, in or der to test it well, need to expand thte word to check the css styleing of the page"
        }
      />
      <div className="task-details-bottom">
        <div className="task-details-bottom-left">
          <div className="task-comment-title">Comment</div>

          <TaskComment />
        </div>
        <div className="task-details-bottom-right">
          <div className="task-notes-title">Notes</div>
          <TaskNotes
            note={
              "This project serves as a testing platform to showcase the functionality and effectiveness of CSS within this webpage."
            }
          />
          <div className="task-details-title">Details</div>
          <TaskDetails
            creatorName={"Ivan Ng"}
            reportor={"Chris Wong"}
            assignee={"Jelly Ng"}
            creationDate={"2024-12-24"}
            startDate={"2024-12-31"}
            priority={1}
            status={"Closed"}
          />
        </div>
      </div>
    </div>
  );
};
export default TaskDetailsPage;
