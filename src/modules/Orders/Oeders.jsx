import React, { useState } from 'react';
import { Ordersdata, SidePay } from '../../Constant/index';
import PropTypes from "prop-types";
import img1 from '../../assets/Images/New folder/logo (1).png'
import { Payingdata } from '../../modules/Paying/Paying';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGetallOrder } from '../../Statemanagment/Reducers/GetOrderSlice';

const Ordersdatas = () => {
    const dispatch = useDispatch();
    // الحصول على الطلبات من الـ Redux store
    const { orders, loading, error } = useSelector((state) => state.getorders);
    console.log(orders?.customer_name);
    const [change, setChange] = useState('1');

    useEffect(() => {
        // جلب الطلبات بناءً على الحالة الافتراضية (قيد التنفيذ)
        dispatch(fetchGetallOrder());
    }, [dispatch]);

    // عند تغيير الحالة
    const handleStateChange = (stateId) => {
        setChange(stateId);
        const statusMapping = {
            '1': '1', // قيد التنفيذ
            '2': '2', // اكتملت
            '3': '3', // تم إلغاؤها
        };
        // إرسال الطلب إلى الـ API لجلب البيانات المتعلقة بالحالة
    dispatch(fetchGetallOrder(statusMapping[stateId]));
};
return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4 px-4 sm:px-8">
        {/* Header */}
        <div className="col-span-8 flex flex-row justify-start gap-4 pt-12 lg:py-3">
            <img src={img1} className="h-10" alt="Logo" />
            <h2 className="mb-12 text-4xl font-bold text-gray-800">
                {change === '1' ? 'الطلبات قيد التنفيذ' : change === '2' ? 'الطلبات المكتملة' : 'الطلبات الملغاة'} 
                ({orders.length})
            </h2>
        </div>

        {/* Buttons */}
        <div className="col-span-8 py-10 w-full">
            <div className="flex items-start justify-start text-center gap-1">
                {['1', '2', '3'].map((stateId) => (
                    <div
                        key={stateId}
                        className={`w-52 p-2 rounded-md border border-1 border-gray-300 ${
                            change === stateId ? 'bg-[#C54442] text-white' : 'bg-white text-gray-400'
                        }`}
                    >
                        <button onClick={() => handleStateChange(stateId)} className="font-bold">
                            {stateId === '1' ? 'طلبات قيد التنفيذ' : stateId === '2' ? 'طلبات اكتملت' : 'طلبات تم الغاؤها'}
                        </button>
                    </div>
                ))}
            </div>
            <h2>{orders.customer_name}</h2>
        </div>

        {/* الطلبات */}
        {loading && <p>جاري تحميل البيانات...</p>}
        {error && <p className="text-red-500">حدث خطأ: {error}</p>}
        {Array.isArray(orders) && orders.length > 0 ? (
        orders.map((order) => (
        <div
            key={order.id}
            className="w-96 sm:w-full font-bold py-2 col-span-10 border mb-3 shadow shadow-md border-1 border-gray-100 rounded-md"
        >
            <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-10 gap-2">
                <img
                    className="h-22 col-span-1 px-2 rounded-md"
                    src={order.imgproduct}
                    alt={order.customer_name}
                />
                <div className="flex flex-col col-span-3 md:col-span-2 bg-gray-200 p-2 rounded-md md:bg-white md:p-0 items-start gap-y-2">
                    <h2
                        className={`${
                            order.state1 === 'red'
                                ? 'text-[#C54442]'
                                : order.state1 === 'green'
                                ? 'text-[#01B051]'
                                : 'text-black'
                        }`}
                    >
                    </h2>
                    <span>{order.section}</span>
                </div>
                <div className="flex flex-col col-span-3 md:col-span-2 bg-gray-200 p-2 rounded-md md:bg-white md:p-0 items-start gap-y-2">
                    <h2>الاسم </h2>
                    <div>
                        <img src={order.orderimg} alt="Order" />
                        <span>{order.customer_name}</span>
                    </div>
                </div>

                <div className="flex flex-col col-span-3 md:col-span-2 bg-gray-200 p-2 rounded-md md:bg-white md:p-0 items-start gap-y-2">
                    <h2>العنوان</h2>
                    <span>{order.street}</span>
                </div>

                <div className="flex flex-col col-span-3 md:col-span-2 bg-gray-200 p-2 rounded-md md:bg-white md:p-0 items-start gap-y-2">
                    <h2>السعر</h2>
                    <span>{order.order_total_price}</span>
                </div>

                <div className="flex flex-col col-span-3 md:col-span-2 w-full bg-gray-200 p-2 rounded-md md:bg-white md:p-0 items-start gap-y-2">
                    <h2>حالة الطلب</h2>
                    <span
                        className={`w-40 md:w-full text-white text-center rounded-md p-1 font-bold ${
                            order.state1 === 'red'
                                ? 'bg-[#C54442]'
                                : order.state1 === 'green'
                                ? 'bg-[#01B051]'
                                : 'bg-black'
                        }`}
                    >
                        {order.state1 === 'red'
                            ? 'قيد التنفيذ'
                            : order.state1 === 'green'
                            ? 'اكتملت'
                            : 'تم الغاؤها'}
                    </span>
                </div>
                <div className="col-span-3 md:col-span-1 px-10">
                    <button>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
        </div>
    ))
) : (
    <p className="text-center text-gray-500">لا توجد طلبات حالياً</p>
)}

    </div>
);
};


// const ThreeDotsIcon = () => {
//     return (
//         <div >
//             <FontAwesomeIcon icon={faEllipsisVertical} size="2x" />
//         </div>
//     );
// };


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
            <section className='  font-cairo overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 px-0 sm:px-24 py-10'>
                <div className=' col-span-5 lg:col-span-3'>
                    <Payingdata PayingdataProp={SidePay} />
                </div>
                <div className=' col-span-12 lg:col-span-9'>
                    <Ordersdatas  />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Oeders;