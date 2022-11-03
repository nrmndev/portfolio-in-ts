import { useTheme } from "styled-components";

export enum UTIL_BACKGROUND_COLOR {
  PRIMARY = "primary",
  SECONDARY = "inset",
  GRADIENT = "gradient",
  NONE = "none",
}

export const handleBackgroundColor = (bg: UTIL_BACKGROUND_COLOR) => {
  const theme = useTheme();
  switch (bg) {
    case UTIL_BACKGROUND_COLOR.PRIMARY:
    default:
      return `background: ${theme.backgroundColor};`;
    case UTIL_BACKGROUND_COLOR.SECONDARY:
      return `background: ${theme.boxShadowInset};`;
    case UTIL_BACKGROUND_COLOR.GRADIENT:
      return `background: ${theme.backgroundColorGradient};`;
    case UTIL_BACKGROUND_COLOR.NONE:
      return;
  }
};
