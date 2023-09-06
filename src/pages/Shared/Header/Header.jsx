import React from "react";
import "./Header.css";
import moment from "moment";
import logo from "../../../assets/images/logo.png";

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
    </div>
  );
};

export default Header;
