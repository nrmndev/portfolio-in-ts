import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataReducers } from "./data-reducers";
import { DataInitialValueType } from "./data-types";
import axios from "axios";

export const fetchALLData = createAsyncThunk("Fetch all data", async () => {
  const response = await axios.get("./dummy.json");
  return response.data;
});

export const dataSlice = createSlice({
  name: "data",
  initialState: DataInitialValueType,
  reducers: dataReducers,
  extraReducers: (builder) => {
    builder.addCase(fetchALLData.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    // .addCase(fetchALLData.pending, (state, action) => {
    // });
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
