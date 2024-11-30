import React, { useState, useEffect } from 'react';
import { UseBouqoutdatas, SidePay } from "../../Constant/index";
import PropTypes from "prop-types";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Payingdata } from '../Paying/Paying';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlans } from '../../Statemanagment/Reducers/SubscripeSlice';





const UseBouqoutdata = ({ UseBouqoutdataProp }) => {
    const dispatch = useDispatch();
    const { plans, status, error } = useSelector((state) => state.plans);
    console.log(plans?.data[0]);
    useEffect(() => {
        dispatch(fetchPlans()); // استدعاء جلب البيانات عند التحميل
    }, [dispatch]);

    const [balance, setBalance] = useState(50); // القيمة الحالية للمحفظة (مثال)
    const UseBouqout1 = UseBouqoutdataProp.find((UseBouqoutprop) => UseBouqoutprop.id === '1');
    const UseBouqout2 = UseBouqoutdataProp.find((UseBouqoutprop) => UseBouqoutprop.id === '2');

    return (
        <>

            {UseBouqout1 &&
                (
                    <div key={UseBouqout1.id} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 items-start'>
                        <div className='py-5 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-x-28 lg:gap-x-36 items-start'>
                            <div className='flex items-start gap-7 col-span-5'>
                                <img src={UseBouqout1.logo} className='h-10' alt="" />
                                <h2 className='font-bold text-black text-3xl'>{UseBouqout1.head}</h2>
                            </div>
                            {/* 2 */}
                            <div className='col-span-3 w-fit  text-center bg-[#C54442] rounded-md items-center gap-1 p-1 flex'>
                                <img src={UseBouqout1.bouqoutimg} className='h-7' alt="" />
                                <h3 className=' p-1 text-xl text-white'>{UseBouqout1.bouqout}</h3>
                            </div>
                        </div>



                        {/* div2  */}


                        <div className=' col-span-10 border border-[#C54442] border-solid border-2 p-4 rounded-xl '>

                            <div className='py-5 flex items-start gap-40 items-start'>
                                <div className='flex items-start gap-3 col-span-3'>
                                    <img src={UseBouqout1.star} alt="" />
                                    <h2 className='font-bold text-black text-xl'>{UseBouqout1.span}</h2>
                                </div>
                                <div className='col-span-2 text-center'>
                                    <span className='text-[#C54442] font-bold'>{UseBouqout1.month}</span>
                                </div>
                            </div>
                            {/* line */}
                            <div className='mb-5 w-full h-0.5 bg-gray-300'></div>
                            <div className='flex flex-col gap-y-5'>
                                <p className='text-gray-400'>
                                    {/* <span className='text-[#C54442] font-bold'>{plans?.data[0].description}ر.ل / شهريا </span> */}
                                    <span className='text-[#C54442] font-bold'>{plans?.data[0].description}</span>

                                </p>
                                <div className=''>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-3 items-center'>
                                        {/* progress */}
                                        <ProgressBar className="col-span-8" value={balance} max={100} />

                                        {/* span value */}
                                        <span className='col-span-4 lg:col-span-1'>{UseBouqout1.span2}</span>

                                        <button
                                            className="col-span-1 px-4 py-1 bg-[#C54442] text-white rounded-md"
                                            onClick={() => setBalance((prev) => (prev >= 100 ? 0 : prev + 10))}
                                        >
                                            تجديد
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                )
            }

            {UseBouqout2 &&
                <div>
                    <div className='flex flex-col py-7 items-start gap-y-3'>
                        <div className='flex  gap-6'>
                            <img src={UseBouqout2.logo} alt="UseBouqout2" />
                            <h2 className='font-bold text-black text-3xl'>{UseBouqout2.head}</h2>
                        </div>
                        <p className='text-gray-400'>{UseBouqout2.prah}</p>
                    </div>

                    {/* cards */}
                    <div className='flex flex-col md:flex-row items-start justify-start gap-3'>
                        {/* div1 */}
                        <div className='flex justify-between  p-2 flex-col items-start border border-[#C54442] border-r border-t border-b rounded-md'>

                            {/* 1 */}
                            <div className='py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-start'>
                                <div className='flex items-start gap-3 col-span-2'>
                                    <img src={UseBouqout2.cardimg1} alt="" className='h-7' />
                                    <h2 className='font-bold text-black text-l'>{UseBouqout2.cardhead1}</h2>
                                </div>
                                <div className='col-span-2 flex items-start justify-start gap-1 text-center'>
                                        <span className='text-[#C54442] font-extrabold'>{plans?.data[0].monthly_price                                        }</span>
                                        <span className=' font-bold'>ر.ل /سنويا </span>
                                </div>
                            </div>

                            {/* 2 */}
                            <p className='py-3 text-gray-400 font-bold text-sm w-80'>{UseBouqout2.cardprah1}</p>

                            {/* 3 */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center'>
                                {/* progress */}
                                <ProgressBar className="col-span-2" value={balance} max={100} />

                                {/* span value */}
                                <span className='col-span-1'>{UseBouqout2.progresscard1}</span>

                                <button
                                    className="col-span-1 px-4 py-1 bg-[#C54442] text-white rounded-md"
                                    onClick={() => setBalance((prev) => (prev >= 100 ? 0 : prev + 10))}
                                >
                                    تجديد
                                </button>
                            </div>
                        </div>

                        {/* div2 */}
                        <div className='flex justify-between  p-2 flex-col items-start border border-[#C54442] border-r border-t border-b rounded-md'>

                            {/* 1 */}
                            <div className='py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-start'>
                                <div className='flex items-start gap-3 col-span-2'>
                                    <img src={UseBouqout2.cardimg2} alt="" className='h-7' />
                                    <h2 className='font-bold text-black text-l'>{UseBouqout2.cardhead2}</h2>
                                </div>
                                <div className='col-span-2 flex items-start justify-start gap-1 text-center'>
                                        <span className='text-[#C54442] font-extrabold'>{plans?.data[0].yearly_price}</span>
                                        <span className=' font-bold'>ر.ل /سنويا </span>
                                </div>
                            </div>

                            {/* 2 */}
                            <p className='py-3 text-gray-400 font-bold text-sm w-80'>{UseBouqout2.cardprah2}</p>

                            {/* 3 */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center'>
                                {/* progress */}
                                <ProgressBar className="col-span-2" value={balance} max={100} />

                                {/* span value */}
                                <span className='col-span-1'>{UseBouqout2.progresscard2}</span>

                                <button
                                    className="col-span-1 px-4 py-1 bg-[#C54442] text-white rounded-md"
                                    onClick={() => setBalance((prev) => (prev >= 100 ? 0 : prev + 10))}
                                >
                                    تجديد
                                </button>
                            </div>
                        </div>


                    </div>

                </div>
            }

        </>
    );




}

const ProgressBar = ({ value, max, className }) => {
    return (
        <div className={`relative w-full h-4 bg-red-200 rounded-lg ${className}`}>
            <div
                className="absolute top-0 right-0 h-full bg-red-500 rounded-lg"
                style={{ width: `${(value / max) * 100}%` }}
            />
            <span className="absolute right-2 text-xs text-gray-100">{`${value}%`}</span>

        </div>
    );
};

UseBouqoutdata.propTypes = {
    UseBouqoutdataProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
            head: PropTypes.string.isRequired,
            bouqout: PropTypes.string.isRequired,
            star: PropTypes.string.isRequired,
            span: PropTypes.string.isRequired,
            bouqoutimg: PropTypes.string.isRequired,
            month: PropTypes.string.isRequired,
            prah: PropTypes.string.isRequired,
            span2: PropTypes.string.isRequired,
            btn: PropTypes.string.isRequired,
            head2: PropTypes.string.isRequired,
            prah2: PropTypes.string.isRequired,
        })
    ).isRequired,
};

Payingdata.propTypes = {
    PayingdataProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            head: PropTypes.string.isRequired,
        })
    ).isRequired,
};



const UseBouqout = () => {
    return (
        <>
            <Navbar />
            <div className='font-cairo overflow-hidden'>
                <section className='  font-cairo overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 px-0 sm:px-24 py-10'>
                    <div className=' col-span-5 lg:col-span-3'>
                        <Payingdata PayingdataProp={SidePay} />
                    </div>

                    <div className=' col-span-10 lg:col-span-9'>
                        <UseBouqoutdata UseBouqoutdataProp={UseBouqoutdatas} />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default UseBouqout;
