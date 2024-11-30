// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Reducers/LoginSlice';
import signUpReducer from '../Reducers/SignUpSlice'; // استيراد الـ Signup Reducer
import forgetPassword from '../Reducers/ForgetPassSlice'
import resetPassword from '../Reducers/ResetPass'
import otpverify from '../Reducers/verifySlice'
import accountReducer from '../Reducers/AccountSlice'
import profite from '../Reducers/Profit'
import Order from '../Reducers/OrderSlice'
import getallorder from '../Reducers/GetOrderSlice'
import complainSlice from '../Reducers/Compilain' 
import paymentMethodsSlice from '../Reducers/PostAccSlice'
import accountsSlice from '../Reducers/UserAccSlice'
import plansSlice from '../Reducers/SubscripeSlice'
import statusSlice from '../Reducers/walletstatus'
const store = configureStore({
  reducer: {
    login: loginReducer,
    otpverify :otpverify ,
    forgetPassword : forgetPassword ,
    resetPassword : resetPassword ,
    signup: signUpReducer, // إضافة الـ Signup Reducer هنا
    account: accountReducer,
    profite : profite ,
    postorder : Order ,
    getorders : getallorder ,
    complains : complainSlice ,
    paymentMethods : paymentMethodsSlice ,
    UserAccounts : accountsSlice ,
    plans : plansSlice ,
    statuswallet : statusSlice ,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // هنا ممكن تضيف middleware إضافية لو احتجت
    }),
});

export default store;