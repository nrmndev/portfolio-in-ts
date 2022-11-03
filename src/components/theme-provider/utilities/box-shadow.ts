import { useTheme } from "styled-components";

export enum UTIL_BOX_SHADOW {
  PRIMARY = "primary",
  INSET = "inset",
}

export const handleBoxShadow = (boxShadow: UTIL_BOX_SHADOW) => {
  const theme = useTheme();
  switch (boxShadow) {
    case UTIL_BOX_SHADOW.PRIMARY:
    default:
      return `box-shadow: ${theme.boxShadow};`;
    case UTIL_BOX_SHADOW.INSET:
      return `box-shadow: ${theme.boxShadowInset};`;
  }
};
