import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataType, DataInitialValueType } from "./data-types";

export const dataSlice = createSlice({
  name: "data",
  initialState: DataInitialValueType,
  reducers: {
    addData(state, action: PayloadAction<DataType>) {
      state = action.payload;
    },
    // addDummy(state, action) {
    //   state.data = action.payload;
    // },
  },
});

export const dataActions = dataSlice.actions;
