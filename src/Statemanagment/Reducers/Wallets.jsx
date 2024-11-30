// features/accounts/accountsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWallets  = createAsyncThunk(
    'wallets/fetchWallets',
    async (Walltstoken, { rejectWithValue }) => {
      try {
        // إجراء الطلب باستخدام axios
        const response = await axios.get(`https://Admin.afirly.net/api/wallets?page=${Walltstoken}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
  
        // عرض البيانات المسترجعة في الكونسول
        console.log(response.data.data);
  
        // إرجاع البيانات عند نجاح الطلب
        return response.data.data; // Assuming it returns an array of accounts
      } catch (error) {
        // في حالة حدوث خطأ، نقوم بإرجاع الخطأ عبر rejectWithValue
        console.error('Error fetching user accounts:', error);
        // إرجاع معلومات الخطأ باستخدام rejectWithValue
        return rejectWithValue(error.response ? error.response.data : error.message);
      }
    }
  );

const walletsSlice = createSlice({
  name: 'wallets',
  initialState: {
    wallets: [],
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
        state.wallets = action.payload;
        state.loading = false;
        console.log('action' , action.payload);
      })
      .addCase(fetchUserAccounts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default walletsSlice.reducer;
