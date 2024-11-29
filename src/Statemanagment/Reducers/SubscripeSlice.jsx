import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// تعريف thunk لجلب بيانات خطة العميل بناءً على الـ Token
export const fetchPlans = createAsyncThunk(
  'plans/fetchPlans',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://Admin.afirly.net/api/plans', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      return response.data; // بيانات العميل من الـ API
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ ما'); // معالجة الخطأ
    }
  }
);

// إنشاء Slice
const plansSlice = createSlice({
  name: 'plans',
  initialState: {
    plans: {}, // تخزين بيانات خطة العميل هنا
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.plans = action.payload.data; // بيانات العميل
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default plansSlice.reducer;
