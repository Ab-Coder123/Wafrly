import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiFetches from "../api/api";

// دالة إعادة تعيين كلمة المرور
export const fetchVerify = createAsyncThunk(
  "otpverify/fetchVerify",
  async (identifier, thunkAPI) => {
    try {
      const response = await apiFetches.otpverify.reset({ identifier });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const otpverify = createSlice({
  name: "otpverify",
  initialState: {
    loading: false,
    success: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVerify.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(fetchVerify.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
      })
      .addCase(fetchVerify.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "حدث خطأ أثناء إعادة تعيين كلمة المرور";
      });
  },
});

export default otpverify.reducer;
