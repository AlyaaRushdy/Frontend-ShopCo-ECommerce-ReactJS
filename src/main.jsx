import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./css/style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core/dist/umd/popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "sweetalert2/dist/sweetalert2.css";
import "sweetalert2/dist/sweetalert2.all.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
