import React from "react";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post("http://3.140.210.76:8000/api/user/", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
      })
      .then(function (response) {
        console.log(response);
        console.log("Succefuly Signed up");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={formData.firstName}
          placeholder="First name"
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={formData.lastName}
          placeholder="Last name"
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  );
}
