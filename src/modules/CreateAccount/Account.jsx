import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchMainPaymentMethods } from "../../Statemanagment/Reducers/PostAccSlice";
import { fetchChildPaymentMethods } from "../../Statemanagment/Reducers/PostAccSlice";
import { fetchpostAccountbtn } from "../../Statemanagment/Reducers/PostAccSlice";

import img1 from '../../assets/Images/New folder/logo (1).png'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PaymentMethods = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mainMethods, childMethods, loading, error } = useSelector(
    (state) => state.paymentMethods
  );

  const [selectedBank, setSelectedBank] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [showAccountField, setShowAccountField] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");

console.log(accountNumber,selectedBank,selectedBranch);
  // Fetch main payment methods on mount
  useEffect(() => {
    dispatch(fetchMainPaymentMethods());
  }, [dispatch]);

  // Handle main select change (bank selection)
  const handleBankChange = (e) => {
    const bankId = e.target.value;
    setSelectedBank(bankId);
    setSelectedBranch(""); // Reset selected branch when changing bank
    setShowAccountField(false); // Hide account field when changing bank
    setAccountNumber(""); // Reset account number
    if (bankId) {
      // Fetch child payment methods based on selected bank
      dispatch(fetchChildPaymentMethods(bankId));
    }
  };

  // Handle branch select change
  const handleBranchChange = (e) => {
    const branchId = e.target.value;
    setSelectedBranch(branchId);
    setShowAccountField(!!branchId); // Show account field only when a branch is selected
  };

  // Handle account number input change
  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (accountNumber.trim()) {
      const dataSubmited=
      {
        "parent_method":selectedBank ,
        "child_method":selectedBranch,
        "number": accountNumber ,
    }
      dispatch(
      fetchpostAccountbtn(dataSubmited)).then((res)=>{
        console.log(res.payload.message);
        if (res.payload.message==='تم اضافة الحساب بنجاح') {
          

        toast.success("تم إضافة الحساب بنجاح!", {
          position: "top-center",
          autoClose: 2000,
        });
  
        setTimeout(() => {
          navigate("/modules/AccoutsUser/AccUse");
        }, 2000);
      } else {
        toast.error("يرجي المحاوله مره اخري ", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
      })
    
    } else {
      toast.error("يرجى إدخال رقم الحساب!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="payment-methods p-6 max-w-lg mx-auto">
        {/* Header Section */}
        <div className="col-span-10 flex flex-row justify-start gap-4 pt-12 lg:py-3">
          <img src={img1} className="h-10" alt="" />
          <h2 className="mb-12 text-4xl font-bold text-gray-800">
            الحسابات
          </h2>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* Main Select */}
        <select
          value={selectedBank}
          onChange={handleBankChange}
          className="block w-full p-2 mb-4 border rounded"
        >
          <option value="">Select Bank</option>
          {mainMethods.data?.map((bank , index) => (
            <option key={index} value={bank.id}>
              {bank.name}
            </option>
          ))}
        </select>
 
        {/* Child Select */}
        {selectedBank && (
          <select
            value={selectedBranch}
            onChange={handleBranchChange}
            className="block w-full p-2 mb-4 border rounded"
          >
            <option value="">Select Branch</option>
            {childMethods.data?.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.name}
              </option>
            ))}
          </select>
        )}

        {/* Account Number Field */}
        {showAccountField && (
          <div className="account-field mb-4">
            <label htmlFor="accountNumber" className="block mb-2">
              Enter Account Number:
            </label>
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              placeholder="Enter your account number"
              className="block w-full p-2 border rounded"
            />
          </div>
        )}

        {/* Submit Button */}
        {showAccountField && (
          <button
            onClick={handleSubmit}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            تم إضافة الحساب
          </button>
        )}

        {/* Toast Notification */}
        <ToastContainer />


      </div>
      <Footer />
    </>

  );
};

export default PaymentMethods;
