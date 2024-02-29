import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import axios from "axios";

import { IoIosClose } from "react-icons/io";
import "./Signup.scss";
const Signup = ({ isOpenSignup, setSignupClose, signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:3000`
      );
      // const res = await axios.get(
      //   `${process.env.REACT_APP_API_URL}/auth/o/google-plus/?redirect_uri=http://localhost:3000`
      // );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  const continueWithFacebook = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (isAuthenticated) {
    const redirect_uri = localStorage.getItem("lastPath");
    localStorage.removeItem("lastPath");
    return <Navigate to={redirect_uri} />;
  }
  if (accountCreated) {
    return <Navigate to="/login" />;
  }

  if (!isOpenSignup) return null;

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-header">
          <p className="signin-title">注冊</p>
          <IoIosClose className="close-icon" onClick={setSignupClose} />
        </div>
        <div className="signup-body">
          <p className="signin-msg">注冊你的帳號</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <p className="input-title first-name-title">名字</p>
              <input
                className="input"
                type="text"
                placeholder="大文"
                name="first_name"
                value={first_name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <p className="input-title last-name-title">姓氏</p>
              <input
                className="input"
                type="text"
                placeholder="陳"
                name="last_name"
                value={last_name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <p className="input-title email-title">電郵</p>
              <input
                className="input email-input"
                type="email"
                placeholder="bookit@example.com"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <p className="input-title pwd-title">密碼</p>
              <input
                className="input pwd-input"
                type="password"
                placeholder="********"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="6"
                required
              />
            </div>
            <div className="form-group">
              <p className="input-title pwd-title">重新輸入密碼</p>
              <input
                className="input re-pwd-input"
                type="password"
                placeholder="********"
                name="re_password"
                value={re_password}
                onChange={(e) => onChange(e)}
                minLength="6"
                required
              />
            </div>

            <div className="sumbit-btn-container">
              <button className="sumbit-btn" type="submit">
                註冊
              </button>
            </div>
          </form>
          <div className="sumbit-btn-container">
            <div className="sumbit-btn-oauth" onClick={continueWithGoogle}>
              <FcGoogle size={22} />
              <div>使用Google登入</div>
              <div />
            </div>
          </div>
          <div className="sumbit-btn-container">
            <div className="sumbit-btn-oauth" onClick={continueWithFacebook}>
              <BsFacebook size={22} />
              <div>使用Facebook登入</div>
              <div />
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
