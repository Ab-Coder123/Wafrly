// features/accounts/accountsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserAccounts  = createAsyncThunk(
    'accounts/fetchUserAccounts',
    async (_, { rejectWithValue }) => {
      try {
        // إجراء الطلب باستخدام axios
        const response = await axios.get('https://Admin.afirly.net/api/usreAccounts', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
  
        // عرض البيانات المسترجعة في الكونسول
        console.log(response.data);
  
        // إرجاع البيانات عند نجاح الطلب
        return response.data; // Assuming it returns an array of accounts
      } catch (error) {
        // في حالة حدوث خطأ، نقوم بإرجاع الخطأ عبر rejectWithValue
        console.error('Error fetching user accounts:', error);
        // إرجاع معلومات الخطأ باستخدام rejectWithValue
        return rejectWithValue(error.response ? error.response.data : error.message);
      }
    }
  );

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    accounts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch user accounts
      .addCase(fetchUserAccounts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserAccounts.fulfilled, (state, action) => {
        state.accounts = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserAccounts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default accountsSlice.reducer;
