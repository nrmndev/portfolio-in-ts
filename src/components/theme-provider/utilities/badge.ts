import { useTheme } from "styled-components";

export enum UTIL_BADGE_VARIANT {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  GRADIENT = "gradient",
}

export const handleBadgeVariant = (variant: UTIL_BADGE_VARIANT) => {
  const theme = useTheme();
  switch (variant) {
    case UTIL_BADGE_VARIANT.PRIMARY:
    default:
      return `background: ${theme.colorPrimary};`;
    case UTIL_BADGE_VARIANT.GRADIENT:
      return `background: ${theme.backgroundColorGradient};`;
    case UTIL_BADGE_VARIANT.SUCCESS:
      return `background: green;`;
    case UTIL_BADGE_VARIANT.WARNING:
      return `background: yellow;`;
  }
};
