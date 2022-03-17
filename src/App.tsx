import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import JoinPage from "./pages/Login/JoinPage";
import FindPW from "./pages/Login/FindPW";
import ResetPassword from "./pages/Login/ResetPassword";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/Home/AboutPage";
import LtvResult from "./pages/LtvCalculation/LtvResult";
import LtvInput from "./pages/LtvCalculation/LtvInput";
import LtvCalculator from "./pages/LtvCalculation/LtvCalculator";
import { AuthContextProvider } from "./context/loginAuthentication/AuthContext";
import { FirestoreContextProvider } from "./context/firestore/FirestoreContext";
import CheckTermAgreement from "./pages/LtvCalculation/CheckTermAgreement";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AuthContextProvider>
        <FirestoreContextProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/findpw" element={<FindPW />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/*" element={<HomePage />} />
            <Route path="/ltvCal/result" element={<LtvResult />} />
            <Route path="/ltvCal/input" element={<LtvInput />} />
            <Route path="/ltvCal/*" element={<LtvCalculator />} />
            <Route path="/term-agree" element={<CheckTermAgreement />} />
          </Routes>
        </FirestoreContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
