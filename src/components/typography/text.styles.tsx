import styled, { DefaultTheme } from "styled-components";
import { handleFontSize } from "../theme-provider/theme-utilities";
import { TEXT_COLOR } from "./text.component";

type StyledLabeledProps = {
  readonly textColor: TEXT_COLOR;
  readonly textAlign: string;
  readonly fontSizeAs: string;
  readonly textTransform: string;
};

const handleTextAlign = (textAlign: string) => {
  return `text-align: ${textAlign}`;
};

const handleColor = (textColor: TEXT_COLOR, theme: DefaultTheme) => {
  switch (textColor) {
    case TEXT_COLOR.PRIMARY:
      return `color: ${theme.color}`;

    case TEXT_COLOR.BACKGROUNDCLIP:
      return `background: ${theme.colorAsGradientClip};
        background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `;
    default:
      return `color: ${theme.colorWithContrast}`;
  }
};

export const StyledTextBase = styled.p<StyledLabeledProps>(
  ({ theme, textAlign, textTransform, textColor }) => `
  ${handleColor(textColor, theme)};
  ${handleTextAlign(textAlign)};
  text-transform: ${textTransform};
  span.text-label {
    display: block;
    font-size: 0.85rem;
  }
  span {
    color: ${theme.colorPrimary};
  }
`
);

export const StyledTextAsH1 = styled(StyledTextBase)`
  font-size: ${({ fontSizeAs }) =>
    fontSizeAs ? handleFontSize(fontSizeAs) : `4.25rem`};
`;
export const StyledTextAsH2 = styled(StyledTextBase)`
  font-size: ${({ fontSizeAs }) =>
    fontSizeAs ? handleFontSize(fontSizeAs) : `2.5rem`};
`;
export const StyledTextAsH3 = styled(StyledTextBase)`
  font-size: ${({ fontSizeAs }) =>
    fontSizeAs ? handleFontSize(fontSizeAs) : `2rem`};
`;
export const StyledTextAsH4 = styled(StyledTextBase)`
  font-size: ${({ fontSizeAs }) =>
    fontSizeAs ? handleFontSize(fontSizeAs) : `1.5rem`}; ;
`;
export const StyledTextAsH5 = styled(StyledTextBase)`
  font-size: ${({ fontSizeAs }) =>
    fontSizeAs ? handleFontSize(fontSizeAs) : `1.35rem`};
`;
export const StyledTextAsH6 = styled(StyledTextBase)`
  font-size: ${({ fontSizeAs }) =>
    fontSizeAs ? handleFontSize(fontSizeAs) : `1rem`};
`;
export const StyledTextAsP = styled(StyledTextBase)`
  font-size: ${({ fontSizeAs }) =>
    fontSizeAs ? handleFontSize(fontSizeAs) : `1rem`};
`;
