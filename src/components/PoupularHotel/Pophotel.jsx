import React, { useState } from "react";
import { Products } from "../../Constant/index";
import PropTypes from "prop-types";
import Slider from "react-slick"; // تأكد من استيراد Slider هنا
import img1 from "../../assets/Images/New folder/logo (1).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faStar, faEye, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

const Populars = ({ popularproduct }) => {
  const [showIcons, setShowIcons] = useState(false);

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
          <div className=" w-[75%] p-5 mx-auto overflow-hidden  transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2">
            {/* الأيقونات الجانبية */}
            <div
              className={`absolute top-5 right-0 flex flex-col items-center gap-4 p-2 pb-4 bg-gray-50 rounded-r-lg transition-transform duration-300 ${showIcons ? ' transtion transition-opacity translate-x-0 ' : ' opacity-0 transition transition-opacity'
                }`}
            >
              <button
                onClick={() => {
                  // يمكنك إضافة وظائف إضافية هنا
                  console.log('Like clicked');
                }}
                className=" hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faHeart} size="l" />
              </button>
              <button
                onClick={() => {
                  // يمكنك إضافة وظائف إضافية هنا
                  console.log('Share clicked');
                }}
                className=" hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faShareAlt} size="l" />
              </button>
              <button
                onClick={() => {
                  // يمكنك إضافة وظائف إضافية هنا
                  console.log('Favorite clicked');
                }}
                className=" hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faStar} size="l" />
              </button>
              <button
                onClick={() => {
                  // يمكنك إضافة وظائف إضافية هنا
                  console.log('View clicked');
                }}
                className=" hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faEye} size="l" />
              </button>
            </div>

            {/* زر اظهار/اخفاء الأيقونات */}
            <button
              onClick={() => setShowIcons(!showIcons)}
              className="absolute right-0 bottom-40 transform -translate-y-1/2 bg-gray-100 p-2 rounded-l-lg hover:bg-gray-300 transition-colors duration-300"
            >
              {showIcons ? <FontAwesomeIcon icon={faArrowRight} size="l" />
                : <FontAwesomeIcon icon={faArrowLeft} size="l" />}
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

              <button className="px-4 py-2 mt-5 text-white transition-colors duration-300 bg-[#C54442] rounded hover:bg-[#af3735]">
                أضف الى العربة              </button>
            </div>


          </div>
        </div>
      ))}
    </Slider>
  );
};

Populars.propTypes = {
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
    <section className="py-12  font-cairo">
      <div className="container  px-6 mx-auto">
        <div className="flex flex-row justify-start gap-4">
          <img src={img1} className="h-10" alt="" />
          <h2 className="mb-12 text-4xl font-bold font-serif text-gray-800">
            احدث المنتجات
          </h2>
        </div>
        <Populars popularproduct={Products} />

        <div className="flex items-center justify-center py-10">
          <button className="bg-[#C54442]  hover:bg-[#bd413f] p-3 rounded-md text-white font-bold ">مشاهده جميع المنتجات </button>
        </div>
        <div className="my-12 w-[90%] flex mx-auto h-0.5 bg-gray-300"></div>

      </div>
    </section>
  );
};

export default Popproduct;
