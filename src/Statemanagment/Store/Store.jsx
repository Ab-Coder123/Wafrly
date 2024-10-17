// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Reducers/UserSlice';
import cardsReducer from '../Reducers/StoriesSlices';

const store = configureStore({
  reducer: {
    user: userReducer,
    cards: cardsReducer,
    // ممكن تضيف reducers تانية هنا لو عندك
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // هنا ممكن تضيف middleware إضافية لو احتجت
    }),
});

export default store;
