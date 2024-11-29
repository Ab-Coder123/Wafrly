// features/paymentMethods/paymentMethodsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchMainPaymentMethods = createAsyncThunk(
    'paymentMethods/fetchMain',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          'https://Admin.afirly.net/api/mainPaymentMethods',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        return response.data; // Assuming it returns an array of banks
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );
  
  
  

  export const fetchChildPaymentMethods = createAsyncThunk(
    'paymentMethods/fetchChild',
    async (bankId) => {
      // بناء الرابط مع الـ query parameters
      const response = await axios.get(
        `https://admin.afirly.net/api/childPaymentMethods?parent_id=${bankId}&type=0`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data; // Assuming it returns an array of payment methods
    }
  );

const paymentMethodsSlice = createSlice({
  name: 'paymentMethods',
  initialState: {
    mainMethods: [],
    childMethods: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Main methods
      .addCase(fetchMainPaymentMethods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMainPaymentMethods.fulfilled, (state, action) => {
        state.mainMethods = action.payload;
        state.loading = false;
      })
      .addCase(fetchMainPaymentMethods.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      // Child methods
      .addCase(fetchChildPaymentMethods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChildPaymentMethods.fulfilled, (state, action) => {
        state.childMethods = action.payload;
        state.loading = false;
      })
      .addCase(fetchChildPaymentMethods.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default paymentMethodsSlice.reducer;
