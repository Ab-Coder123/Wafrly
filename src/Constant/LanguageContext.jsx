import React, { createContext, useState, useEffect } from "react";

// إنشاء Context جديد
export const LanguageContext = createContext();

// مكون يوفر الـ Context لكل مكونات التطبيق
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar");

  // تغيير اتجاه النص واللغة
  useEffect(() => {
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
  }, [language]);

  // دالة لتغيير اللغة
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
