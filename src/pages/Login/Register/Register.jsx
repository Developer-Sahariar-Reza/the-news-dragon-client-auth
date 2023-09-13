import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register Your Account</h2>

      <form>
        <div>
          <label>Your Name</label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Enter your name"
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
          <label>Confirm Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div>
          <button className="common-button">Register</button>
        </div>

        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login" className="login-special">
            Login
          </Link>
        </p>

        <p className="error-text"></p>
      </form>
    </div>
  );
};

export default Register;
