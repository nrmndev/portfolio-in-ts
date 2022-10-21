import { InputHTMLAttributes } from "react";
import {
  StyledFormInput,
  StyledFormLabel,
  StyledFormGroup,
  StyledFormText,
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

//Input Type
type FormInputProps = {
  block?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput = ({ block = false, ...rest }: FormInputProps) => {
  return <StyledFormInput {...rest} block={block} />;
};

//Text for instructions
export const FormText = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLElement>) => {
  return <StyledFormText {...rest}>{children}</StyledFormText>;
};
