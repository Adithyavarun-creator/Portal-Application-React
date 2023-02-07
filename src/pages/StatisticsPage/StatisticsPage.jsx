import React from "react";
import classes from "./StatisticsPage.module.css";
import Statistics from "../../components/Statistics/Statistics";
import Leftbar from "../../components/Leftbar/Leftbar";

const StatisticsPage = () => {
  return (
    <>
      <div className={classes.DashboardDesignContainer}>
        <div className={classes.dashLeftbar}>
          <Leftbar />
        </div>
        <div className={classes.dashMainbar}>
          <Statistics />
        </div>
        {/* <div className={classes.dashRightbar}>
          <Rightbar />
        </div> */}
      </div>
    </>
  );
};

export default StatisticsPage;
