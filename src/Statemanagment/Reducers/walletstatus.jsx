import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// تعريف thunk لجلب بيانات خطة العميل بناءً على الـ Token
export const fetchstatus = createAsyncThunk(
  'status/fetchstatus',
  async (statusid, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://Admin.afirly.net/api/wallets/status?=${statusid}`,  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      return response.data.data; // بيانات العميل من الـ API
    } catch (error) {
      return rejectWithValue(error.response?.data || 'حدث خطأ ما'); // معالجة الخطأ
    }
  }
);

// إنشاء Slice
const statusSlice = createSlice({
  name: 'plans',
  initialState: {
    statuswallet: {}, // تخزين بيانات خطة العميل هنا
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchstatus.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchstatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statuswallet = action.payload.data; // بيانات العميل
      })
      .addCase(fetchstatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default statusSlice.reducer;
