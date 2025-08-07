import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import React from "react";
// import "./styles.css";

const ProtectedLayout = () => {
  return (
    <div className="protected-layout-wrapper">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
