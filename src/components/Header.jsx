import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideimg from '../assets/Images/New folder/sildimg.png'
import PropTypes from "prop-types";
import {sidedata} from "../Constant/index";
import { Link } from "react-router-dom";

const Sidebar = ({SideProp}) => {
  return (
    <>
      {SideProp.map((sideprop) => {
          return (
            <>
                <div id={sideprop.id} className="flex flex-col items-start justify-center "> 
                    <div className="flex flex-row items-center gap-4 mb-2">
                      <img src={sideprop.icon} alt="" />
                      <Link className="font-bold" to=''>{sideprop.li}</Link>
                    </div>
                </div>
            </>
          )
      })

      } 
    </>
  );
}



Sidebar.propTypes = {
  SideProp: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
          li: PropTypes.string.isRequired,
      })
  ).isRequired,
};



const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };


  return (
    <header className="py-10 font-cairo flex flex-col md:flex-row justify-center gap-28 items-start">
      {/* Static Text Over the Slider */}
      <section className="">
          <Sidebar SideProp={sidedata}/>
      </section>
      <div className="h-64 w-[1px] hidden sm:block   bg-gray-300"></div>
      {/* Slider with Images */}
      <div className="slider-item">
        <img src={slideimg} alt="Alex" className=" h-52 md:h-72   slider-img" />
      </div>

      
    </header>
  );
};

export default Header;
