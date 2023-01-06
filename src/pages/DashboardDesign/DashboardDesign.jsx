import React from "react";
import Leftbar from "../../components/Leftbar/Leftbar";
import Mainbar from "../../components/Mainbar/Mainbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import classes from "./DashboardDesign.module.css";

const DashboardDesign = () => {
  return (
    <>
      <div className={classes.DashboardDesignContainer}>
        <div className={classes.dashLeftbar}>
          <Leftbar />
        </div>
        <div className={classes.dashMainbar}>
          <Mainbar />
        </div>
        <div className={classes.dashRightbar}>
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default DashboardDesign;
