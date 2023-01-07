import React from "react";
import Header from "../Header/Header";
import classes from "./Solutions.module.css";
import { FaUniversity, FaUserTie } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";

const Solutions = () => {
  return (
    <>
      <Header heading="Who can Benefit from us 👍" />
      <div className={classes.solutionContainer}>
        <div className={classes.solutionBox}>
          <span className={classes.solutionIconbox}>
            <FaUniversity className={classes.solutionIcon} />
          </span>
          <span className={classes.solutionBoxname}>
            Colleges / Universities
          </span>
        </div>
        <div className={classes.solutionBox}>
          <span className={classes.solutionIconbox}>
            <FaUserTie className={classes.solutionIcon} />
          </span>
          <span className={classes.solutionBoxname}>
            Individual Professionals
          </span>
        </div>

        <div className={classes.solutionBox}>
          <span className={classes.solutionIconbox}>
            <BiBuildings className={classes.solutionIcon} />
          </span>
          <span className={classes.solutionBoxname}>
            E-Learning / Training Institutes
          </span>
        </div>
      </div>
    </>
  );
};

export default Solutions;
