import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: { value: 0 },
  reducers: {
    setPopup: (state, action) => {
      state.value = action.payload;
      console.log(state.value)
    },
  },
});

export default popupSlice.reducer;
export const { setPopup } = popupSlice.actions;
