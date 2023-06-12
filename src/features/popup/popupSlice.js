import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: { value: 0, imageSrc: "", show: false, modal: false, imgView: false },
  reducers: {
    setPopupDesc: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
    setPopupImg: (state, action) => {
      state.imageSrc = action.payload;
      console.log(state.value);
    },
    showPopup: (state, action) => {
      state.show = action.payload;
      console.log(state.show);
    },
    showPopupImg: (state, action) => {
      state.imgView = action.payload;
      console.log(state.show);
    },
    showModal: (state, action) => {
      state.modal = action.payload;
      console.log(state.show);
    },
  },
});

export default popupSlice.reducer;
export const { setPopupDesc, showPopup, showModal, setPopupImg, showPopupImg } = popupSlice.actions;
