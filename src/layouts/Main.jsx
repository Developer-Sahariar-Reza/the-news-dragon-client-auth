import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import "./Main.css";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <LeftNav />
        </div>
        <div>
          <h1>Main Content Coming.....</h1>
        </div>
        <div>
          <RightNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
