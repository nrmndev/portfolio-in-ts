import { useReducer } from "react";
import { InputHTMLAttributes } from "react";
import { INPUT_TYPE } from "../theme-provider/utilities";
import {
  FormInput,
  FormGroup,
  FormLabel,
  FormErrorLabel,
} from "./input.components";
import { validate, VALIDATOR_TYPE } from "./validators";

type UseInputProps = {
  type?: string;
  label: string;
  as?: INPUT_TYPE;
  id: string;
  block?: boolean;
  errorLabel: string;
  validators: (
    | { type: VALIDATOR_TYPE }
    | { type: VALIDATOR_TYPE; val: number }
  )[];
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

// validators: (
//   | () => { type: VALIDATOR_TYPE }
//   | { type: VALIDATOR_TYPE; val: number }
// )[];
//array of function    ()[]
//arrow function (()=>{})
//function with parameter ((val: number) => { type: VALIDATOR_TYPE; val: number })
//typescript infered to as { type: VALIDATOR_TYPE; val: number; }

type ChangeAction = {
  type: "CHANGE";
  val: string;
  validators: any;
};

type TouchAction = {
  type: "TOUCH";
};
type ResetAction = {
  type: "RESET";
};

type Action = ChangeAction | TouchAction | ResetAction;

const inputReducer = (state: initialValueType, action: Action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    case "RESET": {
      return {
        value: "",
        isTouched: false,
        isValid: false,
      };
    }
    default:
      return state;
  }
};

type initialValueType = {
  value: string;
  isTouched: boolean;
  isValid: boolean;
};
const initialValue = {
  value: "",
  isTouched: false,
  isValid: false,
};

const useInput = ({
  type = "text",
  label = "Label for",
  errorLabel = "Error Label",
  id,
  as = INPUT_TYPE.INPUT,
  validators,
  ...rest
}: UseInputProps) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialValue);

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const resetHandler = () => {
    dispatch({
      type: "RESET",
    });
  };

  const Component = (
    <FormGroup>
      <FormLabel htmlFor={id}>
        {label}
        {!inputState.isValid && inputState.isTouched && (
          <FormErrorLabel>{errorLabel}</FormErrorLabel>
        )}
      </FormLabel>

      <FormInput
        id={id}
        type={type}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
        as={as}
        {...rest}
      />
    </FormGroup>
  );

  return {
    value: inputState.value,
    isValid: inputState.isValid,
    Component,
    onReset: resetHandler,
  };
};

export default useInput;
