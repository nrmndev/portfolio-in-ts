import styled, { DefaultTheme } from "styled-components";
import { GAP_SEPARATOR_VARIANT } from "../theme-provider/utilities";

interface IStyledGap {
  size: string;
  variant: GAP_SEPARATOR_VARIANT;
}

const handleSize = (size: string) => {
  switch (size) {
    case "sm":
      return `1rem 0;`;
    case "md":
    default:
      return `1.5rem 0`;
    case "lg":
      return `2rem 0`;
  }
};

const handleGapSeparatorVariant = (
  variant: GAP_SEPARATOR_VARIANT,
  theme: DefaultTheme
) => {
  switch (variant) {
    case GAP_SEPARATOR_VARIANT.RAW:
    default:
      return;
    case GAP_SEPARATOR_VARIANT.LINE:
      return `background: ${theme.borderColor}`;
  }
};
export const StyledGap = styled.div<IStyledGap>(
  ({ theme, size, variant }) => `
  padding: ${handleSize(size)};
  ${handleGapSeparatorVariant(variant, theme)}
  div {
    height: 1px;
  }
`
);
