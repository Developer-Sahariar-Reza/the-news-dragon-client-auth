import React from "react";
import "./Header.css";
import moment from "moment";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header-logo">
        <img src={logo} alt="The News Dragon Logo" />
      </div>

      <div className="header-subtitle">
        <p>Journalism Without Fear or Favour</p>
      </div>

      <div className="header-time">
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>

      <div className="header-marquee">
        <button>Latest</button>
        <Marquee
          className="header-marquee-text"
          speed={150}
          pauseOnHover={true}
        >
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>

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
          <p>you@email.com</p>
          <Link>
            <button className="common-button">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
