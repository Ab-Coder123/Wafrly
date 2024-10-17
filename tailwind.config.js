// tailwind.config.js
module.exports = {
  // المسارات التي يستخدمها Tailwind
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    // يمكنك إضافة إضافات أخرى هنا
  ],
}


