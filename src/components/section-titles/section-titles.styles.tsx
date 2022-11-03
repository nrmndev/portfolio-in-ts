import styled, { DefaultTheme } from "styled-components";

import { TITLE_VARIANT } from "./section-titles.components";

interface StyledSectionTitleProps {
  readonly textAlign: string;
  readonly titleVariant: TITLE_VARIANT;
  readonly subTitleVariant: TITLE_VARIANT;
}

const handleVariant = (variant: string, theme: DefaultTheme) => {
  switch (variant) {
    case TITLE_VARIANT.PRIMARY:
      return theme.colorWithContrast;

    case TITLE_VARIANT.WHITE:
      return `#FFFFFF;`;
  }
};
const StyledSectionTitle = styled.div<StyledSectionTitleProps>(
  ({ theme, textAlign, titleVariant, subTitleVariant }) => `
  padding-top: 2rem;
  padding-bottom: 2rem;
   ${textAlign && `text-align:${textAlign};`}

   h3,h4 {
    color: ${handleVariant(titleVariant, theme)};

   }
  h3 {
    font-size: 4rem;
    font-family: "MontserratBold", sans-serif;
    ${
      titleVariant === TITLE_VARIANT.BACKGROUNDCLIP &&
      `background: ${theme.colorAsGradientClip};
      background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `
    }
  }
  h4 {
    text-transform: uppercase;
    ${
      subTitleVariant === TITLE_VARIANT.BACKGROUNDCLIP &&
      `background: ${theme.colorAsGradientClip};
      background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `
    }
  }
`
);
export default StyledSectionTitle;

// case TITLE_VARIANT.BACKGROUNDCLIP:
//   return `background-clip: text;
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
// `;
