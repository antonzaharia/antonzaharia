import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import gsap from "gsap";
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("wrapper")
);

gsap.fromTo(
  ".inner",
  { height: 0, opacity: 0 },
  { height: "auto", opacity: 1, duration: 0.8 }
);
