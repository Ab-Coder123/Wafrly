import React, { useEffect } from "react";
import { useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin } from "../../Statemanagment/Reducers/LoginSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Side_Image from "../../assets/Images/New folder/Side Image.png";
import logo from '../../assets/Images/New folder/logo (1).png'
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login); // احصل على حالة التحميل والخطأ من الـ Redux store

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");


 
  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(fetchLogin({ identifier, password })).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/modules/Profitratio/Profitratio'); // توجيه المستخدم بعد التسجيل الناجح
      } else {
        toast.error("عذرًا، البيانات غير صحيحة. يرجى المحاولة مرة أخرى!", {
          position: "top-center",
          autoClose: 3000, // يغلق تلقائيًا بعد 3 ثوانٍ
          hideProgressBar: true,
          icon: <img src={logo} alt="Logo" className="w-6 h-6" />,
        });
      }
    });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />

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
            {error && (
              <p className="text-sm text-[#ffd13a] font-bold text-center">
                {error.message || 'حدث خطأ ما'}
              </p>
            )}
            <form onSubmit={handleLogin} className="mt-6">
              <div>
                <label className="block text-sm text-[#C54442]  font-bold  "> رقم الهاتف</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Email Address"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}

                />
              </div>
              <div className="mt-4">
                <label className=" rtl:block text-sm text-[#C54442]  font-bold  ">كلمة المرور</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C54442]"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex justify-between items-center mt-4">

              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-[#C54442] text-white py-2 px-4 rounded-lg hover:bg-[#C54442] focus:outline-none focus:bg-green-800">
                {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
              </button>
            </form>

            <div className="mt-6">
              <p className="text-center text-sm text-gray-800  font-bold  ">تسجيل الدخول من خلال </p>
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
                <h2 className=" ml-2 inline text-[#C54442]">انشاء حساب </h2>
              </Link>
              <Link
                to="/modules/ForgetPass/ForgetPass"
                className="text-gray-500 hover:underline py-3 flex justify-center"
              >
                {/* If you dont have account{" "} */}
                <h2 className=" ml-2 inline text-[#C54442]"> هل نسيت كلمه المرور </h2>
              </Link>
            </div>
          </div>

          <div className="w-full">
            <img
              src={Side_Image}
              alt="Login"
              className=" object-cover h-lvh w-[650px] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
