import { useState, useCallback, useEffect } from "react";
import { InputHTMLAttributes } from "react";
//import { FormGroup, FormLabel } from "react-bootstrap";
import {
  FormInput,
  FormGroup,
  FormLabel,
  INPUT_TYPE,
} from "./input.components";
import { isEmail, isNotEmpty } from "./validation-helper";
import { validate } from "./validators";

type UseInputProps = {
  type?: string;
  label: string;
  as?: INPUT_TYPE;
  id: string;
  block?: boolean;
  errorLabel: string;
  validator: any;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const useInput = ({
  type = "text",
  label = "Label for",
  errorLabel = "Error Label",
  id,
  as = INPUT_TYPE.INPUT,
  validator,
}: UseInputProps) => {
  const [state, setState] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  //const validatorCallback = useCallback(() => {},[]);

  useEffect(() => {
    alert(isValid);
  }, [isValid]);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
    setIsValid(validate(state, validator));
  };

  const onReset = () => {
    setState("");
  };

  let InputComponent;
  const Component = (
    <FormGroup>
      <FormLabel htmlFor={id}>
        {label} {!isValid && <small>({errorLabel})</small>}
      </FormLabel>

      <FormInput
        id={id}
        type={type}
        value={state}
        onChange={onChangeHandler}
        as={as}
      />
    </FormGroup>
  );

  return { state, isValid, Component, onReset };
};

export default useInput;
