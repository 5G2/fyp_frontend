import React, { useState, useEffect, useContext } from "react";

import "./ContributingProjectTable.scss";
import ContributingProject from "./ContributingProject";
const ContributingProjectTable = (props) => {
  //   const context = useContext(UserContext);

  useEffect(() => {}, []);
  return (
    <div className="contributing-project-table">
      <div className="contributing-project-table-title">Project</div>
      <div className="contributing-project-container">
        <ContributingProject
          projectName={"IEEE"}
          lead={"Peter Chan"}
          startDate={"2023-1-5"}
          openTask={10}
          closeTask={10}
          inProgressTask={10}
          onHoldTask={10}
        />{" "}
        <ContributingProject
          projectName={"IEEE"}
          lead={"Peter Chan"}
          startDate={"2023-1-5"}
          openTask={10}
          closeTask={10}
          inProgressTask={10}
          onHoldTask={10}
        />{" "}
        <ContributingProject
          projectName={"IEEE"}
          lead={"Peter Chan"}
          startDate={"2023-1-5"}
          openTask={10}
          closeTask={10}
          inProgressTask={10}
          onHoldTask={10}
        />
      </div>
    </div>
  );
};
export default ContributingProjectTable;
