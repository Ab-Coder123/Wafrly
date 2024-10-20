import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import img from '../../assets/Images/New folder/g92-2-500x500 1.png'
import logo from '../../assets/Images/New folder/logo (1).png'
import img2 from '../../assets/Images/New folder/g27cq4-500x500 1.png'

const OrderConfirmation = () => {
  const [shippingCost, setShippingCost] = useState(0.05);

  return (
    <>
      <Navbar/>
    <div className="container mx-auto p-10">
        <div className='flex items-start gap-4'>
        <img src={logo} alt="logo" />
        <h1 className="text-2xl font-bold mb-4">تأكيد الطلب</h1>
        </div>
      
      {/* Main Container */}
      <div className="flex flex-wrap items-start justify-center">
         {/* Right side - Form */}
         <div className="w-full md:w-1/2 p-4">
          <form>
            <div className="mb-4">
              <label className="block mb-1 text-gray-400">الاسم الأول *</label>
              <input type="text" className="w-full border p-2 bg-gray-200 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-400">البريد الإلكتروني *</label>
              <input type="email" className="w-full border p-2 bg-gray-200 rounded-md"  />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-400">الحي *</label>
              <input type="text" className="w-full border p-2 bg-gray-200 rounded-md"  />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-400">عنوان الشارع *</label>
              <input type="text" className="w-full border p-2 bg-gray-200 rounded-md"  />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-400">شقه، طابق، إلخ (اختياري)</label>
              <input type="text" className="w-full border p-2 bg-gray-200 rounded-md"  />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-400">الرمز البريدي ZIP *</label>
              <input type="text" className="w-full border p-2 bg-gray-200 rounded-md"  />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-400">رقم الهاتف *</label>
              <input type="tel" className="w-full border p-2 bg-gray-200 rounded-md"  />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <label>احفظ هذه المعلومات للتسجيل بشكل أسرع في المرة القادمة</label>
            </div>
          </form>
        </div>
        {/* Left side - Product Details */}
        <div className="w-full md:w-1/2 p-4">
          {/* Product Item */}
          <div className="flex justify-between items-center mb-4">
            <img src={img} alt="Controller" className="h-10"/>
            <span className="text-gray-700">شاشات الكريستال السائل</span>
            <span>$650</span>
          </div>
          {/* Product Item 2 */}
          <div className="flex justify-between items-center mb-4">
            <img src={img2} alt="Board" className=" h-10"/>
            <span className="text-gray-700">لوحة ألعاب H1</span>
            <span>$1100</span>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between mb-2">
            <span>المجموع الفرعي:</span>
            <span>$1750</span>
          </div>

          {/* Shipping Cost */}
          <div className="flex justify-between items-center mb-4">
            <span>قيمة الشحن:</span>
            <input 
              type="number"
              value={shippingCost}
              onChange={(e) => setShippingCost(e.target.value)}
              className="border p-2 rounded-md w-24"
            />
          </div>

          {/* Total */}
          <div className="flex justify-between font-bold mb-4">
            <span>المجموع:</span>
            <span>${(1750 + parseFloat(shippingCost)).toFixed(2)}</span>
          </div>

          {/* Confirm Button */}
          <button className="bg-red-500 text-white px-6 py-3 rounded-md font-bold">تأكيد الطلب</button>
        </div>

       
      </div>
    </div>
    <Footer/>
    </>
  
  );
};

export default OrderConfirmation;
