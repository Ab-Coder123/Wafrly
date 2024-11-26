import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";  // من أجل التوجيه إلى الصفحة التالية
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchforgetPassword } from "../../Statemanagment/Reducers/ForgetPassSlice";
import logo from "../../assets/Images/New folder/logo (1).png";
import Side_Image from "../../assets/Images/New folder/Side Image.png";
import Navbar from "../../components/Navbar/Navbar";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.forgetPassword);
  const [identifier, setIdentifier] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchforgetPassword(identifier)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("تم إرسال رابط إعادة التعيين إلى معرفك!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
        navigate("/modules/Verify/Verify");  // التوجيه إلى صفحة إعادة تعيين كلمة المرور

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
              <h2 className="text-3xl font-bold text-black text-center">نسيت كلمة المرور</h2>
            </div>
            <p className="text-center text-gray-400 text-sm">
              برجاء إدخال معرفك لإعادة تعيين كلمة المرور
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <div>
                <label className="block text-sm text-[#C54442] font-bold">المعرف</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Identifier"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-[#C54442] text-white py-2 px-4 rounded-lg hover:bg-[#9e3432] focus:outline-none"
              >
                {loading ? "جاري الإرسال..." : "إعادة تعيين"}
              </button>
            </form>

            <Link to="/modules/Login/Login" className="text-gray-500 hover:underline py-3 flex justify-center">
              العودة لتسجيل الدخول
            </Link>
          </div>

          <div className="w-full">
            <img
              src={Side_Image}
              alt="Forget Password"
              className="object-cover h-lvh w-[650px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;
