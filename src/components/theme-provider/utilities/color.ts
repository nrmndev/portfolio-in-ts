import { useTheme } from "styled-components";

export enum UTIL_TEXT_COLOR {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  BASE = "base",
  BACKGROUNDCLIP = "background-clip",
  WHITE = "white",
  BLACK = "black",
  PRIMARYANDWHITE = "primary-white",
}

export const handleTextColor = (textColor: UTIL_TEXT_COLOR | string) => {
  const theme = useTheme();
  //const UTIL_KEYS = Object.keys(UTIL_TEXT_COLOR);
  // const UTIL_VALUES = Object.values(UTIL_TEXT_COLOR);
  // UTIL_VALUES.map
  // const col = UTIL_TEXT_COLOR.PRIMARY;
  //const col = "red";
  // if (typeof textColor === "string") {
  //   return `color: ${textColor};`;
  // } else {
  switch (textColor) {
    case UTIL_TEXT_COLOR.PRIMARY:
      return `color: ${theme.colorPrimary};`;
    case UTIL_TEXT_COLOR.SECONDARY:
      return `color: ${theme.colorSecondary};`;
    case UTIL_TEXT_COLOR.BASE:
      return `color: ${theme.colorWithContrast};`;
    case UTIL_TEXT_COLOR.PRIMARYANDWHITE:
      return `color: ${theme.colorPrimaryAndWhite};`;
    case UTIL_TEXT_COLOR.BACKGROUNDCLIP:
      return `background: ${theme.colorAsGradientClip};
              background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            `;
    case UTIL_TEXT_COLOR.WHITE:
      return `color: #FFF;`;
    case UTIL_TEXT_COLOR.BLACK:
      return `color: #000;`;
    default:
      return `color: ${theme.colorWithContrast};`;
  }
  //}
};
