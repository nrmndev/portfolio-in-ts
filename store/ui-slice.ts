import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export enum ThemeType {
//   DARK = "dark",
//   LIGHT = "light",
//   CUSTOM = "custom",
// }
export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    message: "Hello, I'm Normon! How's your day?",
    theme: "dark",
    isView: false,
    isMobile: false,
    isMessageActive: true,
    cardBackdrop: false,
    isModalActive: false,
  },
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
    toggleMessage(state, action: PayloadAction<boolean>) {
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
