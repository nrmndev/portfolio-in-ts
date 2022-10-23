import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiInitialValueType } from "./ui-types";
export const uiSlice = createSlice({
  name: "ui",
  initialState: UiInitialValueType,
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    setView(state, action: PayloadAction<boolean>) {
      state.isView = action.payload;
    },
    setToggleMessage(state, action: PayloadAction<boolean>) {
      state.isMessageActive = action.payload;
    },
    setMobileView(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload;
    },
    setCardBackdrop(state, action: PayloadAction<boolean>) {
      state.cardBackdrop = action.payload;
    },
    setModalActive(state, action: PayloadAction<boolean>) {
      state.isModalActive = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
