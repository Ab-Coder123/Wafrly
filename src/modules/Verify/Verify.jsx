import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVerify } from '../../Statemanagment/Reducers/verifySlice'; // تأكد من المسار الصحيح
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';

const OtpVerificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector(state => state.otpverify);
  
  // حالة لتخزين قيمة الـ OTP
  const [otp, setOtp] = useState("");
  const [identifier, setIdentifier] = useState(""); // identifier مثل رقم الهاتف أو البريد الإلكتروني

  // دالة إرسال البيانات للتحقق من OTP
  const handleSubmit = async (e) => {
    e.preventDefault();

    // التأكد من أن المستخدم قد أدخل الـ OTP والـ identifier
    if (otp && identifier) {
      const otpData = {
        identifier, // رقم الهاتف أو البريد الإلكتروني
        otp,         // الكود الذي أرسله المستخدم
      };

      toast.success("تم إعادة تعيين كلمة المرور بنجاح!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
     // إرسال البيانات للتحقق
      await dispatch(fetchVerify(otpData)); 
      // إذا تم التحقق بنجاح، التوجيه إلى صفحة إعادة تعيين كلمة المرور
      if (success) {
        navigate("/modules/ResetPass/ResetPass");
      }
    } else {
        toast.error("عذرًا، حدث خطأ. يرجى المحاولة مرة أخرى.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
          });    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="max-w-md mx-auto p-4 my-28 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-[#C54442] mb-4">التحقق من الـ OTP</h2>
      
      {/* الاستمارة */}
      <form onSubmit={handleSubmit}>
        {/* حقل رقم الهاتف أو البريد الإلكتروني */}
        <div className="mb-4">
          <label className="block text-sm text-[#C54442] font-bold">المعرف (رقم الهاتف أو البريد الإلكتروني)</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
            placeholder="أدخل رقم الهاتف أو البريد الإلكتروني"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
        </div>

        {/* حقل إدخال الـ OTP */}
        <div className="mb-4">
          <label className="block text-sm text-[#C54442] font-bold">أدخل الـ OTP</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
            placeholder="أدخل الـ OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        {/* زر التحقق */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-[#C54442] text-white py-2 px-4 rounded-lg hover:bg-[#9e3432] focus:outline-none"
        >
          {loading ? "جاري التحقق..." : "التحقق من الـ OTP"}
        </button>
      </form>

      {/* عرض حالة النجاح أو الفشل */}
      {success && <div className="mt-4 text-green-500 text-center">{success}</div>}
      {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
    </div>
    <Footer/>
    </>

  );
};

export default OtpVerificationPage;
