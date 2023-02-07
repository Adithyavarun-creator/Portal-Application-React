import React from "react";
import Overview from "../../components/Overview/Overview";
import classes from "./OverviewPage.module.css";
import Rightbar from "../../components/Rightbar/Rightbar";
import Leftbar from "../../components/Leftbar/Leftbar";

const OverviewPage = () => {
  return (
    <>
      <div className={classes.DashboardDesignContainer}>
        <div className={classes.dashLeftbar}>
          <Leftbar />
        </div>
        <div className={classes.dashMainbar}>
          <Overview />
        </div>
        <div className={classes.dashRightbar}>
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
