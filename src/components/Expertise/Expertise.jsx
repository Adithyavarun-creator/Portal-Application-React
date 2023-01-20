import React, { useEffect } from "react";
import classes from "./Expertise.module.css";
import Header from "../Header/Header";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineAssignmentTurnedIn, MdOndemandVideo } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Expertise = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header heading="Our Expertise" />
      <div className={classes.expertiseContainer} data-aos="fade-up">
        <div className={classes.expertiseBox}>
          <div>
            <AiOutlineSolution className={classes.expertiseBoxicon} />
          </div>
          <div>
            <h2 className={classes.expertiseBoxheading}>LMS Solution</h2>
          </div>
          <div>
            <article className={classes.expertiseBoxarticle}>
              Get your own Learning Management solution for your Institution.
              Bring all the Stockholder under one platform.
            </article>
          </div>
          <div>
            <button className={classes.expertiseBoxbutton}>Read More</button>
          </div>
        </div>

        <div className={classes.expertiseBox}>
          <div>
            <MdOutlineAssignmentTurnedIn className={classes.expertiseBoxicon} />
          </div>
          <div>
            <h2 className={classes.expertiseBoxheading}>Assessment Solution</h2>
          </div>
          <div>
            <article className={classes.expertiseBoxarticle}>
              Assess your students for placement drive with company specific
              test series and many more.
            </article>
          </div>
          <div>
            <button className={classes.expertiseBoxbutton}>Read More</button>
          </div>
        </div>

        <div className={classes.expertiseBox}>
          <div>
            <MdOndemandVideo className={classes.expertiseBoxicon} />
          </div>
          <div>
            <h2 className={classes.expertiseBoxheading}>Courses</h2>
          </div>
          <div>
            <article className={classes.expertiseBoxarticle}>
              Upgrade the skill of the students with Latest Technologies. These
              are completely hands on training
            </article>
          </div>
          <div>
            <button className={classes.expertiseBoxbutton}>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
