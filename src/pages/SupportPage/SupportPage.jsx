import React from "react";
import Leftbar from "../../components/Leftbar/Leftbar";
import Support from "../../components/Support/Support";
import classes from "./SupportPage.module.css";

const SupportPage = () => {
  return (
    <>
      <div className={classes.DashboardDesignContainer}>
        <div className={classes.dashLeftbar}>
          <Leftbar />
        </div>
        <div className={classes.dashMainbar}>
          <Support />
        </div>
        {/* <div className={classes.dashRightbar}>
          <Rightbar />
        </div> */}
      </div>
    </>
  );
};

export default SupportPage;
