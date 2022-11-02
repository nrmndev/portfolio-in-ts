import styled, { DefaultTheme } from "styled-components";

import { TITLE_VARIANTS } from "./section-titles.components";

interface StyledSectionTitleProps {
  readonly textAlign: string;
  readonly titleVariant: TITLE_VARIANTS;
  readonly subTitleVariant: TITLE_VARIANTS;
}

const handleVariant = (variant: string, theme: DefaultTheme) => {
  switch (variant) {
    case TITLE_VARIANTS.PRIMARY:
      return theme.colorWithContrast;

    case TITLE_VARIANTS.WHITE:
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
      titleVariant === TITLE_VARIANTS.BACKGROUNDCLIP &&
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
      subTitleVariant === TITLE_VARIANTS.BACKGROUNDCLIP &&
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

// case TITLE_VARIANTS.BACKGROUNDCLIP:
//   return `background-clip: text;
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
// `;
