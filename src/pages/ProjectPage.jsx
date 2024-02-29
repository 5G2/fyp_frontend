import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const ProjectPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents form from refreshing the page
        console.log("Login Submitted", { email, password });
        // Here, you would typically handle the login logic, like sending the data to a backend service
    };

    useEffect(() => { }, []);
    return (
        <div>
            proejct
        </div>
    );
};
export default ProjectPage;
