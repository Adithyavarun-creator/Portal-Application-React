import React from "react";
import { Link } from "react-router-dom";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes.dashboardContainer}>
      <ul className={classes.dashboardUl}>
        <Link to="/testing-quiz">
          <li className={classes.dashboardOl}>Take Quiz</li>
        </Link>
      </ul>
    </div>
  );
};

export default Dashboard;
