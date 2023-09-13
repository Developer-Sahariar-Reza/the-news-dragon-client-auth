import React, { useContext } from "react";
import "./NavigationBar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/career"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            Career
          </NavLink>
        </li>
      </ul>

      <div className="nav-info">
        {user && <p>{user.displayName}</p>}
        {user ? (
          <button className="common-button">LogOut</button>
        ) : (
          <Link to="/login">
            <button className="common-button">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
