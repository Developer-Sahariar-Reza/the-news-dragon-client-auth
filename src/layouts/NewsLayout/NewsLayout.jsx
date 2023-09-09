import React from "react";
import "./NewsLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../../pages/Shared/Header/Header";
import RightNav from "../../pages/Shared/RightNav/RightNav";
import Footer from "../../pages/Shared/Footer/Footer";

const NewsLayout = () => {
  return (
    <div>
      <Header />
      <div className="newsLayout-container">
        <div>
          <Outlet />
        </div>
        <div>
          <RightNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsLayout;
