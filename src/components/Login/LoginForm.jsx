import React from "react";
import classes from "./Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInAuthUserWithEmailAndPassword } from "../../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginImage from "../../assets/images/loginimg.png";
import Header from "../Header/Header";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginForm = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      toast.success("You are logged in!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <>
      <Header heading="Login with your credentials" />
      <div className={classes.loginContainer}>
        <div>
          <img src={LoginImage} alt="login" className={classes.loginImage} />
        </div>

        <div>
          <form className={classes.loginFormbox}>
            <div className={classes.loginInputBox}>
              <label htmlFor="email" className={classes.loginLabel}>
                Email
              </label>
              <input
                className={classes.loginInput}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={classes.loginInputBox}>
              <label htmlFor="password" className={classes.loginLabel}>
                Password
              </label>
              <input
                className={classes.loginInput}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={classes.loginButtonBox}>
              <button className={classes.loginButton} onClick={loginForm}>
                Login
              </button>
            </div>
            <div className={classes.loginButtonBox}>
              <Link to="/register-page" className="navLink">
                <button className={classes.registerButton}>Register</button>
              </Link>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginForm;

/**
 <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
    >
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button onClick={loginForm}>Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
 */
