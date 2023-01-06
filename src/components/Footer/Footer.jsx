import React from "react";
import classes from "./Footer.module.css";
import { BiUserCircle } from "react-icons/bi";
import { BsWhatsapp, BsFillShareFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const url = "http://portal-application-react.vercel.app";

  const shareFunction = async () => {
    try {
      await navigator.share({
        text: "Check out Kishore's website to know about placement hiring",
        url: url,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
                <FiMail className={classes.footermyIcon} />
              </span>
              <a
                className={classes.footerContact}
                href="mailto:kishore.k909"
                target="_blank"
                rel="noreferrer"
              >
                kishore.k909@gmail.com
              </a>
            </div>

            <div className={classes.footerDetails}>
              <span>
                <BsWhatsapp className={classes.footermyIcon} />
              </span>
              <a
                className={classes.footerContact}
                href="https://wa.me/918122238286"
                target="_blank"
                rel="noreferrer"
              >
                +91-8122238286
              </a>
            </div>
            <div className={classes.footerDetails}>
              <span>
                <BsFillShareFill
                  onClick={shareFunction}
                  className={classes.footermyIcon}
                />
              </span>
              <span className={classes.footerSelf}>Share</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
