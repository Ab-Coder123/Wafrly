import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiFetches from "../api/api"; // استدعاء دوال API

// العمليات غير المتزامنة (Async Thunks)

// 1. جلب جميع الشكاوى
export const fetchComplains = createAsyncThunk(
  "complains/fetchComplains",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiFetches.getcompilains.getcompilains();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching complains");
    }
  }
);

// 2. جلب شكوى محددة
export const fetchComplainById = createAsyncThunk(
  "complains/fetchComplainById",
  async (complainId, { rejectWithValue }) => {
    try {
      const response = await apiFetches.getcompilain.getcompilain(complainId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching complain");
    }
  }
);

// 3. إضافة شكوى
export const postComplain = createAsyncThunk(
  "complains/postComplain",
  async (complainData, { rejectWithValue }) => {
    try {
      const response = await apiFetches.postcompilains.postcompilains(complainData);
      console.log(response.data);
      return response.data;
      
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error posting complain");
    }
  }
);

// 4. حذف شكوى
export const deleteComplain = createAsyncThunk(
  "complains/deleteComplain",
  async (complainId, { rejectWithValue }) => {
    try {
      await apiFetches.Deletcompilains.Deletcompilains(complainId);
      return { id: complainId };
    } 
    catch (error) {
      return rejectWithValue(error.response?.data || "Error deleting complain");
    }
  }
);

// Slice
const complainSlice = createSlice({
  name: "complains",
  initialState: {
    complains: [],
    complain: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // جلب جميع الشكاوى
      .addCase(fetchComplains.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComplains.fulfilled, (state, action) => {
        state.loading = false;
        state.complains = action.payload;
      })
      .addCase(fetchComplains.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // جلب شكوى محددة
      .addCase(fetchComplainById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComplainById.fulfilled, (state, action) => {
        state.loading = false;
        state.complain = action.payload;
      })
      .addCase(fetchComplainById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // إضافة شكوى
      .addCase(postComplain.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postComplain.fulfilled, (state, action) => {
        state.loading = false;
        // state.complains.push(action.payload);
      })
      .addCase(postComplain.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // حذف شكوى
      .addCase(deleteComplain.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteComplain.fulfilled, (state, action) => {
        state.loading = false;
        state.complains = state.complains.filter(
          (complain) => complain.id !== action.payload.id
        );
      })
      .addCase(deleteComplain.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default complainSlice.reducer;
