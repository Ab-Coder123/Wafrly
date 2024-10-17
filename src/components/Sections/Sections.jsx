import React, { useState } from "react";
import PropTypes from "prop-types";
import { Section } from "../../Constant/index";



const Sectionsdata = ({ Sectionprop }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-10">

        {Sectionprop.map((dataprop) => {
          return (
            <>
              <div key={dataprop.id} className="flex flex-col items-center justify-center gap-3 border border-solid border-gray-300 cursor-pointer hover:text-white hover:bg-[#C54442] rounded-md p-5 w-40">
                <img src={dataprop.icon} alt="" className=" hover:filter hover:invert" />
                <h2>{dataprop.title}</h2>
              </div>
            </>
          )
        })

        }
      </div>

    </>
  );
}


Sectionsdata.propTypes = {
  Sectionprop: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Sections = () => {
  return (
    <>
      <section className="py-12 ">
        <Sectionsdata Sectionprop={Section} />
      </section>
    </>

  );
};

export default Sections;
