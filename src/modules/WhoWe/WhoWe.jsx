import React from 'react';
import { WhoWedatas } from '../../Constant/index';
import PropTypes from "prop-types";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const WhoWedata = ({ WhosProp }) => {
    const Whodata1 = WhosProp.find((whosProp) => whosProp.id === '1');
    const Whodata2 = WhosProp.find((whosProp) => whosProp.id === '2');
    const Whodata3 = WhosProp.find((whosProp) => whosProp.id === '3');
    const Whodata4 = WhosProp.find((whosProp) => whosProp.id === '4');
    const Whodata5 = WhosProp.find((whosProp) => whosProp.id === '5');
    const Whodata6 = WhosProp.find((whosProp) => whosProp.id === '6');
    const Whodata7 = WhosProp.find((whosProp) => whosProp.id === '7');

    return (
        <>
            <div className='flex flex-col px-0 lg:px-12  gap-4'>
                {/* div1 brach */}

                {Whodata1 &&
                    (
                        <div className=' flex flex-col items-start' key={Whodata1.id}>
                            <div className='pb-3 flex justify-center items-start gap-3'>
                                <img className='h-8' src={Whodata1.img} alt="" />
                                <h2 className='font-bold text-3xl'>{Whodata1.head}</h2>
                            </div>
                            <p className=' flex items-start text-gray-400 '>{Whodata1.praph}</p>
                        </div>
                    )

                }


                {/* div2 main */}

                <div className='flex flex-col md:flex-row items-start  gap-4 '>
                    {/* div1 brach */}

                    {Whodata2 &&
                        (
                            <div className=' flex flex-col items-start' key={Whodata1.id}>
                                <div className='pb-3 flex justify-center items-start gap-3'>
                                    <img className='h-8' src={Whodata2.img} alt="" />
                                    <h2 className='font-bold text-3xl'>{Whodata2.head}</h2>
                                </div>
                                <p className=' flex items-start text-gray-400 '>{Whodata2.praph}</p>
                            </div>
                        )

                    }
                    {/* div2 brach */}

                    {Whodata3 &&
                        (
                            <div className=' flex flex-col items-start' key={Whodata1.id}>
                                <div className='pb-3 flex justify-center items-start gap-3'>
                                    <img className='h-8' src={Whodata3.img} alt="" />
                                    <h2 className='font-bold text-3xl'>{Whodata3.head}</h2>
                                </div>
                                <p className=' flex items-start text-gray-400 '>{Whodata3.praph}</p>
                            </div>
                        )

                    }
                </div>


                <div className='py-8'>
                    {Whodata1 &&
                        (
                            <div className=' py-10 flex flex-col justify-center items-start' key={Whodata7.id}>
                                <div className='pb-3 flex justify-center items-start gap-3'>
                                    <img className='h-8' src={Whodata7.img} alt="" />
                                    <h2 className='font-bold text-3xl'>{Whodata7.head}</h2>
                                </div>
                            </div>
                        )

                    }

                    <div className='py-5 flex flex-col md:flex-row justify-center  md:justify-around items-center  md:items-start gap-y-8 md:gap-y-0'>
                        {Whodata4 &&
                            (
                                <div className='bg-gray-100 w-56 h-80 rounded-md flex flex-col items- justify-center' key={Whodata1.id}>
                                    <div className=' pt-5 relative left-10 pb-4 flex justify-center items-center gap-3'>
                                        <img className='h-52' src={Whodata4.img} alt="" />
                                        <div className='flex flex-col justify-center items-center gap-8'>
                                            <FontAwesomeIcon icon={faFacebookF} className="mr-2 text-l text-black" />
                                            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-l text-clack" />
                                            <FontAwesomeIcon icon={faTwitter} className="mr-2 text-l text-black" />

                                        </div>

                                    </div>
                                    <div className=' rounded-md flex flex-col pr-4 gap-y-3 items-start'>
                                        <h2 className='font-bold text-3xl'>{Whodata4.head}</h2>
                                        <p className=' flex items-start text-gray-400 pb-3'>{Whodata4.praph}</p>
                                    </div>

                                </div>
                            )

                        }


                        {Whodata5 &&
                            (
                                <div className='bg-gray-100 w-56 h-80 rounded-md flex flex-col items- justify-center' key={Whodata5.id}>
                                    <div className=' pt-5 relative left-10 pb-4 flex justify-center items-center gap-3'>
                                        <img className='h-52' src={Whodata5.img} alt="" />
                                        <div className='flex flex-col justify-center items-center gap-8'>
                                            <FontAwesomeIcon icon={faFacebookF} className="mr-2 text-l text-black" />
                                            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-l text-clack" />
                                            <FontAwesomeIcon icon={faTwitter} className="mr-2 text-l text-black" />

                                        </div>

                                    </div>
                                    <div className=' rounded-md flex flex-col pr-4 gap-y-3 items-start'>
                                        <h2 className='font-bold text-3xl'>{Whodata5.head}</h2>
                                        <p className=' flex items-start text-gray-400 pb-3'>{Whodata5.praph}</p>
                                    </div>

                                </div>
                            )

                        }


                        {Whodata6 &&
                            (
                                <div className='bg-gray-100 w-56 h-80 rounded-md flex flex-col items- justify-center' key={Whodata6.id}>
                                    <div className=' pt-5 relative left-10 pb-4 flex justify-center items-center gap-3'>
                                        <img className='h-52' src={Whodata6.img} alt="" />
                                        <div className='flex flex-col justify-center items-center gap-8'>
                                            <FontAwesomeIcon icon={faFacebookF} className="mr-2 text-l text-black" />
                                            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-l text-clack" />
                                            <FontAwesomeIcon icon={faTwitter} className="mr-2 text-l text-black" />

                                        </div>

                                    </div>
                                    <div className=' rounded-md flex flex-col pr-4 gap-y-3 items-start'>
                                        <h2 className='font-bold text-3xl'>{Whodata6.head}</h2>
                                        <p className=' flex items-start text-gray-400 pb-3'>{Whodata6.praph}</p>
                                    </div>

                                </div>
                            )

                        }

                    </div>






                </div>
            </div>
        </>
    );
}


WhoWedata.propTypes = {
    WhosProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            head: PropTypes.string.isRequired,
            praph: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const WhoWe = () => {
    return (
        <>
            <Navbar />
            <section className='font-cairo px-12 py-12'>
                <WhoWedata WhosProp={WhoWedatas} />
            </section>
            <Footer />
        </>
    );
}

export default WhoWe;
