// src/features/orders/fetchGetOrderSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiFetches from '../api/api';  // تأكد من أن `apiFetches` يحتوي على الدوال المطلوبة

// Async Thunk لجلب الطلبات
export const fetchGetallOrder = createAsyncThunk(
  'allOrder/fetchGetallOrder', // اسم الأكشن
  async (statusId, thunkAPI) => {
    
    try {
      const response = await apiFetches.getallorders.allOrder(statusId); // استدعاء API مع statusId
      console.log(response);
      return response.data.data  // إرجاع البيانات المستلمة
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);  // إرجاع الخطأ إذا حدث
    }
  }
);


export const fetchorderstatus = createAsyncThunk(
  'statusOrder/fetchorderstatus', // اسم الأكشن
  async (_, thunkAPI) => {
    
    try {
      const response = await apiFetches.orderStatus.Orderstatus(); // استدعاء API مع statusId
      console.log(response.data.data);
      return response.data;  // إرجاع البيانات المستلمة
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);  // إرجاع الخطأ إذا حدث
    }
  }
);

const getallorder = createSlice({
  name: 'allOrder',
  initialState: {
    orders:[],  // لتخزين الطلبات
    loading: false,  // لتتبع حالة التحميل
    error: null,  // لتخزين أي خطأ قد يحدث
  },
  reducers: {},  // لا يوجد reducers مبدئية في هذا الـ slice
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetallOrder.pending, (state) => {
        state.loading = true;  // عندما يبدأ الطلب
      })
      .addCase(fetchGetallOrder.fulfilled, (state, action) => {
        state.loading = false;  // عند اكتمال الطلب
        state.orders = action.payload; // التأكد من أن `orders` مصفوفة
      })
      .addCase(fetchGetallOrder.rejected, (state, action) => {
        state.loading = false;  // عند فشل الطلب
        state.error = action.payload || action.error.message;  // تخزين الخطأ
      });
  },
});

export default getallorder.reducer;  // تصدير الـ reducer الخاص بالـ slice
