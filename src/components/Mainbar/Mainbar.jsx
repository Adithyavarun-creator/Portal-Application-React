import React from "react";
import classes from "./Mainbar.module.css";
import { BsCurrencyDollar } from "react-icons/bs";

const Mainbar = () => {
  return (
    <div className={classes.mainbarContainer}>
      <div>
        <div className={classes.mainbarBox1}>
          <div>
            <h2 className={classes.mainbarHeading}>Recent Pays</h2>
          </div>
          <div className={classes.mainbarPriceList}>
            <span>
              <BsCurrencyDollar className={classes.mainbarPriceicon} />
            </span>
            <span className={classes.mainbarPricename}>To Studio</span>
            <span className={classes.mainbarPricename}>$ 250.00</span>
          </div>

          <div className={classes.mainbarPriceList}>
            <span>
              <BsCurrencyDollar className={classes.mainbarPriceicon} />
            </span>
            <span className={classes.mainbarPricename}>To Studio</span>
            <span className={classes.mainbarPricename}>$ 250.00</span>
          </div>

          <div className={classes.mainbarPriceList}>
            <span>
              <BsCurrencyDollar className={classes.mainbarPriceicon} />
            </span>
            <span className={classes.mainbarPricename}>To Studio</span>
            <span className={classes.mainbarPricename}>$ 250.00</span>
          </div>
        </div>
      </div>

      <div>
        <div className={classes.mainbarBox1}>
          <div>
            <h2 className={classes.mainbarHeading}>Recent Pays</h2>
          </div>
          <div className={classes.mainbarPriceList}>
            <span>
              <BsCurrencyDollar className={classes.mainbarPriceicon} />
            </span>
            <span className={classes.mainbarPricename}>To Studio</span>
            <span className={classes.mainbarPricename}>$ 250.00</span>
          </div>

          <div className={classes.mainbarPriceList}>
            <span>
              <BsCurrencyDollar className={classes.mainbarPriceicon} />
            </span>
            <span className={classes.mainbarPricename}>To Studio</span>
            <span className={classes.mainbarPricename}>$ 250.00</span>
          </div>

          <div className={classes.mainbarPriceList}>
            <span>
              <BsCurrencyDollar className={classes.mainbarPriceicon} />
            </span>
            <span className={classes.mainbarPricename}>To Studio</span>
            <span className={classes.mainbarPricename}>$ 250.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
