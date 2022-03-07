import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import FindPW from "./pages/FindPW";

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
