import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// contexts
import { LanguageProvider } from "./context/LanguageProvider";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
