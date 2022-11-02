import { InputHTMLAttributes } from "react";
import {
  StyledFormInput,
  StyledFormLabel,
  StyledFormGroup,
  StyledFormText,
  StyledErrorLabel,
} from "./input.styles";

// Form Wrapper
type FormGroupProps = {
  children: React.ReactNode;
};
export const FormGroup = ({ children }: FormGroupProps) => {
  return <StyledFormGroup>{children}</StyledFormGroup>;
};

// Label
type FormLabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

export const FormLabel = ({ htmlFor, children }: FormLabelProps) => {
  return <StyledFormLabel htmlFor={htmlFor}>{children}</StyledFormLabel>;
};

export const FormErrorLabel = ({ children }: FormGroupProps) => {
  return <StyledErrorLabel>({children})</StyledErrorLabel>;
};

export enum INPUT_TYPE {
  INPUT = "input",
  TEXTAREA = "textarea",
}

//Input Type
type FormInputProps = {
  as?: INPUT_TYPE;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput = ({
  as = INPUT_TYPE.INPUT,
  ...rest
}: FormInputProps) => {
  switch (as) {
    case INPUT_TYPE.INPUT:
    default:
      return <StyledFormInput {...rest} as={as} />;
    case INPUT_TYPE.TEXTAREA:
      return <StyledFormInput {...rest} as={as} minHeight="215px" />;
  }
};

//Text for instructions
export const FormText = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLElement>) => {
  return <StyledFormText {...rest}>{children}</StyledFormText>;
};

// //Input Type
// type FormTextareaProps = {
//   block?: boolean;
// } & InputHTMLAttributes<HTMLTextAreaElement>;

// export const FormTextarea = ({ ...rest }: InputHTMLAttributes<HTMLTextAreaElement>) => {
//   return <StyledFormTextarea {...rest} as="textarea" />;
// };
