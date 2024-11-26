import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiFetches from "../api/api"; // استبدل المسار بمسار ملف الـ API

// إنشاء thunk لجلب تفاصيل حساب مستخدم معين
export const fetchprofite = createAsyncThunk(
  "profite/fetchprofite",
  async (_, thunkAPI) => {
    try {
      const response = await apiFetches.profite.profite();
      return response.data; // البيانات التي تم جلبها
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || "حدث خطأ غير متوقع"
      );
    }
  }
);

// إنشاء الـ slice
const profite = createSlice({
  name: "profite",
  initialState: {
    profiteData: null,
    loading: false,
    error: null,
    updateStatus: null,
  },
  reducers: {
    clearProfiteData: (state) => {
      state.profiteData = []; // لتصفير البيانات
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchprofite.pending, (state) => {
        state.loading = true; // أثناء تحميل البيانات
        state.error = null; // تصفير الخطأ
      })
      .addCase(fetchprofite.fulfilled, (state, action) => {
        state.loading = false; // بعد تحميل البيانات بنجاح
        state.profiteData = action.payload; // تخزين البيانات في state
      })
      .addCase(fetchprofite.rejected, (state, action) => {
        state.loading = false; // عند الفشل في جلب البيانات
        state.error = action.payload; // تخزين الخطأ
      });
  },
});

// تصدير الـ reducer
export const { clearProfiteData } = profite.actions;
export default profite.reducer;
