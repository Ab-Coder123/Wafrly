import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './modules/Login/Login';
import Signup from './modules/SignUp/Signup';
import ForgetPassword from './modules/Forgetpass/Forgetpass';
import Verifycode from './modules/Verfycode/Verifycode';
import ContactUs from './modules/ContactUs/ContactUs';
// style
import '../src/App.css'
import Congratu from './modules/Congratulations/Congratu';
import Paying from './modules/Paying/Paying';
function App() {
  // تعريف الرواتر
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path : '/modules/Login/Login' , 
      element: <Login /> ,
    } ,
    {
      path : '/modules/SignUp/Signup' , 
      element: <Signup /> ,
    } ,
    {
      path : '/modules/Forgetpass/Forgetpass' , 
      element: <ForgetPassword /> ,
    } ,
    {
      path : '/modules/Verfycode/Verifycode' , 
      element: <Verifycode/> ,
    },
    {
      path : '/modules/Congratulations/Congratu' , 
      element: <Congratu/> ,
    },
    
    {
      path : '/modules/ContactUs/ContactUs' , 
      element: <ContactUs/> ,
    },
    {
      path : '/modules/Paying/Paying' , 
      element: <Paying/> ,
    },
    

  ]);


  // استخدام RouterProvider لتوفير الرواتر إلى التطبيق
  return <RouterProvider router={router} />;
}

export default App;
