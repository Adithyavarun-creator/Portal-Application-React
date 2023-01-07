import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { UserContext } from "./context/user-context";
import Quizzes from "./components/Quiz/Quizzes";
import Results from "./components/Results";
import Service from "./components/Service/Service";
import Footer from "./components/Footer/Footer";
import DashboardDesign from "./pages/DashboardDesign/DashboardDesign";
import AboutPage from "./pages/AboutPage/AboutPage";
import SolutionPage from "./pages/SolutionPage/SolutionPage";

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard-design" element={<DashboardDesign />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/our-solutions" element={<SolutionPage />} />
          <Route path="/testing-quiz" element={<Quizzes />} />
          <Route path="/results-score" element={<Results />} />
          <Route path="/services" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
