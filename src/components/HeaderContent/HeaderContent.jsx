import React from "react";
import classes from "./HeaderContent.module.css";
import { ReactComponent as TeachingSVG } from "../../assets/svg/teaching.svg";

const HeaderContent = () => {
  return (
    <div className={classes.headercontentContainer}>
      <div className={classes.headercontentBox1}>
        <h1 className={classes.headercontentTitle}>
          We are passionate about providing the right tools for the Classroom
        </h1>
      </div>
      <div className={classes.headercontentBox2}>
        <TeachingSVG className={classes.headercontentimage} />
      </div>
    </div>
  );
};

export default HeaderContent;
