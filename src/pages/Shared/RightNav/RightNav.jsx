import React from "react";
import "./RightNav.css";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import QZone from "../Q-zone/QZone";

const RightNav = () => {
  return (
    <div className="right-nav">
      <div className="login-section">
        <h1>Login With</h1>

        <div>
          <button className="right-nav-google-button">
            <FaGoogle /> <p>Login with Google</p>
          </button>
          <button className="right-nav-github-button">
            <FaGithub /> <p>Login with Github</p>
          </button>
        </div>
      </div>

      <div className="social-media-section">
        <h1>Find Us On</h1>

        <ul>
          <li>
            <p>
              <FaFacebook /> <span>Facebook</span>
            </p>
          </li>
          <li>
            <p>
              <FaTwitter /> <span>Twitter</span>
            </p>
          </li>
          <li>
            <p>
              <FaInstagram /> <span>Instagram</span>
            </p>
          </li>
        </ul>
      </div>

      <div className="q-zone">
        <QZone />
      </div>

      <div className="right-nav-adv">
        <div className="adv-title">
          <h2>Create an</h2>
          <h2>Amazing</h2>
          <h2>News paper</h2>
        </div>

        <div className="adv-subtitle">
          <p>Discover thousands of </p>
          <p>options, easy to</p>
          <p>customize layouts, one-</p>
          <p>click to import demo</p>
          <p>and much more.</p>
        </div>

        <p className="adv-button">Learn More</p>
      </div>
    </div>
  );
};

export default RightNav;
