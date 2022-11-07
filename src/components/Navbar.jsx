import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user-context";
import { signUserOut } from "../firebase/firebase";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser?.email);

  return (
    <div>
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
    </div>
  );
};

export default Navbar;
