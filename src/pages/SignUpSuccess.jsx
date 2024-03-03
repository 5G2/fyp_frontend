import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const SignUpSuccessPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);
  return (
    <div>
      <br />
      Congratulations! Your sign up is success, please check your email to
      activate your account.
      <br />
      <br />
      <br />
      <Link to="/">Back to login page.</Link>
    </div>
  );
};
export default SignUpSuccessPage;
