import React from "react";
import classes from "./Navbar.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { signUserOut } from "../../firebase/firebase";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  //console.log(currentUser?.email);

  return (
    <nav className={classes.navContainer}>
      <div>
        <Link to="/" className={classes.navLink}>
          <img
            src="https://daily-now-res.cloudinary.com/image/upload/v1614088267/landing/Daily.dev_logo.png"
            alt="logo"
            className={classes.navLogo}
          />
        </Link>
      </div>

      <div className={classes.navLinks}>
        <Link to="/services" className={classes.navLink}>
          <div>
            <span className={classes.navLinksName}>Service</span>
          </div>
        </Link>

        <Link to="/about-us" className={classes.navLink}>
          <div>
            <span className={classes.navLinksName}>About us</span>
          </div>
        </Link>

        {currentUser ? (
          <Link to="/login" className={classes.navLink}>
            <div>
              <span className={classes.navLinksName} onClick={signUserOut}>
                Logout
              </span>
            </div>
          </Link>
        ) : (
          <Link to="/login-page" className={classes.navLink}>
            <div>
              <span className={classes.navLinksName}>Login</span>
            </div>
          </Link>
        )}
      </div>
    </nav>
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
