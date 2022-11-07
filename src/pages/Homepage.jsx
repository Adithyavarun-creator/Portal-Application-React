import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user-context";

const Homepage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Questionnaire</h1>

      <Link to="/register-page">
        <h2>Visit to Register Page</h2>
      </Link>
      <Link to="/login-page">
        <h2>Visit to Login Page</h2>
      </Link>
      {currentUser && (
        <Link to="/dashboard">
          <h2>Visit to dashboard</h2>
        </Link>
      )}
    </div>
  );
};

export default Homepage;
