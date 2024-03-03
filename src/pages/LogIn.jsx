import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import "./Login.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/jwt/create/",
        {
          email: email,
          password: password,
        }
      );
      if (response.status === 200) {
        const decode = jwtDecode(response.data.refresh);
        console.log(decode);
        context.setUser(response.data.username);
        context.setRole(response.data.role);
        context.setJwt(response.data.access);
        navigate("../home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {}, []);
  return (
    <div
      className="login-page-container"
      style={{
        backgroundImage: "url(login_background.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="login-container">
        <div className="header-container">
          <img src="hour-of-code-logo.png" className="logo" width={60} />
          <div className="divider"></div>
          <div className="login-title">Login</div>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-container">
            <div className="input-title">Email:</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
              placeholder="Type your email"
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
          <div className="btn-container">
            <button type="submit" className="login-btn">
              Login
            </button>
            <Link to="/signup">
              <button type="submit" className="sign-up-btn">
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
