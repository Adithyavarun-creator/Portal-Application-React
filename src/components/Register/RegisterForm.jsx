import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/user-context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../firebase/firebase";
import RegisterImage from "../../assets/images/registerimg.jpg";
import classes from "./Register.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const RegisterForm = () => {
  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [displayName, setdisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const registerForm = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(response.user);
      await createUserDocumentFromAuth(response.user, { displayName });
      navigate("/");

      //console.log(response);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.log(error);
    }
    toast.success("You are registered in our community!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={classes.registerContainer}>
        <div data-aos="fade-right">
          <form className={classes.registerForm}>
            <div className={classes.registerInputs}>
              <label className={classes.registerLabel} htmlFor="name">
                Name
              </label>
              <input
                className={classes.registerInput}
                id="name"
                type="text"
                value={displayName}
                onChange={(e) => setdisplayName(e.target.value)}
              />
            </div>

            <div className={classes.registerInputs}>
              <label className={classes.registerLabel} htmlFor="email">
                Email
              </label>
              <input
                className={classes.registerInput}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={classes.registerInputs}>
              <label className={classes.registerLabel} htmlFor="password">
                Password
              </label>
              <input
                className={classes.registerInput}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={classes.registerInputs}>
              <label
                className={classes.registerLabel}
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className={classes.registerInput}
                id="confirmPassword"
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
            <div className={classes.centerBox}>
              <button className={classes.registerButton} onClick={registerForm}>
                Register
              </button>
            </div>
          </form>
        </div>
        <div>
          <img
            src={RegisterImage}
            className={classes.registerImage}
            alt="registerimg"
          />
        </div>
      </div>
    </>
  );
};

export default RegisterForm;

/**
  <div style={{ marginTop: "40px" }}>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={displayName}
            onChange={(e) => setdisplayName(e.target.value)}
          />
        </div>

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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>
        <div>
          <button onClick={registerForm}>Register</button>
        </div>
      </form>
      <ToastContainer />
    </div>
 */
