import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Payingdata } from '../../modules/Paying/Paying';
import imghead from '../../assets/Images/Profit/Group 1000005948 (1).png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { SidePay, Profitdata } from '../../Constant/index';
import img1 from '../../assets/Images/New folder/logo (1).png'


const Profitdatas = ({ ProfitProp }) => {

    return (
        <>

            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12'>
                {/* one div */}
                <div className=" col-span-12 flex flex-row justify-between gap-20 pt-12 lg:py-3">
                    <div className='flex  gap-3'>
                        <img src={img1} className="h-10" alt="" />
                        <h2 className="mb-12 text-4xl font-bold text-gray-800">
                            الطلبات النشطه(8)
                        </h2>
                    </div>
                    <div>
                        <img className='h-24' src={imghead} alt="" />
                    </div>
                </div>

                {/* two div */}
                <div className=' col-span-12 flex flex-col items-start justify-between gap-y-4 '>
                    <div className=' w-full'>
                        {ProfitProp.map((Profitprop) => {

                            return (
                                <div key={Profitprop.id} className={`flex justify-between items-center mb-4 shadow shadow-md  p-5 ${Profitprop.bg === 'green' ? 'bg-green-600 text-white' : 'bg-gray-200 '}`}>
                                    {/* 1 */}
                                    <div className='flex justify-start items-center gap-4'>
                                        <img src={Profitprop.imgicon} alt="" />
                                        <h2>{Profitprop.head}</h2>
                                    </div>
                                    {/* 2 */}
                                    <div>
                                        <span className={`${Profitprop.bg === 'green' ? 'text-white' : 'text-red-600'} font-bold`}>{Profitprop.price}</span>
                                    </div>
                                </div>
                            )
                        })

                        }
                    </div>
                </div>
            </div>

        </>
    );
}


Profitdatas.propTypes = {
    ProfitProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            imgicon: PropTypes.string.isRequired,
            head: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            bg: PropTypes.string.isRequired,
        })
    ).isRequired,
};


Payingdata.propTypes = {
    PayingdataProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            head: PropTypes.string.isRequired,
            Link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const Profit = () => {
    return (
        <>
            <Navbar />
            <section className='  font-cairo overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 px-0 sm:px-24 py-10'>
            <div className=' col-span-5 lg:col-span-3'>
            <Payingdata PayingdataProp={SidePay} />
                </div>
                <div className='col-span-9'>
                    <Profitdatas ProfitProp={Profitdata} />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Profit;
