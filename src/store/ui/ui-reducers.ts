import { PayloadAction } from "@reduxjs/toolkit";
import { UiInitialValueType } from "./ui-types";

export const uiReducers = {
  //   setMessage(state: typeof UiInitialValueType, action: PayloadAction<string>) {
  //     state.message = action.payload;
  //   },
  setTheme(state: typeof UiInitialValueType, action: PayloadAction<string>) {
    state.theme = action.payload;
  },
  setView(state: typeof UiInitialValueType, action: PayloadAction<boolean>) {
    state.isView = action.payload;
  },
  setToggleMessage(
    state: typeof UiInitialValueType,
    action: PayloadAction<boolean>
  ) {
    state.isMessageActive = action.payload;
  },
  setMobileView(
    state: typeof UiInitialValueType,
    action: PayloadAction<boolean>
  ) {
    state.isMobile = action.payload;
  },
  setCardBackdrop(
    state: typeof UiInitialValueType,
    action: PayloadAction<boolean>
  ) {
    state.cardBackdrop = action.payload;
  },
  setModalActive(
    state: typeof UiInitialValueType,
    action: PayloadAction<boolean>
  ) {
    state.isModalActive = action.payload;
  },
  updateMessage(
    state: typeof UiInitialValueType,
    action: PayloadAction<string>
  ) {
    state.message = action.payload;
  },
  clearMessage(state: typeof UiInitialValueType) {
    state.message = "";
  },
};
