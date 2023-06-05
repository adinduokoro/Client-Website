import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../features/toggle/toggleSlice";
import popupReducer from "../features/popup/popupSlice"


export const store = configureStore({
  reducer: {
    plug: toggleReducer,
    popup: popupReducer
  },
});