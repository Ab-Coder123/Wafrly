import React from "react";
import Side_Image from "../../assets/Images/New folder/Side Image.png";
import logo from '../../assets/Images/New folder/logo (1).png'
import { Link  } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="py-12 flex  items-center justify-center font-cairo">
        <div className="flex justify-center items-start bg-white  shadow-lg rounded-lg">
         

          {/* form */}
          <div className='  p-5 w-80 lg:w-full'>
            <div className="flex flex-row   items-center justify-center gap-6 mx-auto">
              <img src={logo} alt=""  />
            <h2 className="text-3xl font-bold  text-black  text-center">
              تسجيل الدخول
            </h2>
            </div>
            <p className=" text-center text-gray-400 text-sm">برجاء اكمال البيانات لاستكمال عملية الدخول</p>
           
            <p className="text-sm text-[#C54442]  font-bold   text-center"></p>

            <form className="mt-6">
              <div>
                <label className="block text-sm text-[#C54442]  font-bold  ">البريد الإلكتروني / رقم الهاتف</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Email Address"
                />
              </div>
              <div className="mt-4">
                <label className=" rtl:block text-sm text-[#C54442]  font-bold  ">كلمة المرور</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
     
               
              </div>
              <button className="w-full mt-6 bg-[#C54442] text-white py-2 px-4 rounded-lg hover:bg-[#a03a38] focus:outline-none focus:bg-green-800">
                تسجيل الدخول 
              </button>
            </form>

            <div className="mt-6">
              <p className="text-center text-sm text-gray-400  font-bold  ">تسجيل الدخول من خلال </p>
              <div className="flex justify-center mt-3">
                <button className="flex items-center px-4 py-2 border rounded-lg text-[#C54442]  font-bold   hover:bg-gray-100 focus:outline-none">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png"
                    alt="Google"
                    className="w-4 h-4"
                  />
                </button>
                <button className="flex items-center px-4 py-2 ml-2 border rounded-lg text-[#C54442]  font-bold   hover:bg-gray-100 focus:outline-none">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/facebook-224-498412.png"
                    alt="GitHub"
                    className="w-4 h-4"
                  />
                </button>
                <button className="flex items-center px-4 py-2 ml-2 border rounded-lg text-[#C54442]  font-bold   hover:bg-gray-100 focus:outline-none">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/instagram-216-721958.png"
                    alt="Instagram"
                    className="w-4 h-4"
                  />
                </button>
                <button className="flex items-center px-4 py-2 ml-2 border rounded-lg text-[#C54442]  font-bold   hover:bg-gray-100 focus:outline-none">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/twitter-241-721979.png"
                    alt="Twitter"
                    className="w-4 h-4"
                  />
                </button>
              </div>
              <Link
                to="/modules/SignUp/Signup"
                className="text-gray-500 hover:underline py-3 flex justify-center"
              >
                {/* If you dont have account{" "} */}
                <h2 className=" ml-2 inline text-[#C54442]">Sign-Up</h2>
              </Link>
            </div>
          </div>

          <div className="w-full hidden lg:block">
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

export default Login;
