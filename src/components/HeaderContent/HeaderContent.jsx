import React, { useEffect } from "react";
import classes from "./HeaderContent.module.css";
import { ReactComponent as TeachingSVG } from "../../assets/svg/teaching.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const HeaderContent = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.headercontentContainer}>
      <div className={classes.headercontentBox1} data-aos="fade-right">
        <h1 className={classes.headercontentTitle}>
          We are passionate about providing the right tools for the Classroom
        </h1>
      </div>
      <div className={classes.headercontentBox2} data-aos="fade-left">
        <TeachingSVG className={classes.headercontentimage} />
      </div>
    </div>
  );
};

export default HeaderContent;
