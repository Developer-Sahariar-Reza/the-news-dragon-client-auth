import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login Your Account</h2>

      <form>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div>
          <button className="common-button">Login</button>
        </div>

        <p className="login-text">
          Don't have an account?{" "}
          <Link to="/register" className="login-special">
            Register
          </Link>
        </p>

        <p className="error-text"></p>
      </form>
    </div>
  );
};

export default Login;
