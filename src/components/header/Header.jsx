import React from "react";
import Banner from "./banner/Banner";
import classes from "./Header.module.scss";
import Sidebar from "./sidebar/Sidebar";

const Header = () => {
  return (
    <div className={classes.container}>
      <Sidebar />
      <Banner/>
    </div>
  );
};

export default Header;
