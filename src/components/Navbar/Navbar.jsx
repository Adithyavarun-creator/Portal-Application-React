import React from "react";
import classes from "./Navbar.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { signUserOut } from "../../firebase/firebase";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  //console.log(currentUser?.email);

  return (
    <>
      <nav className={classes.navContainer}>
        <div>
          <Link to="/" className="navLink">
            <img
              src="https://daily-now-res.cloudinary.com/image/upload/v1614088267/landing/Daily.dev_logo.png"
              alt="logo"
              className={classes.navLogo}
            />
          </Link>
        </div>

        <div className={classes.navLinks}>
          <Link to="/services" className="navLink">
            <div>
              <span className={classes.navLinksName}>Service</span>
            </div>
          </Link>

          <Link to="/about-us" className="navLink">
            <div>
              <span className={classes.navLinksName}>About us</span>
            </div>
          </Link>

          <Link to="/dashboard-design" className="navLink">
            <div>
              <span className={classes.navLinksName}>Dashboard Design</span>
            </div>
          </Link>

          {currentUser ? (
            <Link to="/login" className="navLink">
              <div>
                <span className={classes.navLinksName} onClick={signUserOut}>
                  Logout
                </span>
              </div>
            </Link>
          ) : (
            <Link to="/login-page" className="navLink">
              <div>
                <span className={classes.navLinksName}>Login</span>
              </div>
            </Link>
          )}
        </div>
      </nav>

      <div className={classes.navMobile}>
        <GiHamburgerMenu
          className={classes.mobMenuicon}
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {toggle && (
        <>
          <div className={classes.mobModalbox}>
            <div className={classes.mobMenuposition}>
              <CgClose
                className={classes.mobMenuicon}
                onClick={() => setToggle(false)}
              />
            </div>
            <div>
              <Link to="/" className="navLink">
                <span
                  className={classes.mobNavlist}
                  onClick={() => setToggle(false)}
                >
                  Home
                </span>
              </Link>
            </div>
            <div>
              <Link to="/services" className="navLink">
                <span
                  className={classes.mobNavlist}
                  onClick={() => setToggle(false)}
                >
                  Service
                </span>
              </Link>
            </div>
            <div>
              <Link to="/about-us" className="navLink">
                <span
                  className={classes.mobNavlist}
                  onClick={() => setToggle(false)}
                >
                  About us
                </span>
              </Link>
            </div>
            <div>
              <Link to="/login-page" className="navLink">
                <span
                  className={classes.mobNavlist}
                  onClick={() => setToggle(false)}
                >
                  Login
                </span>
              </Link>
            </div>
            <div>
              <Link to="/dashboard" className="navLink">
                <span
                  className={classes.mobNavlist}
                  onClick={() => setToggle(false)}
                >
                  Dashboard
                </span>
              </Link>
            </div>
            <div>
              <Link to="/dashboard-design" className="navLink">
                <span
                  className={classes.mobNavlist}
                  onClick={() => setToggle(false)}
                >
                  Dashboard Design
                </span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

/**
  <h1 style={{ textAlign: "center" }}>
        Hey {currentUser ? currentUser?.email : "Please login and access"}{" "}
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {currentUser ? (
          <button onClick={signUserOut}>Logout</button>
        ) : (
          <Link to="/login-page">
            <button>Login</button>
          </Link>
        )}
      </div>
 */
