import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import jwt from "jsonwebtoken";

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState("");
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/login", data);
      const token = response.data.token;
      const decoded = jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
      localStorage.setItem("token", token);
      history.push("/profile");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              ref={register({
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              ref={register({
                required: "Password is required",
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
            {error && <span>{error}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;