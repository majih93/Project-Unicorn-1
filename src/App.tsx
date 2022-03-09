import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import JoinPage from "./pages/Login/JoinPage";
import FindPW from "./pages/Login/FindPW";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/findpw" element={<FindPW />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
