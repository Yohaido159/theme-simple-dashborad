import React, { useState } from "react";
import "./MainPage.styles.scss";

import NavbarSide from "../NavbarSide/NavbarSide";
import NavbarTop from "../NavbarTop/NavbarTop";
import MainContent from "../MainContent/MainContent";
import SidebarIcons from "../SidebarIcons/SidebarIcons";

const MainPage = (props) => {
  return (
    <>
      <div className="main-page">
        <NavbarTop />
        <NavbarSide />
        <MainContent />
      </div>
    </>
  );
};

export default MainPage;
