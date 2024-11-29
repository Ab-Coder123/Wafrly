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
                        ) : profiteData?.data ? (
                            <div className='flex flex-col gap-y-4'>
                                <div className="shadow shadow-md p-5 flex items-start justify-between bg-gray-200 rounded-md">
                                    <div className="flex justify-between items-center mb-4">
                                        <img src="" alt="" />
                                        <h2 className="font-bold ">
                                            الارباح المتوقعه
                                        </h2>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className={`font-bold   ${profiteData.data.bg === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                                            {profiteData.data.pending_profit || "لا توجد أرباح متاحه."}
                                        </span>
                                    </div>
                                </div>

                                <div className="shadow shadow-md p-5 flex items-start justify-between bg-green-600 rounded-md">
                                    <div className="flex justify-between items-center mb-4">
                                        <img src="" alt="" />
                                        <h2 className="font-bold text-white ">
                                           اجمالي الارباح
                                        </h2>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className='font-bold text-white '>
                                            {profiteData.data.finished_profit|| "لا توجد أرباح منتهية."}
                                        </span>
                                    </div>
                                </div>
                            </div>


                        ) : (
                            <p>لا توجد بيانات لعرضها.</p>
                        )}

                    </div>
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
