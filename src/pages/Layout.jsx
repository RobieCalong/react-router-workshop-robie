import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <div id="container">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
