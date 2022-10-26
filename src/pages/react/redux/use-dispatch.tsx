import React from "react";
import WithLineNumbers from "../../../utils/code-highlighter";

const exampleCode = `
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { dataSlice } from "./data-slice";
import { uiSlice } from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
`.trim();

const exampleCode2 = `
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Sample = () => {
  const isModalActive = useTypedSelector(uiIsModalActive);
}
`.trim();

const ReduxUseDispatch = () => {
  return (
    <>
      <div>
        Custom hook useTypedSelector for typescript useSelector convenience
      </div>
      <WithLineNumbers code={exampleCode} language="jsx" />
      <div>
        Your component can now listen to the store by using useTypedSelector
      </div>
      <WithLineNumbers code={exampleCode2} language="jsx" />
    </>
  );
};

export default ReduxUseDispatch;
