import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import { UserContext } from "./context/user-context";
import Quizzes from "./components/Quizzes";
import Results from "./components/Results";

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/testing-quiz" element={<Quizzes />} />
        <Route path="/results-score" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
