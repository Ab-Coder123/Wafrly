import React from 'react'; // إضافة استيراد React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './Constant/LanguageContext.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <LanguageProvider>
      <App  />
    </LanguageProvider> ,

  </StrictMode>,
)
