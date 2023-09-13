import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import "./Main.css";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="container">
        <div>
          <LeftNav />
        </div>
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

export default Main;
