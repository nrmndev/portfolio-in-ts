import styled, { DefaultTheme } from "styled-components";

import {
  handlePadding,
  H_PADDING,
  V_PADDING,
  PADDING,
} from "../theme-provider/utilities";

interface IStyledSection {
  readonly bg: string | undefined;
  readonly img: string;
  readonly fluid: boolean;
  readonly flex: boolean;
  readonly childFlexBasis: string;
  readonly gap: string;
  readonly justifyContent: string;
  readonly fixed: boolean;
  readonly hPadding: H_PADDING;
  readonly vPadding: V_PADDING;
  readonly padding: PADDING;
}

const handleBG = (bg: string | undefined, img: string, theme: DefaultTheme) => {
  if (img.length > 0) {
    return `${bg && bg},url('${img}');     
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;`;
  } else {
    if (bg) {
      return `${bg}`;
    } else {
      return theme.backgroundColor;
    }
  }
};

const handleFlexBasis = (str: string) => {
  return `flex-grow: 0; flex-shrink: 1; flex-basis: ${str}`;
};

const handleFluid = (fluid: boolean) => {
  if (fluid) {
    return;
  } else {
    return `max-width: 1320px; margin-right: auto;
    margin-left: auto;`;
  }
};

const handleFixed = (fixed: boolean) => {
  if (fixed) {
    return `top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100vh;`;
  } else {
    return;
  }
};

export const StyledSection = styled.section<IStyledSection>(
  ({
    theme,
    bg,
    img,
    justifyContent,
    padding,
    hPadding,
    vPadding,
    fluid,
    childFlexBasis,
    gap,
    fixed,
    flex,
  }) => `
  background: ${handleBG(bg, img, theme)};
  justify-content: ${justifyContent && justifyContent};
  position: relative;
  ${handlePadding(padding, hPadding, vPadding)};
  ${handleFluid(fluid)};

  ${
    flex &&
    `display: flex;  flex-wrap: wrap;
    flex-direction: column;
    gap: ${gap};

    & > * {
       ${childFlexBasis && handleFlexBasis(childFlexBasis)};    
       margin-top: calc(${gap}/2);
       margin-bottom: calc(${gap}/2);
    };`
  }

  @media(min-width: 768px) {
    flex-direction: row;
  }

  ${fixed && handleFixed(fixed)}
`
);

export const StyledFixedContainerOverlay = styled.div`
  min-height: 100vh;
  z-index: -1;
  position: relative;
`;
