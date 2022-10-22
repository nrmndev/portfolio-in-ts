import { createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "Hello, I'm Normon! How's your day?",
    isActive: true,
    cardBackdrop: false,
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    setNormonAI(state, action) {
      state.isActive = action.payload;
    },
  },
});

export const messageActions = messageSlice.actions;

// interface RootState {
//   message: string;
//   isActive: boolean;
//   cardBackdrop: boolean;
//   isTheme: Boolean;
// }
// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
