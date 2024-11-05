import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import apiFetches from "../api/api";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await apiFetches.users.fetchByid();
    return response.data;
  });


  // slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
      users: [],
      loading: false,
      error: null,
    },

    reducers: {
    
    },

    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default userSlice.reducer;
  

// دي ب اذن الله  Cycle هنمشي علي 