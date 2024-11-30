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
    console.log(orders);
    const [change, setChange] = useState('1');

    useEffect(() => {
        // جلب الطلبات بناءً على الحالة الافتراضية (قيد التنفيذ)
        dispatch(fetchGetallOrder());
    }, [dispatch]);

    // عند تغيير الحالة
    const handleStateChange = (stateId) => {
        setChange(stateId);
        const statusMapping = {
            '0': '0', // قيد التنفيذ
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
        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          {change === '1'
            ? 'الطلبات قيد التنفيذ'
            : change === '2'
            ? 'الطلبات المكتملة'
            : 'الطلبات الملغاة'}{' '}
        </h2>
      </div>
  
      {/* Buttons */}
      <div className="col-span-8 py-6 w-full">
        <div className="flex items-center text-center justify-start gap-4">
          {['0', '2', '3'].map((stateId) => (
            <div
              key={stateId}
              className={`w-48 p-3 rounded-lg shadow-md border ${
                change === stateId
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              <button
                onClick={() => handleStateChange(stateId)}
                className="font-semibold"
              >
                {stateId === '0'
                  ? 'طلبات قيد التنفيذ'
                  : stateId === '2'
                  ? 'طلبات اكتملت'
                  : 'طلبات تم الغاؤها'}
              </button>
            </div>
          ))}
        </div>
      </div>
  
      {/* الطلبات */}
      {/* {loading && <p>جاري تحميل البيانات...</p>} */}
      {error && <p className="text-red-500">حدث خطأ: {error}</p>}
      {orders.data?.length > 0 ? (
        orders.data.map((order) => (
          <div
            key={order.id}
            className="col-span-8 bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* صورة المنتج */}
              <div className="col-span-2 flex justify-center items-center">
                <img
                  src={order.user.image}
                  alt={order.customer_name}
                  className="w-20 h-15 rounded-md object-cover"
                />
              </div>
  
            
              {/* تفاصيل العميل */}
              <div className="col-span-3 flex flex-col justify-center">
                <h2 className="text-gray-700 font-bold">المشتري</h2>
                <div className="flex items-center gap-2">
                 
                  <span className="text-gray-600">{order.customer_name}</span>
                </div>
              </div>
  
              {/* العنوان */}
              <div className="col-span-2 flex flex-col justify-center">
                <h2 className="text-gray-700 font-bold">العنوان</h2>
                <span className="text-gray-500">{order.town.name}</span>
              </div>
  
              {/* السعر */}
              <div className="col-span-2 flex flex-col justify-center">
                <h2 className="text-gray-700 font-bold">السعر</h2>
                <span className="text-gray-500">{order.order_total_price} ريال</span>
              </div>
  
              {/* حالة الطلب */}
              <div className="col-span-2 flex flex-col justify-center items-center">
                <h2 className="text-gray-700 font-bold">حالة الطلب</h2>
                <span
                  className={`text-white text-center px-4 py-2 rounded-md font-semibold ${
                    order.status === 'pending'
                      ? 'bg-red-500'
                      : 'bg-green-500'
                    //    'bg-black'
                  }`}
                >
                  {order.status}
                </span>
              </div>
  
              {/* زر الخيارات */}
              <div className="col-span-1 flex justify-center items-center">
                <button className="text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-8 text-center text-gray-500">
          لا توجد طلبات حالياً
        </p>
      )}
    </div>
  );
  
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