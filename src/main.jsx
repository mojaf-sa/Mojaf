import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const el = document.getElementById("root");
if (!el) {
  console.error("Root element #root not found. Check index.html.");
} else {
  const root = createRoot(el);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
