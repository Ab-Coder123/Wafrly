import React, { useState } from "react";
import PropTypes from "prop-types";
import { Section } from "../../Constant/index";



const Sectionsdata = ({ Sectionprop }) => {
  return (
    <>
      <div className="grid grid-cols-5 sm:grid-cols-12 md:grid-cols-12 gap-20 sm:gap-10 mx-0  md:mx-16 ">

        {Sectionprop.map((dataprop) => {
          return (
            <>
              <div key={dataprop.id} className=" Up w-40 flex flex-col col-span-2 md:col-span-2  items-center justify-center gap-3 border border-solid border-gray-300 cursor-pointer hover:text-white hover:bg-[#C54442] groub rounded-md p-5 ">
                <img src={dataprop.icon} alt="" className=" img p-3" />
                {/* padding هنا عشان لما يحصل hover يقد انه يستوعب ال حجم  */}
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
