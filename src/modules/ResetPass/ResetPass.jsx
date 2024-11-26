// ResetPassword.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchResetPassword } from "../../Statemanagment/Reducers/ResetPass";
import logo from "../../assets/Images/New folder/logo (1).png";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import Footer from "../../components/Footer/Footer";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // تفعيل التنقل بين الصفحات

  const { loading, success, error } = useSelector((state) => state.forgetPassword);

  const [identifier, setIdentifier] = useState(""); // متغير لتخزين المعرف المستخدم
  const [password, setPassword] = useState(""); // كلمة المرور الجديدة
  const [confirmPassword, setConfirmPassword] = useState(""); // تأكيد كلمة المرور

  const handleSubmit = (e) => {
    e.preventDefault();

    // تحقق من تطابق كلمات المرور
    if (password !== confirmPassword) {
      toast.error("كلمات المرور غير متطابقة، يرجى المحاولة مرة أخرى.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }

    // إرسال طلب إعادة تعيين كلمة المرور
    const data = { identifier, password }; // إرسال المعرف وكلمة المرور الجديدة
    dispatch(fetchResetPassword(data)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("تم إعادة تعيين كلمة المرور بنجاح!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });

        // التوجيه إلى صفحة تسجيل الدخول بعد النجاح
        navigate("/login"); // يوجهك إلى صفحة login بعد إعادة تعيين كلمة المرور
      } else {
        toast.error("عذرًا، حدث خطأ. يرجى المحاولة مرة أخرى.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <section className="py-12 flex items-center justify-center font-cairo">
        <div className="flex justify-center items-start bg-white shadow-lg rounded-lg">
          {/* Form */}
          <div className="p-5 w-80 lg:w-full">
            <div className="flex flex-row items-center justify-center gap-6 mx-auto">
              <img src={logo} alt="Logo" />
              <h2 className="text-3xl font-bold text-black text-center">إعادة تعيين كلمة المرور</h2>
            </div>
            <p className="text-center text-gray-400 text-sm">
              برجاء إدخال كلمة المرور الجديدة
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <div>
                <label className="block text-sm text-[#C54442] font-bold">كلمة المرور الجديدة</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm text-[#C54442] font-bold">تأكيد كلمة المرور</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-[#C54442] text-white py-2 px-4 rounded-lg hover:bg-[#9e3432] focus:outline-none"
              >
                {loading ? "جاري إعادة تعيين كلمة المرور..." : "إعادة تعيين كلمة المرور"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResetPassword;
