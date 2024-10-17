import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PropTypes from "prop-types";
import { SidePay, SidePay2, Optionpay } from '../../Constant/index';
import img1 from "../../assets/Images/Logo (1).png";

const Payingdata = ({ PayingdataProp }) => {
    return (
        <>

            <div className='py-10 flex flex-col justify-center items-start'>
                <div className='text-base text-gray-300'>
                    <span>الرئيسية \ حسابي</span>
                </div>
                {PayingdataProp.map((payprop) => {
                    return (
                        <>
                            <div key={payprop.id} className='p-2 flex items-start'>
                                <ul className='flex flex-col items-start '>
                                    <li className='flex p-1 gap-3 items-center'>
                                        <img className='bg-gray-500 p-1  rounded-md' src={payprop.img} alt="" />
                                        <h2>{payprop.head}</h2>
                                    </li>
                                </ul>
                            </div>
                        </>

                    )
                })

                }
                {/* div 3 */}
                <div className=''>
                    <button className='p-1 rounded-md rounded-md bg-gray-400 text-white'>
                        تغيير كلمة المرور
                    </button>
                </div>
            </div>

        </>
    );
}

const Payingdata2 = ({ PayingdataProp2 }) => {
    const [tripType, setTripType] = useState('Pay'); // 'one-way' or 'round-trip'

    return (
        <>
            {PayingdataProp2.map((payprop2) => {
                return (
                    <>

                        <div className='' key={payprop2.id}>

                            <div className="flex flex-row justify-start gap-4">
                                <img src={img1} className="h-10" alt="" />
                                <h2 className="mb-12 text-4xl font-bold font-serif text-gray-800">
                                    المحفظه
                                </h2>
                            </div>

                            <div className='bg-red-500 p-5 rounded-md flex justify-between w-96 gap-11 items-center'>
                                <img src={payprop2.img} alt="payment" />
                                <div className=' text-white '>
                                    <span className='text-xs'>{payprop2.span}</span>
                                    <h2 className='font-bold text-2xl'>{payprop2.head}</h2>
                                </div>
                            </div>

                            <div className="border border-solid border-gray-400  rounded-md shadow-md p-1.5 flex mb-4 mt-7 gap-3">
                                <button
                                    className={`flex-1 py-2 text-center rounded-md ${tripType === 'Pay' ? 'bg-[#C54442] text-white' : ' bg-gray-200 text-gray-500'}`}
                                    onClick={() => setTripType('Pay')}
                                >
                                    طلبات السحب
                                </button>
                                <button
                                    className={`flex-1 py-2 text-center rounded-md ${tripType === 'buy' ? 'bg-[#C54442] text-white' : ' bg-gray-200 text-gray-500'}`}
                                    onClick={() => setTripType('buy')}
                                >
                                    طلبات الايداع
                                </button>
                            </div>

                            <div className='flex flex-col  p-1'>
                                <div className=' p-1 flex items-start gap-2 shadow-md'>
                                    <div className='bg-[#C54442] w-5 h-7 rounded-md'></div>
                                    <h2>طرق الدفع الرئيسيه</h2>
                                </div>
                                <div><Payingdata3 Optdataprop={Optionpay} /></div>
                            </div>
                        </div>
                    </>
                )
            })

            }
        </>
    );
}

const Payingdata3 = ({ Optdataprop }) => {
    return (
        <>
            <div className='py-5  '>
            {/* <label className="block mb-1 text-gray-700">اكثر طرق الدفع</label> */}
                <select name="" className='w-full p-2 fcous:border focus:border-none shadow-md' id="">
                    {Optdataprop.map((optdata) => {
                        return (
                            <>
                                <option value="" >{optdata.opt}</option>
                            </>
                        )
                    })

                    }
                </select>
            </div>
        </>
    );
}


Payingdata.propTypes = {
    PayingdataProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            head: PropTypes.string.isRequired,
        })
    ).isRequired,
};

Payingdata3.propTypes = {
    Optdataprop: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            opt: PropTypes.string.isRequired,

        })
    ).isRequired,
};


Payingdata.propTypes = {
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



const Paying = () => {
    return (
        <>
            <Navbar />
            <section className='font-cairo flex  items-start justify-around '>
                <Payingdata PayingdataProp={SidePay} />
                <Payingdata2 PayingdataProp2={SidePay2} />
            </section>
        </>
    );
}

export default Paying;
