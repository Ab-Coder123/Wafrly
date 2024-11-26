import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchprofite } from "../../Statemanagment/Reducers/Profit"; // استيراد الـ thunk
import { Payingdata } from '../Paying/Paying';

import imghead from '../../assets/Images/Profit/Group 1000005948 (1).png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { SidePay } from '../../Constant/index';
import img1 from '../../assets/Images/New folder/logo (1).png';

const Profitdatas = () => {
    const dispatch = useDispatch();
    const { profiteData, loading, error } = useSelector((state) => state.profite); // جلب بيانات الـ Profite من الـ state
    console.log(profiteData?.data);

    useEffect(() => {
        dispatch(fetchprofite()); // جلب البيانات عند تحميل الـ component
    }, [dispatch]);

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12'>
                {/* one div */}
                <div className="col-span-12 flex flex-row justify-between gap-20 pt-12 lg:py-3">
                    <div className='flex gap-3'>
                        <img src={img1} className="h-10" alt="logo" />
                        <h2 className="mb-12 text-4xl font-bold text-gray-800">
                            الطلبات النشطه(8)
                        </h2>
                    </div>
                    <div>
                        <img className='h-24' src={imghead} alt="header" />
                    </div>
                </div>

                {/* two div */}
                <div className=' col-span-12 flex flex-col items-start justify-between gap-y-4 '>
                    <div className='w-full'>
                        {loading ? (
                            <p>جاري تحميل البيانات...</p>
                        ) : error ? (
                            <p className="text-red-600">{error}</p>
                        ) : (
                            // مباشرة إظهار البيانات دون التحقق من الطول
                            profiteData.data.map((Profitprop) => (
                                <div key={Profitprop.id} className={`flex justify-between items-center mb-4 shadow shadow-md p-5 ${Profitprop.bg === 'green' ? 'bg-green-600 text-white' : 'bg-gray-200 '}`}>
                                    <div className='flex justify-start items-center gap-4'>
                                        <h2>{Profitprop.pending_profit}</h2>
                                    </div>
                                    <div>
                                        <span className={`${Profitprop.bg === 'green' ? 'text-white' : 'text-red-600'} font-bold`}>
                                            {Profitprop.finished_profi}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    {/* <h2>{profiteData?.data.pending_profit}</h2> */}
                </div>
            </div>
        </>
    );
};

const Profit = () => {
    return (
        <>
            <Navbar />
            <section className='font-cairo overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 px-0 sm:px-24 py-10'>
                <div className='col-span-5 lg:col-span-3'>
                    <Payingdata PayingdataProp={SidePay} />
                </div>
                <div className='col-span-9'>
                    <Profitdatas />
                </div>
            </section>
            <Footer />

        </>
    );
};

export default Profit;
