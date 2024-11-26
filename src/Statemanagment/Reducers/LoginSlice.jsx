import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiFetches from "../api/api";

// دالة createAsyncThunk لتسجيل الدخول
export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (credentials, thunkAPI) => {
    try {
        const response = await apiFetches.authLogin.login(credentials);
        console.log("Response:", response.data); // تحقق من البيانات
        localStorage.setItem('token', response.data.data.authToken);        
        return response.data;
    } catch (error) {
        console.error("Error:", error.response.data); // طباعة الخطأ
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// دالة logout باستخدام createAsyncThunk
export const fetchLogout = createAsyncThunk('auth/fetchLogout', async (credentials, thunkAPI) => {
    try {
        await apiFetches.authLogout.logout(credentials);
        localStorage.removeItem('token'); // أو أي مفتاح آخر
        return true; // تسجيل الخروج بنجاح
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue("Failed to logout");
    }
});

const authLogin = createSlice({
    name: 'authLogin',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload; // هنا بنحفظ بيانات المستخدم
        },
        resetUser: (state) => {
            state.user = null;
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // حفظ بيانات المستخدم
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Error logging in';
            })
            .addCase(fetchLogout.fulfilled, (state) => {
                state.user = null; // مسح بيانات المستخدم عند الخروج
            })
            .addCase(fetchLogout.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { resetUser, setUser } = authLogin.actions;
export default authLogin.reducer;
