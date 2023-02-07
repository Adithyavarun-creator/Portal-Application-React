import React from "react";
import classes from "./WhatDoing.module.css";
import Header from "../Header/Header";
import { BiBrain } from "react-icons/bi";
import { IoMdSchool } from "react-icons/io";
import { RiVidiconLine, RiCodeSSlashFill } from "react-icons/ri";
import { ReactComponent as LearningSVG } from "../../assets/svg/learning.svg";
import { ReactComponent as ClassroomSVG } from "../../assets/svg/classroom.svg";
import { ReactComponent as OnlineSVG } from "../../assets/svg/online.svg";
import { ReactComponent as CodingSVG } from "../../assets/svg/coding.svg";

const WhatDoing = () => {
  return (
    <>
      <Header heading="What We Do For You" />
      <div className={classes.whatdoingContainer}>
        <div className={classes.whatdoingBox}>
          <div>
            <div className={classes.whatdoingContentbox}>
              <div>
                <BiBrain className={classes.whatdoingArticleicon} />
              </div>
              <div>
                <span className={classes.whatdoingArticleTitle}>
                  Learn by Doing
                </span>
              </div>
              <div>
                <article className={classes.whatdoingArticle}>
                  All of our courses are designed with hands-on training. This
                  helps the students to have a great experimental engagement
                  with the knowledge for a longer duration.
                </article>
              </div>
            </div>
          </div>
          <div>
            <LearningSVG className={classes.whatdoingArticleSVG} />
          </div>
        </div>

        <div className={classes.whatdoingBox}>
          <div>
            <ClassroomSVG className={classes.whatdoingArticleSVG} />
          </div>
          <div>
            <div className={classes.whatdoingContentbox}>
              <div>
                <IoMdSchool className={classes.whatdoingArticleicon} />
              </div>
              <div>
                <span className={classes.whatdoingArticleTitle}>
                  Learn by Doing
                </span>
              </div>
              <div>
                <article className={classes.whatdoingArticle}>
                  We provide the necessary tools for you to move your classroom
                  online. Real-time experience with automation of daily tasks.
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.whatdoingBox}>
          <div>
            <div className={classes.whatdoingContentbox}>
              <div>
                <RiVidiconLine className={classes.whatdoingArticleicon} />
              </div>
              <div>
                <span className={classes.whatdoingArticleTitle}>
                  Individual Online Learning
                </span>
              </div>
              <div>
                <article className={classes.whatdoingArticle}>
                  A platform for students to collaborate with others. Coding in
                  Real-time alongside the trainer.
                </article>
              </div>
            </div>
          </div>
          <div>
            <OnlineSVG className={classes.whatdoingArticleSVG} />
          </div>
        </div>

        <div className={classes.whatdoingBox}>
          <div>
            <CodingSVG className={classes.whatdoingArticleSVG} />
          </div>
          <div>
            <div className={classes.whatdoingContentbox}>
              <div>
                <RiCodeSSlashFill className={classes.whatdoingArticleicon} />
              </div>
              <div>
                <span className={classes.whatdoingArticleTitle}>
                  Coding Boot Camp
                </span>
              </div>
              <div>
                <article className={classes.whatdoingArticle}>
                  As a community, we believe in exchanging our ideas and work.
                  we organize Bootcamp with the help of our community members
                  present across the globe.
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatDoing;
