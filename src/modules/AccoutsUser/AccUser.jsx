// pages/UserAccounts.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAccounts } from "../../Statemanagment/Reducers/UserAccSlice";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Images/New folder/logo (1).png";

const UserAccounts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { accounts, loading, error } = useSelector(
    (state) => state.UserAccounts
  );
  console.log(accounts);

  useEffect(() => {
    dispatch(fetchUserAccounts());
  }, [dispatch]);

  return (
    <div className="user-accounts p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8">
        <img src={img1} alt="Logo" className="h-16 mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-800">الحسابات</h1>
      </div>

      {/* Loading and Error States */}
      {loading && (
        <p className="text-center text-red-500 font-semibold">
          جاري تحميل الحسابات...
        </p>
      )}
      {error && (
        <p className="text-center text-red-500 font-semibold">
          خطأ: {error}
        </p>
      )}

      {/* Accounts List */}
      <div className="space-y-6">
        {accounts?.map((account, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-md shadow-sm hover:shadow-lg transition-shadow bg-gray-50"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold text-gray-800">
                الحساب رقم {index + 1}
              </h2>
              <span className="text-sm text-gray-600">ID: {account.id}</span>
            </div>
            <p>
              <span className="font-semibold text-gray-700">البنك:</span>{" "}
              {account.child_payment_method.name}
            </p>
            <p>
              <span className="font-semibold text-gray-700">الفرع:</span>{" "}
              {account.child_payment_method.status}
            </p>
            <p>
              <span className="font-semibold text-gray-700">رقم الحساب:</span>{" "}
              {account.child_payment_method.number}
            </p>
          </div>
        ))}
      </div>

      {/* Add New Account Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate("/modules/CreateAccount/Account")}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold transition-colors"
        >
          إضافة حساب جديد
        </button>
      </div>
    </div>
  );
};

export default UserAccounts;
