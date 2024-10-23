import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAnnouncement: true,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    hideAnnouncement: (state) => {
      state.showAnnouncement = false;
    },
  },
});

export const { hideAnnouncement } = commonSlice.actions;
export default commonSlice.reducer;
