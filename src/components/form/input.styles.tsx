import styled from "styled-components";

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

export const StyledFormInput = styled.input<FormInputType>(
  ({ theme, minHeight }) => `
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
    border-color: ${theme.colorPrimary};
  }
  transition: border 0.4s ease-in-out;
  color: ${theme.colorWithContrast};
  background: ${theme.backgroundColorFlat};
  border-color: ${theme.colorContrast};
  box-shadow: ${theme.boxShadowInset};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background: ${theme.backgroundColorFlat} !important;
  }
   ${minHeight && `min-height:${minHeight};`}
`
);

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
