import styled from "styled-components";
import {
  themedBackgroundColor,
  themedGradientBackgroundColor,
} from "../theme-provider/theme-provider.styles";

interface IStyledSection {
  readonly bg: string | undefined;
  readonly img: string;
  readonly fluid: boolean;
  readonly flex: boolean;
  readonly childFlexBasis: string;
  readonly gap: string;
}

const handleBG = (bg: string | undefined, img: string) => {
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
      return themedBackgroundColor;
    }
  }
};

const handleFlexBasis = (str: string) => {
  return `flex-grow: 0; flex-shrink: 1; flex-basis: ${str}`;
};

export const StyledSection = styled.section<IStyledSection>`
  background: ${({ bg, img }) => handleBG(bg, img)};
  ${({ fluid }) =>
    fluid
      ? ` padding-top: 5rem;
    padding-bottom: 5rem;`
      : `max-width: 1320px; margin-right: auto;
    margin-left: auto;  
    padding-right: 15px;
    padding-left: 15px;`};
  position: relative;
  ${({ flex, childFlexBasis, gap }) =>
    flex &&
    `display: flex;  flex-wrap: wrap;
    flex-direction: column;
    gap: ${gap};

    & > * {
       ${handleFlexBasis(childFlexBasis)};    margin-top: calc(${gap}/2);
       margin-bottom: calc(${gap}/2);
    };`}

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;
