import React from 'react'; // إضافة استيراد React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './Constant/LanguageContext.jsx';
import { Provider } from 'react-redux'; // استيراد Provider من react-redux
import store from './Statemanagment/Store/Store.jsx'; // تأكد من استيراد الـ Store بشكل صحيح

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* تغليف الـ Provider حول الـ App */}
  <LanguageProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LanguageProvider>
</Provider>
)
