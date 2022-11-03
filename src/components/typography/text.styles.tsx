import styled from "styled-components";
import {
  FONT_SIZE_AS,
  handleFontSize,
  handleTextAlign,
  handleTextColor,
  handleTextTransform,
  TEXT_ALIGN,
  TEXT_COLOR,
  TEXT_TRANSFORM,
} from "../theme-provider/utilities";

type StyledLabeledProps = {
  readonly textColor: TEXT_COLOR;
  readonly textAlign: TEXT_ALIGN;
  readonly fontSizeAs: FONT_SIZE_AS;
  readonly textTransform: TEXT_TRANSFORM;
};

export const StyledText = styled.p<StyledLabeledProps>(
  ({ textAlign, textTransform, textColor, fontSizeAs }) => `
  ${handleTextColor(textColor)}
  ${handleTextAlign(textAlign)}
  ${handleTextTransform(textTransform)}
  ${handleFontSize(fontSizeAs)}

  font-weight: normal;
  span.text-label {
    display: block;
    font-size: 0.85rem;
  }  strong {
    font-weight: normal;
    background: rgb(255 229 99 / 50%);
    ${handleTextColor(TEXT_COLOR.PRIMARYANDWHITE)}
    padding: 2px 3px;
  }
  span {
    ${handleTextColor(TEXT_COLOR.PRIMARY)}
  }
`
);
