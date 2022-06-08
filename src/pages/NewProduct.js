import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { UseAuthContext } from "../context/auth_context";
import jwt from "jwt-decode";

const NewProduct = () => {
  const { token } = UseAuthContext();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    organizer: "",
    capacity: "",
    eventType: "",
    street: "",
    city: "",
    number: "",
    postalCode: "",
    country: ""
  });

  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/event", newProduct, {
        headers: { Authorization: token },
      })
      .then(() => {
        setNewProduct({
            name: "",
            description: "",
            organizer: "",
            capacity: "",
            eventType: "",
            street: "",
            city: "",
            number: "",
            postalCode: "",
            country: ""
        });

        history.push("/");
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "long") {
      setNewProduct({ ...newProduct, [name]: Number(value) });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  if(token) {
    var role = jwt(token).role;
}

if(token && role === "ADMIN") {
    return (
        <div className="center">
          <h1>Add new event</h1>
          <form onSubmit={submitForm}>
            <div className="txt_field">
              <input
                name="name"
                type="text"
                value={newProduct.name}
                onChange={handleChange}
                required
              />
              <span></span>
              <label>Name</label>
            </div>
            <div className="txt_field">
              <input
                name="description"
                type="text"
                value={newProduct.phoneNumber}
                onChange={handleChange}
                required
              />
              <span></span>
              <label>Description</label>
            </div>
            <div className="txt_field">
              <input
                name="capacity"
                type="number"
                value={newProduct.capacity}
                onChange={handleChange}
                required
              />
              <span></span>
              <label>Capacity</label>
            </div>
            <div className="txt_field">
              <input
                name="organizer"
                type="text"
                value={newProduct.organizer}
                onChange={handleChange}
                required
              />
              <span></span>
              <label>Organizer</label>
            </div>
            <div className="txt_field">
              <input
                name="eventType"
                type="text"
                value={newProduct.eventType}
                onChange={handleChange}
                required
              />
              <span></span>
              <label>Event type</label>
            </div>
            <div className="txt_field">
              <input
                name="street"
                type="text"
                value={newProduct.street}
                onChange={handleChange}
                required
              />
              <span></span>
              <label>Street</label>
            </div>
            <div className="txt_field">
              <input
                name="city"
                type="text"
                value={newProduct.city}
                onChange={handleChange}
                required
              />
              <span></span>
              <label>City</label>
            </div>
            <div className="txt_field">
              <input
                name="number"
                type="text"
                value={newProduct.number}
                onChange={handleChange}
                required
              />
              <span></span>
              <label>Number</label>
            </div>
            <div className="txt_field">
              <input
                name="postalCode"
                type="text"
                value={newProduct.postalCode}
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
                value={newProduct.country}
                onChange={handleChange}
                required
              />
              <span></span>
              <label>Country</label>
            </div>
            <input type="submit" value="Add" />
          </form>
        </div>
      );
} else {
    history.push("/");
    return <></>;
}  
};

export default NewProduct;