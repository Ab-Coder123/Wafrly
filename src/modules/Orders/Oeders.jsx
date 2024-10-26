import React, { useState } from 'react';
import { Ordersdata, SidePay } from '../../Constant/index';
import PropTypes from "prop-types";
import img1 from '../../assets/Images/New folder/logo (1).png'
import { Payingdata } from '../../modules/Paying/Paying';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Ordersdatas = ({ OrdersPropdata }) => {

    const [change, setChange] = useState('load')

    // three state to change cards values 

    const [state1, setState1] = useState(true);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);

    // /functions to change state 

    const State1 = () => {
        setState1(true);
        setState2(false);
        setState3(false);

    }


    const State2 = () => {
        setState1(false);
        setState2(true);
        setState3(false);

    }

    const State3 = () => {
        setState1(false);
        setState2(false);
        setState3(true);

    }


    return (
        <>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8'>

                <div className=" col-span-8 flex flex-row justify-start gap-4 pt-12 lg:py-3">
                    <img src={img1} className="h-10" alt="" />
                    <h2 className="mb-12 text-4xl font-bold text-gray-800">
                        الطلبات النشطه(8)
                    </h2>
                </div>
                {/* table */}
                <div className='col-span-8 py-10 w-full '>
                    <div className='flex items-start justify-start text-center gap-1'>
                        <div className={`w-52 p-2 rounded-md  border border-1 border-gray-300 ${change === 'load' ? 'bg-[#C54442] text-white' : ' bg-white text-gray-400'}`}>
                            <button onClick={() => { setChange('load'); State1(); }} className='font-bold '>طلبات قيد التنفيذ</button>
                        </div>
                        <div className={`w-52 p-2 rounded-md   border border-1 border-gray-300 ${change === 'done' ? 'bg-[#C54442] text-white' : ' bg-white text-gray-400'}`}>
                            <button onClick={() => { setChange('done'); State2(); }} className='font-bold'>طلبات اكتملت</button>
                        </div>
                        <div className={` w-52 p-2 rounded-md border border-1 border-gray-300 ${change === 'not' ? 'bg-[#C54442] text-white' : ' bg-white text-gray-400'}`}>
                            <button onClick={() => { setChange('not'); State3(); }} className='font-bold'>طلبات تم الغائها</button>
                        </div>
                    </div>
                </div>

                {state1 &&
                    (
                        OrdersPropdata.map((Orderspropdata) => {
                            return (

                                <div className='font-bold py-2 col-span-8  border mb-3 shadow shadow-md border-1 border-gray-100 rounded-md' key={Orderspropdata.id}>
                                    <div className='flex items-center gap-16 px-2'>
                                        <img className='h-22 rounded-md' src={Orderspropdata.imgproduct} alt="" />
                                        <div className='flex flex-col items-start gap-y-2'>
                                            <h2>{Orderspropdata.nameproduct}</h2>
                                            <span>{Orderspropdata.section}</span>
                                        </div>
                                        <div className='flex flex-col items-start gap-y-2'>
                                            <h2>السعؤ</h2>
                                            <div>
                                                <img src={Orderspropdata.orderimg} alt="" />
                                                <span>اسم المشتري </span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-start gap-y-2'>
                                            <h2>لعنوان</h2>
                                            <span>العنوان هنا</span>
                                        </div>
                                        <div className='flex flex-col items-start gap-y-2'>
                                            <h2>حاله الطلب</h2>
                                            <span
                                                className={`w-full text-white rounded-md p-1.5 font-bold ${Orderspropdata.state1 === 'red' ? 'bg-[#C54442]' : Orderspropdata.state1 === 'green' ? 'bg-[#01B051]' : 'bg-black'}`}
                                            >
                                                {Orderspropdata.state1 === 'red' ? 'قيد التنفيذ' : Orderspropdata.state1 === 'green' ? 'اكتملت' : 'تم الغاؤها'}
                                            </span>
                                        </div>
                                        <div>
                                            <button>
                                                <ThreeDotsIcon />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    )

                }


                {state2 &&
                    (
                        OrdersPropdata
                            .filter((Orderspropdata) => Orderspropdata.state1 === 'green')
                            .map((Orderspropdata) => {
                                return (

                                    <div className='font-bold py-2 col-span-8  border mb-3 shadow shadow-md border-1 border-gray-100 rounded-md' key={Orderspropdata.id}>
                                        <div className='flex items-center gap-16 px-2'>
                                            <img className='h-22 rounded-md' src={Orderspropdata.imgproduct} alt="" />
                                            <div className='flex flex-col items-start gap-y-2'>
                                                <h2>{Orderspropdata.nameproduct}</h2>
                                                <span>{Orderspropdata.section}</span>
                                            </div>
                                            <div className='flex flex-col items-start gap-y-2'>
                                                <h2>السعؤ</h2>
                                                <div>
                                                    <img src={Orderspropdata.orderimg} alt="" />
                                                    <span>اسم المشتري </span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-start gap-y-2'>
                                                <h2>لعنوان</h2>
                                                <span>العنوان هنا</span>
                                            </div>
                                            <div className='flex flex-col items-start gap-y-2'>
                                                <h2>حاله الطلب</h2>
                                                <span
                                                    className={`w-full text-white rounded-md p-1.5 font-bold ${Orderspropdata.state1 === 'green' ? 'bg-[#01B051]' : 'bg-green-400'}`}
                                                >
                                                    {Orderspropdata.state1 === 'green' ? 'اكتملت' : ''}
                                                </span>
                                            </div>
                                            <div>
                                                <button>
                                                    <ThreeDotsIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                    )

                }


                {state3 &&
                    (
                        OrdersPropdata
                            .filter((Orderspropdata) => Orderspropdata.state1 === 'black')
                            .map((Orderspropdata) => {
                                return (

                                    <div className='font-bold py-2 col-span-8  border mb-3 shadow shadow-md border-1 border-gray-100 rounded-md' key={Orderspropdata.id}>
                                        <div className='flex items-center gap-16 px-2'>
                                            <img className='h-22 rounded-md' src={Orderspropdata.imgproduct} alt="" />
                                            <div className='flex flex-col items-start gap-y-2'>
                                                <h2>{Orderspropdata.nameproduct}</h2>
                                                <span>{Orderspropdata.section}</span>
                                            </div>
                                            <div className='flex flex-col items-start gap-y-2'>
                                                <h2>السعؤ</h2>
                                                <div>
                                                    <img src={Orderspropdata.orderimg} alt="" />
                                                    <span>اسم المشتري </span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-start gap-y-2'>
                                                <h2>لعنوان</h2>
                                                <span>العنوان هنا</span>
                                            </div>
                                            <div className='flex flex-col items-start gap-y-2'>
                                                <h2>حاله الطلب</h2>
                                                <span
                                                    className={`w-full text-white rounded-md p-1.5 font-bold ${Orderspropdata.state1 === 'black' ? 'bg-black' : 'bg-black'}`}
                                                >
                                                    {Orderspropdata.state1 === 'black' ? 'اكتملت' : ''}
                                                </span>
                                            </div>
                                            <div>
                                                <button>
                                                    <ThreeDotsIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                    )

                }
            </div>

        </>
    );
}


const ThreeDotsIcon = () => {
    return (
        <div >
            <FontAwesomeIcon icon={faEllipsisVertical} size="2x" />
        </div>
    );
};



Ordersdatas.propTypes = {
    OrdersPropdata: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            imgproduct: PropTypes.string.isRequired,
            orderimg: PropTypes.string.isRequired,
            nameproduct: PropTypes.string.isRequired,
            section: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            profile: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            state1: PropTypes.string.isRequired,
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



const Oeders = () => {
    return (
        <>
            <Navbar />
            <section className='  font-cairo grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 px-24 py-10'>
                <div className=' col-span-3'>
                    <Payingdata PayingdataProp={SidePay} />
                </div>
                <div className=' col-span-8'>
                    <Ordersdatas OrdersPropdata={Ordersdata} />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Oeders;