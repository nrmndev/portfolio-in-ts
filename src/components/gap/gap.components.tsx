import { GAP_SEPARATOR_VARIANT } from "../theme-provider/utilities";
import { StyledGap } from "./gap.styles";

type GapSeparatorProps = {
  size?: "sm" | "md" | "lg";
  variant?: GAP_SEPARATOR_VARIANT;
};
const GapSeparator = ({
  size = "sm",
  variant = GAP_SEPARATOR_VARIANT.RAW,
}: GapSeparatorProps) => {
  return (
    <StyledGap size={size} variant={variant}>
      <div />
    </StyledGap>
  );
};

export default GapSeparator;
