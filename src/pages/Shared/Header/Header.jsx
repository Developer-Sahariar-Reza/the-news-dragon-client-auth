import React from "react";
import "./Header.css";
import moment from "moment";
import Marquee from "react-fast-marquee";
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
    </div>
  );
};

export default Header;
