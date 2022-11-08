import { useTheme } from "styled-components";

export const handleFlex = (flex: boolean) => {
  if (flex) {
    return `display: flex;  
        flex-wrap: wrap;
        flex-direction: column;`;
  } else {
    return ``;
  }
};

export const handleFluid = (fluid: boolean) => {
  if (fluid) {
    return `width: 100%;`;
  } else {
    return `max-width: 1340px;
      margin-left: auto;
      margin-right: auto;
    `;
  }
};

export const handleFixed = (fixed: boolean) => {
  if (fixed) {
    return `top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100vh;`;
  } else {
    return ``;
  }
};

export enum UTIL_JUSTIFY_CONTENT {
  CENTER = "center",
  END = "end",
  FLEXEND = "flex-end",
  FLEXSTART = "flex-start",
  SPACEBETWEEN = "space-between",
  SELFEND = "self-end",
  START = "start"
}

export const handleJustifyContent = (
  justifyContent: UTIL_JUSTIFY_CONTENT | undefined
) => {
  switch (justifyContent) {
    case UTIL_JUSTIFY_CONTENT.CENTER:
      return `justify-content: ${UTIL_JUSTIFY_CONTENT.CENTER};`;
    case UTIL_JUSTIFY_CONTENT.FLEXEND:
      return `justify-content: ${UTIL_JUSTIFY_CONTENT.FLEXEND};`;
    case UTIL_JUSTIFY_CONTENT.FLEXSTART:
      return `justify-content: ${UTIL_JUSTIFY_CONTENT.FLEXSTART};`;
    case UTIL_JUSTIFY_CONTENT.SPACEBETWEEN:
      return `justify-content: ${UTIL_JUSTIFY_CONTENT.SPACEBETWEEN};`;
    default:
      return ``;
  }
};

export const handleFlexBasis = (string: string) => {
  if (string) {
    return `flex-grow: 0; flex-shrink: 1; flex-basis: ${string}`;
  } else return ``;
};

export const handleBackground = (
  bg: string | undefined,
  img: string | undefined
) => {
  const theme = useTheme();
  if (img) {
    return `background: ${bg && bg},url('${img}');     
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;`;
  } else {
    if (bg) {
      return `background: ${bg};`;
    } else {
      return `background: ${theme.backgroundColor};`;
    }
  }
};
