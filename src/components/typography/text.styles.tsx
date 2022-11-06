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
import { handleFontSizeAs } from "../theme-provider/utilities/typography";

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

  font-weight: normal;
  span.text-label {
    display: block;
    font-size: 0.85rem;
  }  strong {
    font-weight: normal;
    background: rgb(255 229 99 / 50%);
    ${handleTextColor(TEXT_COLOR.PRIMARYANDWHITE)}
    padding: 1px;
  }
  span {
    ${handleTextColor(TEXT_COLOR.PRIMARY)}
  }
`
);

export const StyledH1 = styled(StyledText)<StyledLabeledProps>(
  ({ fontSizeAs }) => `
  ${fontSizeAs ? handleFontSizeAs(fontSizeAs) : FONT_SIZE_AS.H1}
`
);
export const StyledH2 = styled(StyledText)<StyledLabeledProps>(
  ({ fontSizeAs }) => `
  ${fontSizeAs ? handleFontSizeAs(fontSizeAs) : FONT_SIZE_AS.H2}
`
);
export const StyledH3 = styled(StyledText)<StyledLabeledProps>(
  ({ fontSizeAs }) => `
${fontSizeAs ? handleFontSizeAs(fontSizeAs) : FONT_SIZE_AS.H3}
`
);
export const StyledH4 = styled(StyledText)<StyledLabeledProps>(
  ({ fontSizeAs }) => `
${fontSizeAs ? handleFontSizeAs(fontSizeAs) : FONT_SIZE_AS.H4}
`
);
export const StyledH5 = styled(StyledText)<StyledLabeledProps>(
  ({ fontSizeAs }) => `
${fontSizeAs ? handleFontSizeAs(fontSizeAs) : FONT_SIZE_AS.H5}
`
);
export const StyledH6 = styled(StyledText)<StyledLabeledProps>(
  ({ fontSizeAs }) => `
${fontSizeAs ? handleFontSizeAs(fontSizeAs) : FONT_SIZE_AS.H6}
`
);
export const StyledP = styled(StyledText)<StyledLabeledProps>(
  ({ fontSizeAs }) => `
${fontSizeAs ? handleFontSizeAs(fontSizeAs) : FONT_SIZE_AS.P}
line-height: 1.4rem;
`
);
