import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import JoinPage from "./pages/Login/JoinPage";
import FindPW from "./pages/Login/FindPW";
import HomePage from "./pages/Home/HomePage";
import HomePages from "./pages/Home/HomePages";
import AboutPage from "./pages/Home/AboutPage";
import LtvResult from "./pages/LtvCalculation/LtvResult";
import LtvInput from "./pages/LtvCalculation/LtvInput";
import LtvCalculator from "./pages/LtvCalculation/LtvCalculator";
import Footer from "./components/Home/common/Footer"
import HeadMenu from "./components/Home/common/HeadMenu";


function App() {
  return (
    <div className="App">
      <AboutPage/>
    </div>
  );
}

export default App;
