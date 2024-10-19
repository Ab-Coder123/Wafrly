import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './modules/Login/Login';
import Signup from './modules/SignUp/Signup';
// style
import '../src/App.css'
import Paying from './modules/Paying/Paying';
import WhoWe from './modules/WhoWe/WhoWe';
import Filterproduct from './modules/FilterProduct/Filterproduct';
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
      path : '/modules/Paying/Paying' , 
      element: <Paying/> ,
    },
    
    {
      path : '/modules/WhoWe/WhoWe' , 
      element: <WhoWe/> ,
    },
    {
      path : '/modules/FilterProduct/Filterproduct'  , 
      element: <Filterproduct/> ,
    },
  ]);


  // استخدام RouterProvider لتوفير الرواتر إلى التطبيق
  return <RouterProvider router={router} />;
}

export default App;
