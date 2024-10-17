// // import  { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { sendResetPasswordRequest, setEmail } from './slice';
// import React from "react";
// import { Link } from "react-router-dom";
// import img1 from "../../assets/Images/Logo.png";
// function ForgetPassword() {
//   //   const dispatch = useDispatch();
//   //   const { email, status, error } = useSelector((state) => state.auth);

//   //   const handleSubmit = (e) => {
//   //     e.preventDefault();
//   //     dispatch(sendResetPasswordRequest(email));
//   //   };

//   return (
//     <> 
//       <section className=" py-12 w-full max-h-full flex  overflow-hidden items-center h-screen justify-center bg-gray-200">
//       <div className="flex bg-white h-full shadow-lg rounded-lg overflow-hidden">
//       <div className="overflow-hidden w-96 bg-[#F2EEEE] hidden md:flex relative">
//             <div className="absolute inset-0">
//               <img
//                 src={img1}
//                 alt="Login"
//                 className=" relative  top-20 mx-auto"
//               />
              
//             </div>
//             <div className=" relative flex justify-center items-center left-24">
//             <h1 className="text-[#592983] font-bold text-4xl">
//               Welcome <br/>
//               EGY GUIDE !
//               </h1>
//             </div>
           
//             <div className="balluser1"></div>
//             <div className="balluser3"></div>
//             <div className="balluser4"></div>
          
//           </div>

//           <div className="bg-gray-100">
//       <form className="w-full max-w-md h-full bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {" "}
//           Please enter your mobile number to send you <span className="text-[#592983] text-lg">verfication code</span> 
//         </h2>

//         <div className="flex flex-col items-center mb-4 ">
//           <label
//             className="mb-2 font-bold text-gray-700"
//             htmlFor="phone-number"
//           >
//             Phone Number
//           </label>
//           <div className="flex items-center border border-gray-300 rounded-lg p-3">
//             <span className="flex items-center mr-2">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" // رابط صورة العلم المصري
//                 alt="Egypt Flag"
//                 className="w-6 h-4 mr-2"
//               />
//               <span className="text-gray-700">+20</span>
//             </span>
//             <input
//               type="tel"
//               id="phone-number"
//               placeholder="phone number"
//               className="flex-grow outline-none text-gray-500"
//               pattern="[0-9]{10}"
//               required
//             />
//           </div>
//         </div>
//         {/* btn one */}
//         <button
//           type="submit"
//           className="w-full bg-[#592983] text-white p-3 rounded-lg mb-5"
//         >
//             <Link to="/modules/Verfycode/Verifycode">Send</Link>
          
//           {/* {status === 'loading' ? 'Sending...' : 'Send Reset Link'} */}
//         </button>
//         {/* btn two */}
//         <button
//           type="submit"
//           className="w-50 text-white rounded-lg text-3xl"
//         >
//             <Link to='/modules/Login/login'>⬅️</Link>
//           {/* {status === 'loading' ? 'Sending...' : 'Send Reset Link'} */}
//         </button>
//         {/* {status === 'failed' && <p className="text-red-500 mt-4">error </p>} */}
//         {/* {status === 'succeeded' && <p className="text-[#592983] mt-4">Reset link sent successfully!</p>} */}
//       </form>
//     </div>

//       </div>
//       </section>
//     </>
   
//   );
// }

// export default ForgetPassword;
import React from 'react';

const Forgetpass = () => {
  return (
    <div>
      
    </div>
  );
}

export default Forgetpass;
