import { StyledGap } from "./gap.styles";

export enum SEPARATOR_VARIANTS {
  BASE = "base",
  LINE = "line",
}

type GapSeparatorProps = {
  size?: "sm" | "md" | "lg";
  variant?: SEPARATOR_VARIANTS;
};
const GapSeparator = ({
  size = "sm",
  variant = SEPARATOR_VARIANTS.BASE,
}: GapSeparatorProps) => {
  return (
    <StyledGap size={size} variant={variant}>
      <div />
    </StyledGap>
  );
};

export default GapSeparator;
