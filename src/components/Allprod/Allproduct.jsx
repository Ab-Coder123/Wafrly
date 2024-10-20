import React, { useState } from "react";
import { Products } from "../../Constant/index";
import PropTypes from "prop-types";
import Slider from "react-slick"; // تأكد من استيراد Slider هنا
import img1 from "../../assets/Images/New folder/logo (1).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faStar, faEye, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { ProductCard } from "../PoupularHotel/Pophotel";




ProductCard.propTypes = {
    popularproduct: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageproduct: PropTypes.string.isRequired,
        span1: PropTypes.string.isRequired,
        span2: PropTypes.string.isRequired,
  
      })
    ).isRequired,
  };


const Allproduct = () => {
    return (
        <section className="py-12  font-cairo">
          <div className="container  px-6 mx-auto">
            <div className="flex flex-row justify-start gap-4">
              <img src={img1} className="h-10" alt="" />
              <h2 className="mb-12 text-4xl font-bold font-serif text-gray-800">
                احدث المنتجات
              </h2>
            </div>
            <ProductCard popularproduct={Products} />
            <ProductCard popularproduct={Products} />
    
            <div className="flex items-center justify-center py-10">
              <button className="bg-[#C54442]  hover:bg-[#bd413f] p-3 rounded-md text-white font-bold ">مشاهده جميع المنتجات </button>
            </div>
            <div className="my-12 w-[90%] flex mx-auto h-0.5 bg-gray-300"></div>
    
          </div>
        </section>
    )
}

export default Allproduct;
