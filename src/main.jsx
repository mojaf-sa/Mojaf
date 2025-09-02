// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './style.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
