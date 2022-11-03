import styled from "styled-components";
import { BADGE_VARIANT, handleBadgeVariant } from "../theme-provider/utilities";

type BadgeProps = {
  readonly variant: BADGE_VARIANT;
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
  ${handleBadgeVariant(variant)}
  color: ${theme.colorWithContrast};
`
);
