import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PropTypes from "prop-types";
import { SidePay, SidePay2, Optionpay, OperationsData, Optionpaybranch, OptionDeposit } from '../../Constant/index';
import Footer from '../../components/Footer/Footer';
import img1 from '../../assets/Images/New folder/logo (1).png'
import imgmanual from '../../assets/Images/New folder/pngtree-online-transfer-money-with-mobile-banking-design-concept-vector-illustration-png-image_2158421.jpg'
import { Link, useLocation } from 'react-router-dom';



export const Payingdata = ({ PayingdataProp }) => {
    const location = useLocation();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10  items-start'>
            <div className='text-base col-span-10 w-40  text-gray-300'>
                <span>الرئيسية \ حسابي</span>
            </div>
            {PayingdataProp.map((payprop) => {
                const isActive = location.pathname === payprop.Link;

                return (
                    <div key={payprop.id} className='col-span-10 p-2 flex items-start'>
                        <ul className='flex flex-col items-start'>
                            <Link to={payprop.Link}>
                                <li
                                    className={`flex p-1 gap-3 items-center ${isActive ? 'text-red-500' : 'hover:text-red-500 focus:text-red-500'}`}
                                >
                                    <img
                                        className={`p-1 rounded-md ${isActive ? 'bg-red-500' : 'bg-gray-500 hover:bg-red-500 focus:bg-red-500'}`}
                                        src={payprop.img}
                                        alt=""
                                    />
                                    <h2
                                        className={`flex p-1 gap-3 w-full items-center ${isActive ? 'text-red-500' : 'hover:text-red-500 focus:text-red-500'}`}
                                    >{payprop.head}</h2>
                                </li>
                            </Link>
                        </ul>
                    </div>
                );
            })}
            <div>
                <button className='col-span-10 w-40 p-1 rounded-md bg-gray-400 text-white hover:text-red-500 focus:text-red-500 active:text-red-500'>
                    تغيير كلمة المرور
                </button>
            </div>
        </div>
    );
};

const Payingdata2 = ({ PayingdataProp2 }) => {
    const [tripType, setTripType] = useState('Pay'); // 'one-way' or 'round-trip'
    const [showOptionData, setShowOptionData] = useState(true); // حالة للتحكم في إظهار مكون Optiondata
    const [optionDeposits, setShowAnotherComponent] = useState(false); // حالة للتحكم في إظهار المكون الثاني


    // 

    const handleShowOptionData = () => {
        setShowOptionData(true);
        setShowAnotherComponent(false); // إخفاء المكون الثاني إذا تم الضغط على ask1
    };

    const handleShowAnotherComponent = () => {
        setShowAnotherComponent(true);
        setShowOptionData(false); // إخفاء Optiondata إذا تم الضغط على ask2
    };

    return (
        <>
            {PayingdataProp2.map((payprop2) => {
                return (
                    <>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 ' key={payprop2.id}>

                            <div className="col-span-10 flex flex-row justify-start gap-4 pt-12 lg:py-3">
                                <img src={img1} className="h-10" alt="" />
                                <h2 className="mb-12 text-4xl font-bold text-gray-800">
                                    المحفظه
                                </h2>
                            </div>

                            <div className='col-span-10  bg-[#C54442] p-2 rounded-md flex justif gap-11 items-center'>
                                <img src={payprop2.img} className='h-32' alt="payment" />
                                <div className=' text-white '>
                                    <span className='text-xs'>{payprop2.span}</span>
                                    <h2 className='font-bold text-2xl'>{payprop2.head}</h2>
                                </div>
                            </div>

                            <div className=" col-span-10 border border-solid border-gray-400  rounded-md shadow-md p-1.5 flex mb-4 mt-7 gap-3">
                                <button
                                    className={`flex-1 py-2 text-center rounded-md ${tripType === 'Pay' ? 'bg-[#C54442] text-white' : 'bg-gray-200 text-gray-500'}`}
                                    onClick={() => {
                                        setTripType('Pay');
                                        handleShowOptionData();
                                    }}
                                >
                                    {payprop2.ask1}
                                </button>
                                <button
                                    className={`flex-1 gap-2 py-2 text-center rounded-md ${tripType === 'buy' ? 'bg-[#C54442] text-white' : 'bg-gray-200 text-gray-500'}`}
                                    onClick={() => {
                                        setTripType('buy');
                                        handleShowAnotherComponent();
                                    }}
                                >
                                    <select className="w-full bg-transparent border-none text-center">
                                        <option className='text-gray-400 ' value="">ايداع إلكتروني</option>
                                        <option className='text-gray-400 ' value="">ايداع مصرفي</option>
                                    </select>
                                </button>
                            </div>

                            <div className=' col-span-10 flex flex-col '>
                                {showOptionData &&
                                    (
                                        <div className=' p-1 flex items-center  gap-3 shadow-md'>
                                            <div className='bg-[#C54442] w-3 h-8 rounded-sm'></div>
                                            <h2 className='font-bold text-[#C54442]'>طرق الدفع الرئيسيه</h2>
                                        </div>
                                    )
                                }

                                {optionDeposits &&
                                    (
                                        <div className=' p-1 flex items-center  gap-3 shadow-md'>
                                            <div className='bg-[#C54442] w-3 h-8 rounded-sm'></div>
                                            <h2 className='font-bold text-[#C54442]'>طرق الايداع الرئيسيه</h2>

                                        </div>
                                    )
                                }

                                {showOptionData && <Optiondata Optdataprop={Optionpay} />}
                                {optionDeposits && <OptionDeposits OptdatapropDeposit={OptionDeposit} />}
                            </div>


                            {showOptionData &&
                                (
                                    <button className=' col-span-5 bg-[#C54442] text-white font-semibold p-1 mb-10 rounded-sm'>
                                        طلب السحب
                                    </button>
                                )
                            }

                            {optionDeposits &&
                                (
                                    <button className=' col-span-5 bg-[#C54442] text-white font-semibold p-1 mb-10 rounded-sm'>
                                        طلب الايداع

                                    </button>
                                )
                            }

                        </div>
                    </>
                )
            })

            }
        </>
    );
}


const Optiondata = ({ Optdataprop }) => {
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState(""); // حالة لتخزين الخيار المختار

    // دالة لتغيير الحالة عند اختيار عنصر من القائمة
    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value); // تحديث الخيار المختار
        setShow(true); // دايماً نعرض الـ div عند تغيير الخيار
    };

    return (
        <>
            <div className='py-5'>
                <select
                    name=""
                    className='cursor-pointer bg-gray-300 rounded-md px-3 w-full p-2 focus:border-none shadow-md'
                    id=""
                    onChange={handleSelectChange} // نضيف حدث onChange للـ select
                >
                    <option>اكثر الطرق دفع</option>
                    {Optdataprop.map((optdata) => (
                        <option key={optdata.opt} value={optdata.opt}>
                            {optdata.opt}
                        </option>
                    ))}
                </select>

                {/* عرض الـ div إذا تم اختيار أي خيار */}
                {show && (
                    <div className="my-5 p-1  flex flex-col ">
                        <div className="p-1 flex items-center  gap-3 ">
                            <div className="bg-[#bb110e] w-3 h-8 rounded-sm"></div>
                            <h2 className='font-bold text-[#bb110e]'>طرق الدفع الفرعيه لـ {selectedOption}</h2> {/* عرض الخيار المختار */}
                        </div>

                        <select
                            name=""
                            className='cursor-pointer  rounded-md px-3 w-full p-2 focus:border-none shadow-md'
                            id=""
                            onChange={handleSelectChange} // نضيف حدث onChange للـ select
                        >
                            <option>اكثر الطرق دفع</option>
                            <Optionpaybranchs Optdataprops={Optionpaybranch} />
                        </select>

                        {show && (
                            <div>
                                <form className='flex items-start gap-4 mt-3 ' action="">
                                    <div>
                                        <label htmlFor=""></label>
                                        <input type="number" className='bg-gray-200 shadow-md border  p-2 rounded-md' placeholder='0' />

                                    </div>
                                    <div>
                                        <label htmlFor=""></label>
                                        <input type="tel" className='bg-gray-200 shadow-md borde w-80 p-2 rounded-md ' placeholder='+20' />

                                    </div>

                                </form>
                            </div>
                        )

                        }

                    </div>




                )}
            </div>
        </>
    );
};



const OptionDeposits = ({ OptdatapropDeposit }) => {
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [bank, setBank] = useState(false);
    const [maual, setMaual] = useState(false);

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        setShow(true);

        // ضبط حالات الخيارات بناءً على الخيار المحدد
        if (value === 'ايداع بنكي') {
            setBank(true);
            setMaual(false);
        } else if (value === 'ايداع مانيول') {
            setBank(false);
            setMaual(true);
        }
    };

    return (
        <div className="my-5 p-1 flex flex-col">
            <select
                className='cursor-pointer bg-gray-300 rounded-md px-3 w-full p-2 focus:border-none shadow-md'
                onChange={handleSelectChange}
            >
                <option>
                    اكثر الطرق الايداع
                </option>
                {OptdatapropDeposit.map((optdataDeposit) => (
                    <option key={optdataDeposit.id} value={optdataDeposit.opt}>
                        {optdataDeposit.opt}
                    </option>
                ))}
            </select>

            {show && (
                <div className="my-5 p-1 flex flex-col">
                    <h2 className='font-bold text-[#bb110e]'>طرق الدفع الفرعيه لـ {selectedOption}</h2>

                    {bank && (
                        <div>
                            <form className='flex items-start gap-4 mt-3'>
                                <input type="number" className='bg-gray-200 shadow-md border p-2 rounded-md' placeholder='0' />
                                <input type="tel" value='01118682951' className='text-center font-bold bg-gray-200 shadow-md border w-80 p-2 rounded-md' placeholder='+20' />
                            </form>
                        </div>
                    )}

                    {maual && (
                        <div className='flex flex-col justify-center items-center py-5'>
                            <input type="number" className='bg-gray-200 shadow-md border p-2 rounded-md' placeholder='0' />
                            <img src={imgmanual} className='h-80' alt="" />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};


const Optionpaybranchs = ({ Optdataprops }) => {
    return (
        <>
            {Optdataprops.map((optdatabranch) => (
                <option key={optdatabranch.opt2} value={optdatabranch.opt2}>
                    {optdatabranch.opt2}
                </option>
            ))}
        </>
    );
}





const Payingdata3 = ({ PayingdataProp3 }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 space-y-2">
            <div className=" col-span-10 flex flex-row justify-start gap-4">
                <img src={img1} className="h-10" alt="" />
                <h2 className="mb-8 text-4xl font-bold text-gray-800">
                    آخر العمليات
                </h2>
            </div>
            {PayingdataProp3.map((paydata3) => {
                return (

                    <>

                        <div key={paydata3.id} className=" w-full col-span-10 grid grid-cols-10 sm:grid-cols-10 md:grid-cols-12 gap-5 bg-white shadow-md p-5 rounded-lg">


                            {/* Right Section: Operation Image */}
                            <div className={` col-span-2 lg:col-span-2 w-fit rounded-lg flex items-center lg:items-center ${paydata3.changebg === 'red' ? 'bg-gray-800' : 'bg-[#C54442]'}`}>
                                <img src={paydata3.imgoperation} alt="operation icon" className=" " />
                            </div>



                            {/* Middle Section: Name and Account Number */}
                            <div className=" col-span-8  lg:col-span-6 flex flex-col items-center lg:items-start">
                                <span className="text-gray-700 font-medium">{paydata3.name}</span>
                                <span className="text-gray-500">{paydata3.accountNumber}</span>
                            </div>

                            {/* Left Section: Date and Change Percentage */}
                            <div className=" col-span-10 lg:col-span-4 flex flex-col">
                                <span className="text-gray-500 text-sm">{paydata3.date}</span>
                                <span className={`text-sm font-bold ${paydata3.changeColor === 'green' ? 'text-green-500' : 'text-red-500'}`}>
                                    {paydata3.change}
                                </span>
                            </div>

                        </div>
                    </>

                )
            })}
        </div>
    );
}





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


Payingdata2.propTypes = {
    PayingdataProp2: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            span: PropTypes.string.isRequired,
            head: PropTypes.string.isRequired,
            ask1: PropTypes.string.isRequired,
            ask2: PropTypes.string.isRequired,
            spanask1: PropTypes.string.isRequired,
            btn: PropTypes.string.isRequired,

        })
    ).isRequired,
};

Payingdata3.propTypes = {
    PayingdataProp2: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            change: PropTypes.string.isRequired,
            changeColor: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            accountNumber: PropTypes.string.isRequired,
            imgoperation: PropTypes.string.isRequired,
            changebg: PropTypes.string.isRequired,

        })
    ).isRequired,
};

Optiondata.propTypes = {
    Optdataprop: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            opt: PropTypes.string.isRequired,
            opt2: PropTypes.string.isRequired,

        })
    ).isRequired,
};

OptionDeposits.propTypes = {
    OptdatapropDeposit: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            opt: PropTypes.string.isRequired,

        })
    ).isRequired,
};


const Paying = () => {
    return (
        <>
            <Navbar />
            <section className='  py-12 px-5 lg:px-20 font-cairo grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-5 lg:gap-x-5'>
                <div className='col-span-5 lg:col-span-2'>
                    <Payingdata PayingdataProp={SidePay} />
                </div>
                <div className='col-span-9  lg:col-span-5'>
                    <Payingdata2 PayingdataProp2={SidePay2} />
                </div>
                <div className='col-span-10 lg:col-span-5'>
                    <Payingdata3 PayingdataProp3={OperationsData} />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Paying;
