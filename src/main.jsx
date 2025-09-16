import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';   // ← add this
import App from './App.jsx';
import './style.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">                     {/* ← wrap App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
