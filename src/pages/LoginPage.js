import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";
import { UseAuthContext } from "../context/auth_context";

const LoginPage = () => {
  // if (document.getElementById("footer")) {
  //   document.getElementById("footer").style.display = "none";
  // }

  let history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { token, addToken } = UseAuthContext();
  console.log("initial", token);

  const changeHandler = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/login", credentials).then((data) => {
      console.log("User logged in");
      setCredentials({
        username: "",
        password: "",
      });
      console.log("data", data);
      // localStorage.setItem("token", data.data);
      addToken(data.data);
      const user = jwt(data.data);
      console.log(user);
    });

    history.push("/");
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={login}>
        <div className="txt_field">
          <input
            type="email"
            name="username"
            value={credentials.username}
            required
            onChange={changeHandler}
          />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            name="password"
            value={credentials.password}
            required
            onChange={changeHandler}
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not a member? <Link to="/register">Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
