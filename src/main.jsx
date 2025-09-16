import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'   // ensure CSS is bundled

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename=\"/\"><App /></BrowserRouter>

  </React.StrictMode>
)
