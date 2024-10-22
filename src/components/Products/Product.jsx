import React from "react";
import { Products } from "../../Constant/index";
import PropTypes from "prop-types";
import img1 from "../../assets/Images/New folder/logo (1).png";
import { ProductCard } from "../PoupularHotel/Pophotel";
import { Link } from "react-router-dom";


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


const Product = () => {
  return (
    <>
      <section className="py-12 font-cairo">
        <div className="container  px-6 mx-auto">
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="flex gap-3">
              <img src={img1} className="h-10" alt="" />
              <h2 className="mb-12 text-4xl font-bold font-serif text-gray-800">
                المنتجات
              </h2>
            </div>

            {/*  */}
            <div className="">
              <Link to='/modules/FilterProduct/Filterproduct'>
                <button className="bg-[#C54442]  hover:bg-[#bd413f] p-3 rounded-md text-white font-bold ">المزيد</button>
              </Link>
            </div>

          </div>
          <ProductCard popularproduct={Products} />

        </div>
      </section>
    </>
  );
}

export default Product;
