import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { Categoryimg } from "../../Constant/index";

const Categorys = ({Categorycard}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
        <Slider {...settings}>
          {Categorycard.map((img) => (
            <div key={img.id} className="px-1">
              <div className="overflow-hidden transition-all duration-300 transfor rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2">
                <img src={img.Category} className="object-cover w-full h-full" alt={`Story`} />
                
                </div>
              </div>
          ))}
        </Slider>
    </>

 
  );
}

Categorys.propTypes = {
  Categorycard: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      Category: PropTypes.string.isRequired,
    })
  ).isRequired,
};


const Category = () => {
  return (
       <section className="py-12">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-gray-800">Our Services</h2>
          <Categorys Categorycard={Categoryimg}/>        
        </div>
        </section>
  )
}

export default Category