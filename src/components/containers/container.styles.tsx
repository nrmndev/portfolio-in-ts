import styled from "styled-components";

import {
  handlePadding,
  handleHPadding,
  handleVPadding,
  PADDING,
  handleFlex,
  handleFluid,
  handleFixed,
  handleJustifyContent,
  JUSTIFY_CONTENT,
  handleAlignItems,
  handleBackground,
  handleColumn,
  ALIGN_ITEMS,
} from "../theme-provider/utilities";

interface IStyledSection {
  readonly bg: string | undefined;
  readonly img: string | undefined;
  readonly fluid: boolean;
  readonly flex: boolean;
  readonly childFlexBasis: string;
  readonly gap: string;
  readonly justifyContent: JUSTIFY_CONTENT | undefined;
  readonly alignItems: ALIGN_ITEMS;
  readonly fixed: boolean;
  readonly hPadding: PADDING;
  readonly vPadding: PADDING;
  readonly padding: PADDING;
  readonly xs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  readonly sm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  readonly md: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  readonly lg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const StyledSection = styled.section<IStyledSection>(
  ({
    bg,
    img,
    justifyContent,
    padding,
    hPadding,
    vPadding,
    fluid,
    gap,
    fixed,
    flex,
    xs,
    sm,
    md,
    lg,
    alignItems,
  }) => `
  position: relative;
  ${handleBackground(bg, img)}
  ${handleFlex(flex)}
  ${handleFluid(fluid)}
  ${handleFixed(fixed)}
  ${handleJustifyContent(justifyContent)}
  ${gap && `gap: ${gap};`}

  ${
    flex
      ? `& > * {
        ${handleColumn(xs, sm, md, lg, gap)}   
        margin-top: ${gap};
        margin-bottom: ${gap};    
      }`
      : `margin-left: auto; margin-right: auto;`
  }
 
  ${handlePadding(padding)}
  ${handleHPadding(hPadding)}
  ${handleVPadding(vPadding)}
  ${handleAlignItems(alignItems)}
  @media(min-width: 768px) {
    flex-direction: row;
  }

`
);

export const StyledFixedContainerOverlay = styled.div`
  min-height: 100vh;
  z-index: -1;
  position: relative;
`;
