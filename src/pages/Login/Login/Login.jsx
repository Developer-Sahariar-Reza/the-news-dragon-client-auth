import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="login-container">
      <h2>Login Your Account</h2>

      <form onSubmit={handleLogin}>
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
