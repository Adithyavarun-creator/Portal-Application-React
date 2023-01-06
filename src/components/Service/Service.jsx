import React from "react";
import classes from "./Service.module.css";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import Header from "../Header/Header";

const Service = () => {
  return (
    <>
      <Header heading="Our Services" />
      <div className={classes.serviceContainer}>
        <div className={classes.serviceGridbox}>
          <div className={classes.serviceIconPos}>
            <MdOutlineMiscellaneousServices className={classes.serviceIcons} />
          </div>
          <div>
            <h2 className={classes.serviceHeading}>Website Design</h2>
          </div>
          <div>
            <article className={classes.serviceArticle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              ratione. Ab rem, id debitis consequuntur reiciendis porro expedita
              odit a cupiditate esse aliquam cum inventore quo delectus
              accusamus dolor harum.
            </article>
          </div>
          <div className={classes.serviceIconPos}>
            <button className={classes.serviceReadMore}>Read More...</button>
          </div>
        </div>
        <div className={classes.serviceGridbox}>
          <div className={classes.serviceIconPos}>
            <MdOutlineMiscellaneousServices className={classes.serviceIcons} />
          </div>
          <div>
            <h2 className={classes.serviceHeading}>Website Design</h2>
          </div>
          <div>
            <article className={classes.serviceArticle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              ratione. Ab rem, id debitis consequuntur reiciendis porro expedita
              odit a cupiditate esse aliquam cum inventore quo delectus
              accusamus dolor harum.
            </article>
          </div>
          <div className={classes.serviceIconPos}>
            <button className={classes.serviceReadMore}>Read More...</button>
          </div>
        </div>

        <div className={classes.serviceGridbox}>
          <div className={classes.serviceIconPos}>
            <MdOutlineMiscellaneousServices className={classes.serviceIcons} />
          </div>
          <div>
            <h2 className={classes.serviceHeading}>Website Design</h2>
          </div>
          <div>
            <article className={classes.serviceArticle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              ratione. Ab rem, id debitis consequuntur reiciendis porro expedita
              odit a cupiditate esse aliquam cum inventore quo delectus
              accusamus dolor harum.
            </article>
          </div>
          <div className={classes.serviceIconPos}>
            <button className={classes.serviceReadMore}>Read More...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
