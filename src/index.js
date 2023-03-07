import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// React-Bootstrap imports
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./bootstrap.css";

/* Bootstrap Icons Import */
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

// local CSS imports
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
