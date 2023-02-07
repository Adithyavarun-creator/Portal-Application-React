import React from "react";
import Leftbar from "../../components/Leftbar/Leftbar";
import classes from "./SettingsPage.module.css";
import Settings from "../../components/Settings/Settings";

const SettingsPage = () => {
  return (
    <>
      <div className={classes.DashboardDesignContainer}>
        <div className={classes.dashLeftbar}>
          <Leftbar />
        </div>
        <div className={classes.dashMainbar}>
          <Settings />
        </div>
        {/* <div className={classes.dashRightbar}>
          <Rightbar />
        </div> */}
      </div>
    </>
  );
};

export default SettingsPage;
