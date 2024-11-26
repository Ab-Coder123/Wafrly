// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Reducers/LoginSlice';
import signUpReducer from '../Reducers/SignUpSlice'; // استيراد الـ Signup Reducer
import forgetPassword from '../Reducers/ForgetPassSlice'
import resetPassword from '../Reducers/ResetPass'
import otpverify from '../Reducers/verifySlice'
import accountReducer from '../Reducers/AccountSlice'
import profite from '../Reducers/Profit'
const store = configureStore({
  reducer: {
    login: loginReducer,
    otpverify :otpverify ,
    forgetPassword : forgetPassword ,
    resetPassword : resetPassword ,
    signup: signUpReducer, // إضافة الـ Signup Reducer هنا
    account: accountReducer,
    profite : profite ,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // هنا ممكن تضيف middleware إضافية لو احتجت
    }),
});

export default store;