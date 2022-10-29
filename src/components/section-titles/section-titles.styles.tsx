import styled from "styled-components";
import {
  themedBackgroundClip,
  themedGradientBackgroundColor,
  themedHeadingColor,
  themedParagraphColor,
} from "../theme-provider/theme-provider.styles";
import { TITLE_VARIANTS } from "./section-titles.components";

interface StyledSectionTitleProps {
  readonly textAlign: string;
  readonly titleVariant: TITLE_VARIANTS;
  readonly subTitleVariant: TITLE_VARIANTS;
}

const handleVariant = (variant: string) => {
  switch (variant) {
    case TITLE_VARIANTS.PRIMARY:
      return themedParagraphColor;

    case TITLE_VARIANTS.WHITE:
      return `#FFFFFF;`;
  }
};
const StyledSectionTitle = styled.div<StyledSectionTitleProps>`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: ${({ textAlign }) => textAlign};

  h3 {
    font-size: 4rem;
    font-family: "MontserratBold", sans-serif;
    color: ${({ titleVariant }) => handleVariant(titleVariant)};
    ${({ titleVariant }) =>
      titleVariant === TITLE_VARIANTS.BACKGROUNDCLIP &&
      `background: ${themedBackgroundClip};
      background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `}
  }
  h4 {
    text-transform: uppercase;
    color: ${({ subTitleVariant }) => handleVariant(subTitleVariant)};
    ${({ subTitleVariant }) =>
      subTitleVariant === TITLE_VARIANTS.BACKGROUNDCLIP &&
      `background: ${themedBackgroundClip};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `}
  }
`;
export default StyledSectionTitle;

// case TITLE_VARIANTS.BACKGROUNDCLIP:
//   return `background-clip: text;
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
// `;
