import { StyledBadge } from "./badge.styles";

export enum BADGE_VARIANT {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  GRADIENT = "gradient",
}

type BadgeType = {
  children: React.ReactNode;
  variant?: BADGE_VARIANT;
};
const Badge = ({ children, variant = BADGE_VARIANT.PRIMARY }: BadgeType) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};

export default Badge;
