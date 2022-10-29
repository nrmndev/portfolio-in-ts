import { createSlice } from "@reduxjs/toolkit";
import { UiInitialValueType } from "./ui-types";
import { uiReducers } from "./ui-reducers";

export const uiSlice = createSlice({
  name: "ui",
  initialState: UiInitialValueType,
  reducers: uiReducers,
  // extraReducers: (builder) => {
  //   builder.addCase(setTheme(), (state, action: PayloadAction<string>) => {
  //     console.log("Theme initialized");
  //     state.theme = action.payload;
  //     return state;
  //   });
  // },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
