import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { I18nProvider } from './i18n'
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <I18nProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </HelmetProvider>
)
