import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiFetches from "../api/api";

// دالة للتسجيل (signUp)
export const fetchSignUp = createAsyncThunk('signup/fetchSignUp', async (Credentials, thunkAPI) => {
    try {
        const response = await apiFetches.authSignUp.signUp(Credentials); // تمرير البيانات
        localStorage.setItem('token', response.data.authToken.data.authToken)
        console.log("Error response:", error.response?.data);
        return response.data;
    } catch (error) {
        console.log(error.message);
        console.log("Error response:", error.response?.data);
        return thunkAPI.rejectWithValue(error.response?.data?.message || "حدث خطأ غير معروف");
    }
});

// شريحة الحالة الخاصة بالتسجيل (authSignUp)
const authSignUp = createSlice({
    name: 'authSignUp',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },

    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },

    extraReducers: (builder) => {
        builder
            // حالة الـ pending عند بدء التسجيل
            .addCase(fetchSignUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // حالة الـ fulfilled عند إتمام التسجيل بنجاح
            .addCase(fetchSignUp.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;  // تخزين المستخدم بعد التسجيل
            })

            // حالة الـ rejected عند فشل التسجيل
            .addCase(fetchSignUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'حدث خطأ أثناء التسجيل';
                console.log(action.payload);
            })
    }
});

// تصدير الـ logout الذي يقوم بتسجيل الخروج
export const { logout } = authSignUp.actions;

// تصدير الـ reducer لاستخدامه في الـ store
export default authSignUp.reducer;
