import axios from 'axios';

// إعداد axiosInstance
const API_URL = 'https://Admin.afirly.net/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`, // افترضنا أن التوكن موجود في الـ localStorage
    'Content-Type' : 'application/json'
  },
});

const axiosauth = axios.create({
  baseURL: API_URL,
  headers: {
    
    'Content-Type' : 'application/json'

  },
});

// API functions باستخدام axiosInstance
const apiFetches = {
  authLogin: {
    login: (credentials) => axiosauth.post("/login", credentials), // إرسال بيانات تسجيل الدخول
  },
  forgetPassword: {
    forgetPassword: (email) => axiosauth.post("/forgot-password", { email }), // طلب إعادة تعيين كلمة السر
  },
  resetPassword: {
    resetPassword: (data) => axiosauth.post("/reset-password", data), // إعادة تعيين كلمة السر
  },
  otpVerify: {
    otpVerify: (otp) => axiosInstance.post("/verify", { otp }), // التحقق من OTP
  },
  authSignUp: {
    signUp: (formData) => axiosauth.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // تعيين الهيدر لتحديد نوع البيانات عند رفع الملفات
      },
    }), // إرسال بيانات التسجيل
  },
  authLogout: {
    logout: () => axiosInstance.post("/logout"), // إرسال طلب تسجيل الخروج
  },
  profite: {
    profite: () => axiosInstance.get("/profite"), // إرسال طلب تسجيل الخروج
  },
  userAccounts: {
    getAccountUser: () => axiosInstance.get(`/get-user`), // الحصول على تفاصيل حساب معين
  },

  Updateuser: {
    UpdateUser: () => axiosauth.post(`/update`), // الحصول على تفاصيل حساب معين
  },
};

export default apiFetches;
