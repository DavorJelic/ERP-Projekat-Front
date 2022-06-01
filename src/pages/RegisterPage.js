import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    phoneNumber: "",
    userType: "BASIC_USER",
    street: "",
    number: "",
    city: "",
    postalCode: "",
    country: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    if (newUser.password === confirmPassword) {
      document.getElementById("message").innerHTML = "";

      axios.post("http://localhost:5000/api/user", newUser).then(() => {
        console.log("new user added");
        setNewUser({
          name: "",
          phoneNumber: "",
          userType: "BASIC_USER",
          street: "",
          number: "",
          city: "",
          postalCode: "",
          country: "",
          email: "",
          password: "",
        });

        history.push("/login");
      });

      //   fetch("http://localhost:5000/api/user", {
      //     method: "POST",
      //     body: JSON.stringify({
      //       name: newUser.name,
      //       phoneNumber: newUser.phoneNumber,
      //       type: "BASIC",
      //       street: newUser.street,
      //       number: newUser.number,
      //       city: newUser.city,
      //       postalCode: newUser.postalCode,
      //       country: newUser.country,
      //       email: newUser.email,
      //       password: newUser.password,
      //     }),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }).then(() => {
      //     console.log("new user added");
      //   });
    } else {
      document.getElementById("message").innerHTML =
        "**Password confirmation must be same as password";
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handlePhoneChange = (e) => {
    console.log(e.target.value.includes("2"));
    if (/^\d+$/.test(e.target.value)) {
      setNewUser({ ...newUser, phoneNumber: e.target.value });
      document.getElementById("phone").innerHTML = "";
    } else {
      document.getElementById("phone").innerHTML =
        "Phone number must be number!";
    }
  };

  const handleConfPassChange = (e) => {
    e.preventDefault();
    if (e.target.value === newUser.password) {
      document.getElementById("message").innerHTML = "";
    }
    const newValue = e.target.value;
    setConfirmPassword(newValue);
  };

  return (
    <div className="center">
      <h1>Register</h1>
      <form onSubmit={submitForm}>
        <div className="txt_field">
          <input
            name="name"
            type="text"
            value={newUser.name}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Name</label>
        </div>
        <div className="txt_field">
          <input
            name="phoneNumber"
            type="text"
            value={newUser.phoneNumber}
            onChange={handlePhoneChange}
            required
          />
          <span id="phone" style={{ color: "red" }}>
            {" "}
          </span>
          <label>Phone number</label>
        </div>
        <div className="txt_field">
          <input
            name="street"
            type="text"
            value={newUser.street}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Street</label>
        </div>
        <div className="txt_field">
          <input
            name="number"
            type="text"
            value={newUser.number}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Number</label>
        </div>
        <div className="txt_field">
          <input
            name="city"
            type="text"
            value={newUser.city}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>City</label>
        </div>
        <div className="txt_field">
          <input
            name="postalCode"
            type="text"
            value={newUser.postalCode}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Postal code</label>
        </div>
        <div className="txt_field">
          <input
            name="country"
            type="text"
            value={newUser.country}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Country</label>
        </div>
        <div className="txt_field">
          <input
            name="email"
            type="email"
            value={newUser.email}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input
            name="password"
            type="password"
            value={newUser.password}
            minLength={5}
            onChange={handleChange}
            required
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => handleConfPassChange(e)}
            required
          />
          <span id="message" style={{ color: "red" }}>
            {" "}
          </span>
          <label>Confirm password</label>
        </div>
        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default RegisterPage;
