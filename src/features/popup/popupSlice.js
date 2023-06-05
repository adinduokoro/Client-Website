import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: { value: 0, show: false },
  reducers: {
    setPopupDesc: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
    showPopup: (state, action) => {
      state.show = action.payload;
      console.log(state.show);
    },
  },
});

export default popupSlice.reducer;
export const { setPopupDesc, showPopup } = popupSlice.actions;
