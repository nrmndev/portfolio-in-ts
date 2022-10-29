import styled from "styled-components";
import {
  themedHeadingColor,
  themedParagraphColor,
  themedStaticPrimaryColor,
} from "../theme-provider/theme-provider.styles";
import { TEXT_SIZE } from "./text.component";

type StyledLabeledProps = {
  readonly color: string;
  readonly textAlign: string;
  readonly sizeAs: string;
  readonly textTransform: string;
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

const handleFontSize = (sizeAs: string) => {
  switch (sizeAs) {
    case TEXT_SIZE.H1:
      return `4.25rem;`;
    case TEXT_SIZE.H2:
      return `2.5rem;`;
    case TEXT_SIZE.H3:
      return `2rem;`;
    case TEXT_SIZE.H4:
      return `1.5rem;`;
    case TEXT_SIZE.H5:
      return `1.35rem;`;
    case TEXT_SIZE.H6:
      return `1rem;`;
    case TEXT_SIZE.P:
      return `1rem;`;
  }
};

export const StyledTextBase = styled.p<StyledLabeledProps>`
  font-size: 1rem;
  color: ${({ color }) => (color ? color : themedParagraphColor)};
  // ${({ textAlign }) => handleTextAlign(textAlign)};
  ${({ textTransform }) =>
    textTransform && `text-transform: ${textTransform};`};
  span.text-label {
    display: block;
    font-size: 0.85rem;
  }
  span {
    color: ${themedStaticPrimaryColor};
  }
`;

export const StyledThemedHeading = styled(StyledTextBase)`
  color: ${({ color }) => (color ? color : themedHeadingColor)};
`;
export const StyledTextAsH1 = styled(StyledThemedHeading)`
  font-size: ${({ sizeAs }) => (sizeAs ? handleFontSize(sizeAs) : `4.25rem`)};
`;
export const StyledTextAsH2 = styled(StyledThemedHeading)`
  font-size: ${({ sizeAs }) => (sizeAs ? handleFontSize(sizeAs) : `2.5rem`)};
`;
export const StyledTextAsH3 = styled(StyledThemedHeading)`
  font-size: ${({ sizeAs }) => (sizeAs ? handleFontSize(sizeAs) : `2rem`)};
`;
export const StyledTextAsH4 = styled(StyledThemedHeading)`
  font-size: ${({ sizeAs }) => (sizeAs ? handleFontSize(sizeAs) : `1.5rem`)}; ;
`;
export const StyledTextAsH5 = styled(StyledThemedHeading)`
  font-size: ${({ sizeAs }) => (sizeAs ? handleFontSize(sizeAs) : `1.35rem`)};
`;
export const StyledTextAsH6 = styled(StyledThemedHeading)`
  font-size: ${({ sizeAs }) => (sizeAs ? handleFontSize(sizeAs) : `1rem`)};
`;
export const StyledTextAsP = styled(StyledTextBase)`
  font-size: ${({ sizeAs }) => (sizeAs ? handleFontSize(sizeAs) : `1rem`)};
`;
