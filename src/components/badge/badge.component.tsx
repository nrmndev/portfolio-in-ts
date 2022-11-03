import { BADGE_VARIANT } from "../theme-provider/utilities";
import { StyledBadge } from "./badge.styles";

type BadgeType = {
  children: React.ReactNode;
  variant?: BADGE_VARIANT;
};
const Badge = ({ children, variant = BADGE_VARIANT.PRIMARY }: BadgeType) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};

export default Badge;
