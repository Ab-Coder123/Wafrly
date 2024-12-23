import React, { useState } from "react";
import { Products } from "../../Constant/index";
import PropTypes from "prop-types";
import Slider from "react-slick"; // تأكد من استيراد Slider هنا
import img1 from "../../assets/Images/New folder/logo (1).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faStar, faEye, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

export const ProductCard = ({ popularproduct }) => {
  const [visibleIcons, setVisibleIcons] = useState({}); // الكائن يحمل حالة الإظهار لكل `id`

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
    <Slider {...settings}>
      {popularproduct.map((product) => (
        <div key={product.id} className="">
          <div className=" w-[100%] md:w-[85%] lg:w-[90%] p-5 mx-auto overflow-hidden  transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2">
            {/* الأيقونات الجانبية */}

            <div
              key={product.id}
              className={`absolute top-5 right-0 flex flex-col items-center gap-4 p-2 pb-4 bg-gray-50 rounded-r-lg transition-transform duration-300 
    ${visibleIcons[product.id] ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
  `}
            >
              <button
                onClick={() => {
                  console.log("Facebook clicked");
                }}
                className="hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </button>

              <button
                onClick={() => {
                  console.log("Like clicked");
                }}
                className="hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faHeart} size="2" />
              </button>

              <button
                onClick={() => {
                  console.log("Share clicked");
                }}
                className="hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faShareAlt} size="2" />
              </button>

              <button
                onClick={() => {
                  console.log("View clicked");
                }}
                className="hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faEye} size="2" />
              </button>
            </div>

            {/* زر الإظهار/الإخفاء */}
            <button
              onClick={() =>
                setVisibleIcons((prev) => ({
                  ...prev,
                  [product.id]: !prev[product.id], // عكس الحالة للمنتج الحالي
                }))
              }
              className="absolute right-0 bottom-40 transform -translate-y-1/2 bg-gray-100 p-2 rounded-l-lg hover:bg-gray-300 transition-colors duration-300"
            >
              {visibleIcons[product.id] ? (
                <FontAwesomeIcon icon={faArrowRight} size="l" />
              ) : (
                <FontAwesomeIcon icon={faArrowLeft} size="l" />
              )}
            </button>

            <div className="py-10 bg-gray-100 rounded-md">
              <img
                src={product.imageproduct}
                alt={product.title}
                className="object-cover h-32 mx-auto"
              />

            </div>
            <div className=" overflow-hidden py-3 flex flex-col justify-start ">
              <h3 className="mb-4 text-right text-l font-semibold text-gray-800">
                {product.title}
              </h3>
              <div className="flex justify-end p-1  items-center gap-3 ">
                <span className="text-[#C54442] font-semibold">${product.span2}</span>
                <span className="bg-[#061432] p-0.5 px-2 text-white rounded-md">${product.span1}</span>
              </div>
              <Link to='/modules/ProductDetailsPage/ProductDetailsPage' className="mx-auto">
                <button className="px-4 py-2 mt-5 text-white transition-colors duration-300 bg-[#C54442] rounded hover:bg-[#af3735]">
                  أضف الى العربة
                </button>
              </Link>

            </div>


          </div>
        </div>
      ))}
    </Slider>
  );
};

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

const Popproduct = () => {
  return (
    <section className="py-12 font-cairo px-0 lg:px-20">
      <div className="container  px-6 mx-auto">
        <div className="flex flex-row justify-start gap-4">
          <img src={img1} className="h-10" alt="" />
          <h2 className="mb-12 text-4xl font-bold font-serif text-gray-800">
            احدث المنتجات
          </h2>
        </div>
        <ProductCard popularproduct={Products} />

        <div className="flex items-center justify-center py-10">
          <Link to='/modules/FilterProduct/Filterproduct'>
            <button className="bg-[#C54442]  hover:bg-[#bd413f] p-3 rounded-md text-white font-bold ">مشاهده جميع المنتجات </button>
          </Link>
        </div>
        <div className="my-12 w-[90%] flex mx-auto h-0.5 bg-gray-300"></div>

      </div>
    </section>
  );
};

export default Popproduct;
