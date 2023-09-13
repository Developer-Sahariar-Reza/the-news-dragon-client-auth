import React, { useContext } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className="register-container">
      <h2>Register Your Account</h2>

      <form onSubmit={handleRegister}>
        <div>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label>Your Email</label>
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
