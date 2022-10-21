import { ActionType } from "../action-types";
import { Action } from "../actions";
interface SomeState {
  loading: boolean;
  error: string | null;
  data: {
    //obj
    //[key: string]: Employee;
  };
}

const initialState: SomeState = {
  loading: false,
  error: null,
  data: {},
};

const reducer = (
  state: SomeState = initialState,
  action: Action
): SomeState => {
  switch (action.type) {
    case ActionType.ADD:
      return state;
    case ActionType.DELETE:
      return state;
    case ActionType.UPDATE:
      return state;
    case ActionType.VIEW:
      return state;
    default:
      return state;
  }
};

export default reducer;
