import { Link } from "react-router-dom";
import React , { useState, useEffect } from "react";
import img1 from "../../assets/Images/Logo.png";
const Verifycode = () => {
  const [timeLeft, setTimeLeft] = useState(180); // 3 دقائق = 180 ثانية
  const [code, setCode] = useState(new Array(5).fill(''));

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

//   code 

const handleChange = (element, index) => {
    const value = element.value.replace(/\D/g, ''); // السماح فقط بإدخال الأرقام
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // الانتقال إلى الحقل التالي تلقائيًا عند الإدخال
      if (element.nextSibling && value) {
        element.nextSibling.focus();
      }
    }
  };

  return (
    <> 
    <section className=" py-12 w-full max-h-full flex  overflow-hidden items-center h-screen justify-center bg-gray-200">
    <div className="flex bg-white h-full shadow-lg rounded-lg overflow-hidden">
    <div className="overflow-hidden w-96 bg-[#F2EEEE] hidden md:flex relative">
          <div className="absolute inset-0">
            <img
              src={img1}
              alt="Login"
              className=" relative  top-20 mx-auto"
            />
            
          </div>
          <div className=" relative flex justify-center items-center left-24">
          <h1 className="text-[#592983] font-bold text-4xl">
            Welcome <br/>
            EGY GUIDE !
            </h1>
          </div>
         
          <div className="balluser1"></div>
          <div className="balluser3"></div>
          <div className="balluser4"></div>
        
        </div>


        <div className="flex flex-col items-center justify-center h-screen p-5 bg-white space-y-6">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Enter Verification Code</h1>
      <div className="flex justify-center space-x-4 mb-6">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target, index)}
            className="w-12 h-12 text-center border border-gray-300 rounded-lg text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ))}
      </div>
      <div className="text-6xl font-mono text-[#592983]">
        {formatTime(timeLeft)}
      </div>
    </div>
        {/* btn one */}
        <button
          type="submit"
          className="w-60 bg-[#592983] text-white p-3 rounded-lg mb-5"
        >
          <Link to="/modules/Changepass/Changepass"></Link>
          Send
          {/* {status === 'loading' ? 'Sending...' : 'Send Reset Link'} */}
        </button>
        {/* btn two */}
        <button type="submit" className="w-50 text-white rounded-lg text-3xl">
          <Link to="/modules/Forgetpass/Forgetpass">⬅️</Link>
          {/* {status === 'loading' ? 'Sending...' : 'Send Reset Link'} */}
        </button>
        {/* {status === 'failed' && <p className="text-red-500 mt-4">error </p>} */}
        {/* {status === 'succeeded' && <p className="text-green-500 mt-4">Reset link sent successfully!</p>} */}
    
  </div>
  </div>
  
        </section>
</>
  
  );
    
};

export default Verifycode;
