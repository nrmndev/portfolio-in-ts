import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./data/data-slice";
import { uiSlice } from "./ui/ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
