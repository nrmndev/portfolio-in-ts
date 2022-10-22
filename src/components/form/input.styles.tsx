import styled from "styled-components";
type FormInputType = {
  readonly block: boolean;
};

export const StyledFormGroup = styled.div`
  margin-top: 0.8rem;
`;

export const StyledFormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const StyledFormInput = styled.input<FormInputType>`
  padding: 0.7rem 1.1rem;
  display: ${({ block }) => (block ? `block` : `inline-block`)};
  width: ${({ block }) => (block ? `100%` : `auto`)};
  background: none;
  outline: none;
  border-width: 1px;
  border-radius: 0;
  border-color: #777;
  font-size: 1.1rem;
`;

export const StyledFormText = styled.small`
  font-size: 0.75rem;
`;
