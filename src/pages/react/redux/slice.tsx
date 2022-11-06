import React from "react";
import GapSeparator from "../../../components/gap/gap.components";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
import {
  GAP_SEPARATOR_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import Text from "../../../components/typography/text.component";
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

const ReduxSlice = () => {
  return (
    <>
      <Text as={TEXT_AS.H2}>Typed Selectors</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <Text>
        Custom hook useTypedSelector for typescript useSelector convenience
      </Text>
      <RenderCode code={exampleCode} language="tsx" />
      <Text>
        Your component can now listen to the store by using useTypedSelector
      </Text>
      <RenderCode code={exampleCode2} language="tsx" />
    </>
  );
};

export default ReduxSlice;
