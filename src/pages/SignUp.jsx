import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./SignUp.scss";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/users/", {
        email: email,
        username: username,
        password: password,
        re_password: rePassword,
      });
      // Handle the successful account creation

      console.log(response.data);
      if (response.status === 201) {
        window.location.replace("signupsuccess");
      }
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  useEffect(() => {}, []);
  return (
    <div
      className="sign-up-page-container"
      style={{
        backgroundImage: "url(login_background.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="sign-up-container">
        <div className="header-container">
          <img src="hour-of-code-logo.png" className="logo" width={60} />
          <div className="divider"></div>
          <div className="sign-up-title">Sign Up</div>
        </div>
        <form onSubmit={handleSubmit} className="sign-up-form">
          <div className="input-container">
            <div className="input-title">Email:</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-container">
            <div className="input-title">Username:</div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input"
              placeholder="Enter your username"
            />
          </div>

          <div className="input-container">
            <div className="input-title">Password:</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
              placeholder="Enter your password"
            />
          </div>
          <div className="input-container">
            <div className="input-title">Re-enter Password:</div>
            <input
              type="password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
              className="input"
              placeholder="Re-enter your password"
            />
          </div>
          <div className="have-ac-container">
            <div className="have-ac-title">Have an account?</div>
            <Link className="have-ac-btn" to="/">
              Signin
            </Link>
          </div>
          <div className="btn-container">
            <button type="submit" className="sign-up-btn">
              Create an Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
