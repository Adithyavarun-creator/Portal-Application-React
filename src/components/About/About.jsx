import React from "react";
import classes from "./About.module.css";
import { ReactComponent as AboutSVG } from "../../assets/svg/about.svg";

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.aboutContent}>
        <h1 className={classes.aboutContentHeading}>About Priori</h1>
        <article className={classes.aboutContentArticle}>
          Priori means gaining knowledge without having experienced it. Our
          Teams of high professionals had focused on building the curriculum
          which bridges the knowledge gaps that exist with the industry and
          institution. Our Programs are customizable according to the needs of
          the organization. We at Priori believe in building a great learning
          experience for both institutions and students.
        </article>
      </div>
      <div className={classes.aboutImagebox}>
        <AboutSVG alt="Aboutme" className={classes.aboutImage} />
      </div>
    </div>
  );
};

export default About;
