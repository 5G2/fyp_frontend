import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const DoneBlock = (props) => {
    useEffect(() => { }, []);
    return <div>

        {props.taskDone} task done <div>
            in the past 7 days
        </div></div>
        ;
};
export default DoneBlock;
