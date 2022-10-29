import { PayloadAction } from "@reduxjs/toolkit";
import { DataType } from "./data-types";
import { skillReducer } from "./reducers/skill-reducer";
export const dataReducers = {
  addData(state: DataType<void>, action: PayloadAction<DataType<void>>) {
    state = action.payload;
    return { ...state };
  },
  ...skillReducer,
};
