import styled from "styled-components";

type StyledLabeledProps = {
  readonly color: string;
  readonly textAlign: string;
};

const handleColor = (color: string) => {
  return `color: ${color}`;
};

const handleTextAlign = (textAlign: string) => {
  return `text-align: ${textAlign}`;
};

export const StyledTextBase = styled.p<StyledLabeledProps>`
  font-size: 1rem;
  ${({ color }) => handleColor(color)};
  ${({ textAlign }) => handleTextAlign(textAlign)};
  span {
    display: block;
    font-size: 0.85rem;
  }
`;
export const StyledTextAsH1 = styled(StyledTextBase)`
  font-size: 2.25rem;
`;
export const StyledTextAsH2 = styled(StyledTextBase)`
  font-size: 1.75rem;
`;
export const StyledTextAsH3 = styled(StyledTextBase)`
  font-size: 1.5rem;
`;
export const StyledTextAsH4 = styled(StyledTextBase)`
  font-size: 1.25rem;
`;
export const StyledTextAsH5 = styled(StyledTextBase)`
  font-size: 1.15rem;
`;
export const StyledTextAsH6 = styled(StyledTextBase)`
  font-size: 1rem;
`;
export const StyledTextAsP = styled(StyledTextBase)`
  font-size: 1rem;
`;
