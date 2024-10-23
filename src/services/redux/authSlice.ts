import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
