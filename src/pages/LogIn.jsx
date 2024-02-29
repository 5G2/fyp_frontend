import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents form from refreshing the page
    console.log("Login Submitted", { email, password });
    // Here, you would typically handle the login logic, like sending the data to a backend service
  };

  useEffect(() => {}, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* <Link to="/forgot-password" style={{ marginRight: "10px" }}> */}
      Forgot Password?
      {/* </Link> */}
      {/* <Link to="/signup">Sign Up</Link> */}
    </div>
  );
};
export default LogIn;
