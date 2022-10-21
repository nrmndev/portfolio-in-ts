import React, { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
  isFocused: false,
  //passwordCriteria: {},
};

type Action = ActionBlur | ActionFocus | ActionOnChange;
enum ActionType {
  ON_CHANGE = "onChange",
  ON_BLUR = "onBlur",
  ON_FOCUS = "onFocus",
}

interface ActionBlur {
  type: ActionType.ON_BLUR;
  payload?: any;
}
interface ActionFocus {
  type: ActionType.ON_FOCUS;
  payload?: any;
}
interface ActionOnChange {
  type: ActionType.ON_CHANGE;
  payload?: any;
}

interface InputValidateState {
  isTouched: boolean;
  isFocused: boolean;
  value: any;
}
const inputStateReducer = (state: InputValidateState, action: Action) => {
  switch (action.type) {
    case ActionType.ON_CHANGE:
      return {
        value: action.payload.value,
        isTouched: state.isTouched,
        isFocused: true,
      };
    case ActionType.ON_BLUR:
      return {
        value: state.value,
        isTouched: true,
        isFocused: false,
      };
    case ActionType.ON_FOCUS:
      return {
        value: state.value,
        isTouched: state.isTouched,
        isFocused: true,
      };
    default:
      return {};
  }
  //return inputStateReducer;
};

const useInput = (validateValue: any) => {
  //   const [{data, isTouched,isFocused}, dispatch] = useReducer<InputValidateState,any>(
  //     inputStateReducer,
  //     initialInputState
  //   );
  //   let valueIsValid = inputState;
  //   const inputTouchStartHandler = (e:any) => {
  //     dispatch({ type: "FOCUS" });
  //   };
  //   let valueIsValid = validateValue(inputState.value);
  //   let hasError;
  //   if (typeof valueIsValid === "object") {
  //     if (valueIsValid.isValid.value == null) {
  //       valueIsValid.isValid.value = false;
  //     }
  //     hasError = !valueIsValid.isValid.value && inputState.isTouched; // true -> false && false
  //   } else {
  //     hasError = !valueIsValid && inputState.isTouched;
  //   }
  //   const valueChangeHandler = (event) => {
  //     dispatch({ type: "INPUT", value: event.target.value });
  //   };
  //   const inputBlurHandler = (event) => {
  //     dispatch({ type: "BLUR" });
  //   };
  //   const inputTouchStartHandler = (event) => {
  //     dispatch({ type: "FOCUS" });
  //   };
  //   const reset = () => {
  //     dispatch({ type: "RESET" });
  //   };
  //   const resetField = () => {
  //     dispatch({ value: "" });
  //   };
  //   return {
  //     value: inputState.value,
  //     isValid: valueIsValid,
  //     isFocused: inputState.isFocused,
  //     hasError,
  //     valueChangeHandler,
  //     inputBlurHandler,
  //     inputTouchStartHandler,
  //     reset,
  //   };
};

export default useInput;
