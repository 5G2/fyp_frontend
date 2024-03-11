import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import PeopleTable from "../components/People/PeopleTable";

const PeoplePage = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <PeopleTable />
    </div>
  );
};
export default PeoplePage;
