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
      <Link to="/" className={classes.navLink}>
        <div>
          <img
            src="https://daily-now-res.cloudinary.com/image/upload/v1614088267/landing/Daily.dev_logo.png"
            alt="logo"
            className={classes.navLogo}
          />
        </div>
      </Link>

      <div className={classes.navLinks}>
        <div>
          <span className={classes.navLinksName}>Home</span>
        </div>

        <Link to="/services" className={classes.navLink}>
          <div>
            <span className={classes.navLinksName}>Service</span>
          </div>
        </Link>

        <div>
          <span className={classes.navLinksName}>About us</span>
        </div>

        <div>
          <span className={classes.navLinksName}>Login</span>
        </div>
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
