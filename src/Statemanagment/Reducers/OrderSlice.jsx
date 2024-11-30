import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiFetches from "../api/api";

// دالة لإرسال الطلب (fetchOrder)
export const fetchOrder = createAsyncThunk(
  'Order/fetchOrder', 
  async (Credentials, thunkAPI) => {
    try {
        const response = await apiFetches.Postorder.Order(Credentials); // تمرير البيانات
        console.log("Response data:", response.data);
        return response.data// إرجاع البيانات للـ Redux
    } catch (error) {
        console.log("Error:", error.message);
        console.error("Error response:", error.response?.data);
        return thunkAPI.rejectWithValue(error.response?.data?.message || "حدث خطأ غير معروف");
    }
  }
);

// شريحة الحالة الخاصة بالطلبات (Order)
const Order = createSlice({
    name: 'Order',
    initialState: {
      Orders: null, // لتخزين بيانات الطلب
      loading: false, // لتتبع حالة التحميل
      error: null, // لتخزين أي أخطاء
    },
    extraReducers: (builder) => {
        builder
        // حالة الـ pending عند بدء الطلب
        .addCase(fetchOrder.pending, (state) => {
            state.loading = true;
            state.error = null; // إعادة تعيين الخطأ
        })

        // حالة الـ fulfilled عند إتمام الطلب بنجاح
        .addCase(fetchOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.Orders = action.payload; // تخزين البيانات في الحالة
            if (action.payload) {
                // تخزين بيانات أخرى إذا لزم الأمر
                localStorage.setItem('orderDetails', JSON.stringify(action.payload));
            }
        })

        // حالة الـ rejected عند فشل الطلب
        .addCase(fetchOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'حدث خطأ أثناء معالجة الطلب';
            console.error("Error payload:", action.payload);
        });
    }
});

// تصدير الـ reducer لاستخدامه في الـ store
export default Order.reducer;
