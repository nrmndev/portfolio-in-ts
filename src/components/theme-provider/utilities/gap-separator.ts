import { useTheme } from "styled-components";

export enum UTIL_GAP_SEPARATOR_VARIANT {
  RAW = "raw",
  LINE = "line",
}

export const handleGapSeparatorVariant = (
  variant: UTIL_GAP_SEPARATOR_VARIANT
) => {
  const theme = useTheme();
  switch (variant) {
    case UTIL_GAP_SEPARATOR_VARIANT.RAW:
    default:
      return;
    case UTIL_GAP_SEPARATOR_VARIANT.LINE:
      return `background: ${theme.borderColor};`;
  }
};
