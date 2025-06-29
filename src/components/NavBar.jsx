import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <h2>HEADER</h2>
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default NavBar;
