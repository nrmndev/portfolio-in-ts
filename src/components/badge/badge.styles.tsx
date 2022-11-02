import styled, { DefaultTheme } from "styled-components";
import { BADGE_VARIANT } from "./badge.component";

type BadgeProps = {
  readonly variant: BADGE_VARIANT;
};

const handleVariant = (variant: BADGE_VARIANT, theme: DefaultTheme) => {
  switch (variant) {
    case BADGE_VARIANT.PRIMARY:
    default:
      return theme.colorPrimary;
    case BADGE_VARIANT.GRADIENT:
      return theme.backgroundColorGradient;
  }
};
export const StyledBadge = styled.span<BadgeProps>(
  ({ theme, variant }) => `
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.375rem;
  flex: 0;
  background: ${variant && handleVariant(variant, theme)};
  color: ${theme.colorWithContrast};
`
);
