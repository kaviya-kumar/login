import React from "react";
import { useState, useHistory } from "react";
import axios from "axios";

export default function Login() {
    // const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post("http://3.140.210.76:8000/api/token/", {
        email: formData.email,
        password: formData.password,
      })
      .then(function (response) {
        console.log(response);
        console.log("Successfully Logged in ");
        
        // history.push("/success");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>

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
        Submit
      </button>
    </form>
  );
}
