import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Header from "./Header";
import Pophotel from "./PoupularHotel/Pophotel";
import Footer from './Footer/Footer';
import Stories from './Sections/Sections';
import Product from "./Products/Product";
import Banner from "./Banner/Banner";
import Allproduct from "./Allprod/Allproduct";
import NewsProduct from "./NewsProduct/NewsProduct";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // إعادة توجيه المستخدم إذا لم يكن مسجل الدخول
      navigate("/modules/Login/Login");
    }
  }, [navigate]);

  return (
    <div className='text-black font-cairo bg-white overflow-hidden '>
      <Navbar />
      <Header />
      <Pophotel />
      <Stories />
      <Product />
      <Banner />
      <Allproduct />
      <NewsProduct />
      <Footer />
    </div>
  );
};

export default HomePage;
