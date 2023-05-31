import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "plug",
  initialState: { value: false },
  reducers: {
    toggleSwitch: (state, action) => {
      state.value = !state.value;
    },
    closeMenu: (state, action) => {
      state.value = false;
    }
  },
});

export default toggleSlice.reducer;
export const { toggleSwitch , closeMenu } = toggleSlice.actions;