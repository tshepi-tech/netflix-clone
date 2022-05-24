import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UIDProvider } from "state/UIDContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UIDProvider>
        <App />
      </UIDProvider>
    </BrowserRouter>
  </React.StrictMode>
);
