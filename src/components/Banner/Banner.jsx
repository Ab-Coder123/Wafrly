import React from 'react';
import { Bannerdatas } from '../../Constant/index'
import PropTypes from "prop-types";


const Bannerdata = ({ BannerProp }) => {
    return (
        <>
            {BannerProp.map((bannerprop) => {
                return (
                    <>
                        <div className='flex justify-center items-center  gap-32'>

                            <div className=' flex flex-col items-start mr-3 text-white'>

                                <div className='flex items-start justify-start'>
                                    <span className='text-[#C54442] '>{bannerprop.span}</span>
                                </div>

                                <div className=' flex flex-col items-start'>
                                    <h2 className='pt-10 pb-5 font-bold text-3xl text-right text-white'>{bannerprop.head}</h2>
                                    <ul className='flex justify-center items-center gap-4 '>
                                        <li className=' w-14 flex flex-col justify-center items-center bg-gray-200 border border-none rounded-full py-1 px-4'>
                                            <span className='text-black font-bold '>35</span> 
                                            <span className='text-gray-800'>يوم</span>
                                        </li>
                                        <li className='w-14  flex flex-col justify-center items-center bg-gray-200 border border-none rounded-full py-1 px-4'>
                                            <span className='text-black font-bold '>23</span> 
                                            <span className='text-gray-800'>ساعة</span>
                                        </li>
                                        <li className='w-14 flex flex-col justify-center items-center bg-gray-200 border border-none rounded-full py-1 px-4'>
                                            <span className='text-black font-bold '>59</span> 
                                            <span className='text-gray-800'>دقيقة</span>
                                        </li>
                                        <li className='w-14 flex flex-col justify-center items-center bg-gray-200 border border-none rounded-full py-1 px-4'>
                                            <span className='text-black font-bold '>05</span>
                                            <span className='text-gray-800'>ثانيه</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className=' my-5'>
                                    <button className=' bg-[#C54442] p-3 rounded-md'>{bannerprop.button}</button>

                                </div>
                            </div>
                            <div>
                                <img className='h-84' src={bannerprop.imgbanner} alt="" />
                            </div>

                        </div>
                    </>
                )
            })

            }
        </>
    );
}

Bannerdata.propTypes = {
    BannerProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            imgbanner: PropTypes.string.isRequired,
            span: PropTypes.string.isRequired,
            head: PropTypes.string.isRequired,
            button: PropTypes.string.isRequired,

        })
    ).isRequired,
};



const Banner = () => {
    return (
        <>
            <section className='font-cairo my-10 bg-black w-[80%] flex mx-auto rounded-md '>
                <Bannerdata BannerProp={Bannerdatas} />
            </section>
        </>
    );
}

export default Banner;

