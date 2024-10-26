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
import UseBouqout from './modules/UseBouqout/UseBouqout';
import ProductDetailsPage from './modules/ProductDetailsPage/ProductDetailsPage';
import Profitratio from './modules/Profitratio/Profitratio';
import Oeders from './modules/Orders/Oeders';
import Profit from './modules/Profit/Profit';
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

    {
      path : '/modules/UseBouqout/UseBouqout'  , 
      element: <UseBouqout/> ,
    },

    {
      path : '/modules/ProductDetailsPage/ProductDetailsPage'  , 
      element: <ProductDetailsPage/>,
    },

    
    {
      path : '/modules/Profitratio/Profitratio'  , 
      element: <Profitratio />,
    },

    {
      path : '/modules/Orders/Oeders'  , 
      element:<Oeders />,
    },
    {
      path : '/modules/Profit/Profit'  , 
      element:<Profit/>,
    },
  ]);


  // استخدام RouterProvider لتوفير الرواتر إلى التطبيق
  return <RouterProvider router={router} />;
}

export default App;
