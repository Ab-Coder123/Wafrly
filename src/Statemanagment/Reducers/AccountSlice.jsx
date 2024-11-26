import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiFetches from "../api/api"; // استبدل المسار بمسار ملف الـ API

// إنشاء thunk لجلب تفاصيل حساب مستخدم معين
export const fetchAccountDetails = createAsyncThunk(
  "account/fetchAccountDetails",
  async (_,  thunkAPI ) => {
    try {
      const response = await apiFetches.userAccounts.getAccountUser();
      console.log(response.data);
      return response.data; // البيانات التي تم جلبها
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message || "حدث خطأ غير متوقع");
    }
  }
);

// إنشاء thunk لتحديث حساب مستخدم معين
export const updateAccount = createAsyncThunk(
  'account/updateAccount',
  async ({ _, data }) => {
      try {
          const response = await apiFetches.updateAccount( data);
          console.log('Account Updated:', response);
          return response.data;
      } catch (error) {
          console.log('Error updating account:', error);
          throw error;
      }
  }
);


// إنشاء الـ slice
const accountSlice = createSlice({
  name: "account",
  initialState: {
    accountDetails: null ,
    loading: false,
    error: null,
    updateStatus: null,
  },
  reducers: {
    clearUser: (state) => {
      state.accountDetails = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccountDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.accountDetails = action.payload;
      })
      .addCase(fetchAccountDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateAccount.pending, (state) => {
        state.loading = true;
        state.updateStatus = null;
        state.error = null;
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.accountDetails = action.payload;
        state.updateStatus = "success";
      })
      .addCase(updateAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.updateStatus = "failed";
      });
  },
});
// تصدير الـ reducer
export const { clearUser } = accountSlice.actions;
export default accountSlice.reducer;

