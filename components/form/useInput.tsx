import { useState } from "react";
import { FormGroup, FormLabel } from "react-bootstrap";
import { FormInput } from "./input.components";
import { isNotEmpty, isEmail } from "./validation-helper";

type UseInputProps = {
  type: string;
  label: string;
  id: string;
  block?: boolean;
  errorLabel: string;
};

const useInput = ({
  type = "text",
  label = "Label for",
  errorLabel = "Error Label",
  id,
  block = false,
}: UseInputProps) => {
  const [state, setState] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
    setIsValid(isEmail(state));
  };

  const onReset = () => {
    setState("");
  };
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
        block={block}
      />
    </FormGroup>
  );

  return { state, isValid, Component, onReset };
};

export default useInput;
