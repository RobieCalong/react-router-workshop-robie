import React from "react";
import { Outlet } from "react-router-dom";

const MainSection = () => {
  return (
    <div id="main-section">
      <Outlet />
    </div>
  );
};

export default MainSection;
