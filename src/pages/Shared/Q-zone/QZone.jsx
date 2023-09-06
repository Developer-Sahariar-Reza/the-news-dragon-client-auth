import React from "react";
import "./QZone.css";
import qzone1 from "../../../assets/images/qZone1.png";
import qzone2 from "../../../assets/images/qZone2.png";
import qzone3 from "../../../assets/images//qZone3.png";

const QZone = () => {
  return (
    <div>
      <h1>Q-Zone</h1>

      <div className="q-zone-images">
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
