import React from "react";
import { Link } from "react-router-dom";
import classes from "./Leftbar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

//src="https://daily-now-res.cloudinary.com/image/upload/v1614088267/landing/Daily.dev_logo.png"

const Leftbar = () => {
  return (
    <>
      <div className={classes.leftbarcontainer}>
        <div className={classes.leftbarBox}>
          <img
            className={classes.leftbarLogo}
            alt="leftbar-logo"
            src="https://daily-now-res.cloudinary.com/image/upload/v1614088267/landing/Daily.dev_logo.png"
          />
          <span className={classes.leftbarName}>Company</span>
        </div>

        <Link
          to="/overview-page"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className={classes.leftbarLists}>
            <span>
              <AiOutlineHome className={classes.leftbarListicon} />
            </span>
            <span className={classes.leftbarListname}>Overview</span>
          </div>
        </Link>

        <Link
          to="/statistics-page"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className={classes.leftbarLists}>
            <span>
              <TfiStatsUp className={classes.leftbarListicon} />
            </span>
            <span className={classes.leftbarListname}>Statistics</span>
          </div>
        </Link>

        <Link
          to="/settings-page"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className={classes.leftbarLists}>
            <span>
              <FiSettings className={classes.leftbarListicon} />
            </span>
            <span className={classes.leftbarListname}>Settings</span>
          </div>
        </Link>

        <Link
          to="/add-questions"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className={classes.leftbarLists}>
            <span>
              <FiSettings className={classes.leftbarListicon} />
            </span>
            <span className={classes.leftbarListname}>Add Questions</span>
          </div>
        </Link>

        <Link
          to="/support-page"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className={classes.leftbarLists}>
            <span>
              <BiSupport className={classes.leftbarListicon} />
            </span>
            <span className={classes.leftbarListname}>Support</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Leftbar;
