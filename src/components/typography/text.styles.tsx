import styled from "styled-components";
import {
  themedHeadingColor,
  themedParagraphColor,
} from "../theme-provider/theme-provider.styles";

type StyledLabeledProps = {
  readonly color: string;
  readonly textAlign: string;
};

// const handleColor = (color: string) => {
//   //let returnColor = "";
//   if (color) {
//     return `color: ${color}`;
//   } else {
//     return `color: ${themedTextColor}`;
//   }
//   //return `color: blue`;
// };

const handleTextAlign = (textAlign: string) => {
  return `text-align: ${textAlign}`;
};

export const StyledTextBase = styled.p<StyledLabeledProps>`
  font-size: 1rem;
  color: ${({ color }) => (color ? color : themedParagraphColor)};
  // ${({ textAlign }) => handleTextAlign(textAlign)};
  span {
    display: block;
    font-size: 0.85rem;
  }
`;

export const StyledThemedHeading = styled(StyledTextBase)`
  color: ${({ color }) => (color ? color : themedHeadingColor)};
`;
export const StyledTextAsH1 = styled(StyledThemedHeading)`
  font-size: 2.25rem;
`;
export const StyledTextAsH2 = styled(StyledThemedHeading)`
  font-size: 1.75rem;
`;
export const StyledTextAsH3 = styled(StyledThemedHeading)`
  font-size: 1.5rem;
`;
export const StyledTextAsH4 = styled(StyledThemedHeading)`
  font-size: 1.25rem;
`;
export const StyledTextAsH5 = styled(StyledThemedHeading)`
  font-size: 1.15rem;
`;
export const StyledTextAsH6 = styled(StyledThemedHeading)`
  font-size: 1rem;
`;
export const StyledTextAsP = styled(StyledTextBase)`
  font-size: 1rem;
`;
