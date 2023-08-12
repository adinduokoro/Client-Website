import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: { value: 0, imageSrc: "", show: false, modal: false, imgView: false },
  reducers: {
    setPopupDesc: (state, action) => {
      state.value = action.payload;
    },
    setPopupImg: (state, action) => {
      state.imageSrc = action.payload;
    },
    showPopup: (state, action) => {
      state.show = action.payload;
    },
    showPopupImg: (state, action) => {
      state.imgView = action.payload;
    },
    showModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export default popupSlice.reducer;
export const { setPopupDesc, showPopup, showModal, setPopupImg, showPopupImg } = popupSlice.actions;
