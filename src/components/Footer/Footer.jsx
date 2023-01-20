import React from "react";
import classes from "./Footer.module.css";
import { BsWhatsapp, BsFillShareFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const url = "http://portal-application-react.vercel.app";

  const shareFunction = async () => {
    try {
      await navigator.share({
        text: "Check out Kishore's website to know about placement hiring and more process",
        url: url,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <footer className={classes.footerContainer}>
        <div className={classes.footerColumn}>
          <div>
            <span className={classes.footerColumnname}>Company</span>
          </div>
          <div>
            <span className={classes.footerColumnlist}>About Us</span>
          </div>
          <div>
            <span className={classes.footerColumnlist}>Events</span>
          </div>
          <div>
            <span className={classes.footerColumnlist}>Term of Use</span>
          </div>
          <div>
            <span className={classes.footerColumnlist}>Privacy Policy</span>
          </div>
        </div>

        <div className={classes.footerColumn}>
          <div>
            <span className={classes.footerColumnname}>Services</span>
          </div>
          <div>
            <span className={classes.footerColumnlist}>LMS Solutions</span>
          </div>
          <div>
            <span className={classes.footerColumnlist}>
              Assessment Solutions
            </span>
          </div>
          <div>
            <span className={classes.footerColumnlist}>Courses</span>
          </div>
        </div>

        <div className={classes.footerColumn}>
          <div>
            <span className={classes.footerColumnname}>Contact</span>
          </div>
          <div className={classes.footerContactbox}>
            <span>
              <FiMail className={classes.footermyIcon} />
            </span>
            <a
              className={classes.footerContactlink}
              href="mailto:kishore.k909"
              target="_blank"
              rel="noreferrer"
            >
              kishore.k909@gmail.com
            </a>
          </div>
          <div className={classes.footerContactbox}>
            <span>
              <BsWhatsapp className={classes.footermyIcon} />
            </span>
            <a
              className={classes.footerContactlink}
              href="https://wa.me/918122238286"
              target="_blank"
              rel="noreferrer"
            >
              +91-8122238286
            </a>
          </div>
          <div className={classes.footerContactbox} onClick={shareFunction}>
            <span>
              <BsFillShareFill className={classes.footermyIcon} />
            </span>
            <span className={classes.footerShare}>Share</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

/**
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
            <div className={classes.footerDetails} onClick={shareFunction}>
              <span>
                <BsFillShareFill className={classes.footermyIcon} />
              </span>
              <span className={classes.footerSelf}>Share</span>
            </div>
          </div>
        </div>
      </footer>
 */
