import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiFetches from "../api/api";

// دالة إعادة تعيين كلمة المرور
export const fetchforgetPassword = createAsyncThunk(
  "forgetPassword/fetchResetPassword",
  async (identifier, thunkAPI) => {
    try {
      const response = await apiFetches.forgetPassword.reset({ identifier });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const forgetPassword = createSlice({
  name: "forgetPassword",
  initialState: {
    loading: false,
    success: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchforgetPassword.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchforgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
      })
      .addCase(fetchforgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "حدث خطأ أثناء إعادة تعيين كلمة المرور";
      });
  },
});

export default forgetPassword.reducer;
