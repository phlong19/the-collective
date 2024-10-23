import { configureStore } from "@reduxjs/toolkit";

import commonSlice from "@/services/redux/commonSlice";
import authSlice from "@/services/redux/authSlice";

export const store = configureStore({
  reducer: {
    common: commonSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
