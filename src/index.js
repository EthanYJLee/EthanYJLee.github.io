import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss";
import "./index.css";

// i18n 설정 임포트
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
