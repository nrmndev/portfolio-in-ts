import WithLineNumbers from "../../../utils/code-highlighter";

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
      <p>Your Slice component/file</p>
      <WithLineNumbers code={exampleCode} language="jsx" />
      <p>Your Store</p>
      <WithLineNumbers code={exampleCode2} language="jsx" />
      <p>Your Dispatch Action</p>
      <WithLineNumbers code={exampleCode3} language="jsx" />
    </>
  );
};

export default ReduxConfigureStore;
