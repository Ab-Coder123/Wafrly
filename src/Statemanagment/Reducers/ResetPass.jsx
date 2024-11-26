// ResetPassSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiFetches from "../api/api";

// دالة إعادة تعيين كلمة المرور
export const fetchResetPassword = createAsyncThunk(
  "resetPassword/fetchResetPassword",  // تم تعديل هنا لتتوافق مع الاسم الجديد
  async (identifier, thunkAPI) => {
    try {
      const response = await apiFetches.resetpassword.reset({ identifier });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const resetPassword = createSlice({
  name: "resetPassword",  // تم تعديل هنا
  initialState: {
    loading: false,
    success: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResetPassword.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchResetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
      })
      .addCase(fetchResetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "حدث خطأ أثناء إعادة تعيين كلمة المرور";
      });
  },
});

export default resetPassword.reducer;
