import styled from "styled-components";
import {
  themedFormBackground,
  themedFormBorder,
  themedFormBoxShadow,
  themedParagraphColor,
  themedStaticPrimaryColor,
} from "../theme-provider/theme-provider.styles";
type FormInputType = {
  readonly block: boolean;
  readonly minHeight: string;
};

export const StyledFormGroup = styled.div`
  margin-top: 0.8rem;
`;

export const StyledFormLabel = styled.label`
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: #a0a8b3;
  letter-spacing: 0.125rem;
`;

export const StyledFormInput = styled.input<FormInputType>`
  padding: 1.1rem;
  display: block;
  width: 100%;
  outline: none;
  border-width: 2px;
  border-style: solid;
  border-radius: 6px;
  font-size: 1.1rem;
  &:focus,
  &:focus-visible,
  &:hover {
    border-color: ${themedStaticPrimaryColor};
  }
  transition: border 0.4s ease-in-out;
  color: ${themedParagraphColor};
  background: ${themedFormBackground};
  border-color: ${themedFormBorder};
  box-shadow: ${themedFormBoxShadow};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background: ${themedFormBackground} !important;
  }
  min-height: ${({ minHeight }) => minHeight && minHeight};
`;

export const StyledFormTextarea = styled(StyledFormInput)`
  min-height: 216px;
`;

export const StyledFormText = styled.small`
  font-size: 0.75rem;
`;

export const StyledErrorLabel = styled.span`
  font-size: 0.75rem;
  color: red;
  margin-left: 10px;
  font-style: italic;
`;
