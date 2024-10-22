import React from "react";
import Side_Image from "../../assets/Images/New folder/Side Image.png";
import logo from '../../assets/Images/New folder/logo (1).png'
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  return (
    <>
      <Navbar />
      <section className="py-8 flex  items-center justify-center font-cairo">
        <div className="flex justify-center items-start bg-white  shadow-lg rounded-lg">


          {/* form */}
          <div className='  p-5 w-full'>
            <div className="flex flex-row   items-center justify-center gap-6 mx-auto">
              <img src={logo} alt="" />
              <h2 className="text-3xl font-extrabold  text-black text-center">
                أنشاء حساب جديد
              </h2>
            </div>
            <p className=" py-5 text-center text-gray-400 text-sm">برجاء اكمال البيانات لاستكمال عملية الدخول</p>


            <form className="mt-3">

              <div className="mt-4">
                <label className="block text-sm text-[#C54442]  font-bold  ">
                  البريد الإلكتروني                 </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Email Address"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-[#C54442]  font-bold  ">
                  الهاتف                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="0000000"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-[#C54442]  font-bold  ">كلمة المرور</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Password"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-[#C54442]  font-bold  ">
                  تاكيد كلمة المرور                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Confirm Password"
                />
              </div>
              <button className="w-full mt-6 bg-[#C54442] text-white py-2 px-4 rounded-lg hover:bg-[#C54442] focus:outline-none focus:bg-green-400">
                <Link to='/modules/Congratulations/Congratu'></Link>
                Sign Up
              </button>
            </form>
            
            <div className="flex items-start justify-center py-5 gap-2">
              <p className="text-gray-400 font-medium">
              لديك حساب بالفعل ؟
              </p>
              <Link to='/modules/Login/Login' className=" underline text-[#C54442] font-bold">تسجيل الدخول </Link>
            </div>
           
          </div>

          <div className="w-full">
            <img
              src={Side_Image}
              alt="Login"
              className=" w-[800px] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
