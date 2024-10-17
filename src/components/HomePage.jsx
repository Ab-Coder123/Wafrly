import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "./Header";
import Pophotel from "./PoupularHotel/Pophotel";
import Footer from './Footer/Footer'
import Stories from './Sections/Sections'
import Product from "./Products/Product";
import Banner from "./Banner/Banner";
import Allproduct from "./Allprod/Allproduct";
import NewsProduct from "./NewsProduct/NewsProduct";
const HomePage = () => {
  return (
    <div className='text-black bg-white  '>
    <Navbar />
    <Header/> 
    <Pophotel/>
    <Stories/>
    <Product/>
    <Banner/>
    <Allproduct/>
    <NewsProduct/>
    <Footer/>
  </div>
  );
};

export default HomePage;
