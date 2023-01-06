import React from "react";
import classes from "./Header.module.css";

const Header = ({ heading }) => {
  return (
    <div className={classes.headerBox}>
      <h1 className={classes.headerHeading}>{heading}</h1>
    </div>
  );
};

export default Header;
