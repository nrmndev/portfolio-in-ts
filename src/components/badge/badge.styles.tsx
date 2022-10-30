import styled from "styled-components";
import {
  themedGradientBackgroundColor,
  themedHeadingColor,
  themedStaticPrimaryColor,
} from "../theme-provider/theme-provider.styles";
import { BADGE_VARIANT } from "./badge.component";

type BadgeProps = {
  readonly variant: BADGE_VARIANT;
};

const handleVariant = (variant: BADGE_VARIANT) => {
  switch (variant) {
    case BADGE_VARIANT.PRIMARY:
    default:
      return themedStaticPrimaryColor;
    case BADGE_VARIANT.GRADIENT:
      return themedGradientBackgroundColor;
  }
};
export const StyledBadge = styled.span<BadgeProps>`
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.375rem;
  flex: 0;
  background: ${({ variant }) => handleVariant(variant)};
  color: ${themedHeadingColor};
`;
