import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./context/loginAuthentication/AuthProvider";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AuthProvider>
        <App />
      </AuthProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
