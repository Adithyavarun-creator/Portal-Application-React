import React from "react";
import classes from "./Footer.module.css";
import { BiUserCircle } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className={classes.footerContainer}>
        <div>
          <div className={classes.footerMy}>
            <div className={classes.footerDetails}>
              <span>
                <BiUserCircle className={classes.footermyIcon} />
              </span>
              <span className={classes.footerSelf}>Kishore</span>
            </div>

            <div className={classes.footerDetails}>
              <span>
                <BiUserCircle className={classes.footermyIcon} />
              </span>
              <span className={classes.footerSelf}>+9100000000</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
