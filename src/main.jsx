import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// React-Bootstrap imports
import "./bootstrap.css";

/* Bootstrap Icons Import */
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

// local CSS imports
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
