import GapSeparator from "../../../components/gap/gap.components";
import RenderCode from "../../../components/prism-renderer/prism-renderer.component";
import {
  GAP_SEPARATOR_VARIANT,
  TEXT_AS,
} from "../../../components/theme-provider/utilities";
import Text from "../../../components/typography/text.component";
const exampleCode = `
export interface trainingType {
  id: string;
  title: string;
  message: string;
  description: string;
}
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    trainings: [{ trainings: {} as trainingType }],
  },
  reducers: {
    addTraining(state, action: PayloadAction<typeof trainingType>) {
      state.trainings = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
`.trim();

const exampleCode2 = `
import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./data-slice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
`.trim();

const exampleCode3 = `
import { useAppDispatch } from "./hooks/typehooks";
import { uiActions } from "../../store/ui-slice";

const Sample = () => {

const dispatch = useAppDispatch();

const onClickHandler = (
  id: number,
  e: React.MouseEvent<HTMLButtonElement>
): void => {
  dispatch(uiActions.addTraining(yourData));
};
}
`.trim();

const ReduxConfigureStore = () => {
  return (
    <>
      <Text as={TEXT_AS.H2}>Configure Store</Text>
      <GapSeparator variant={GAP_SEPARATOR_VARIANT.LINE} />
      <Text>Your Slice component/file</Text>
      <RenderCode code={exampleCode} language="tsx" />
      <Text>Your Store</Text>
      <RenderCode code={exampleCode2} language="tsx" />
      <Text>Your Dispatch Action</Text>
      <RenderCode code={exampleCode3} language="tsx" />
    </>
  );
};

export default ReduxConfigureStore;
