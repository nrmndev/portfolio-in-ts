import styled from "styled-components";
import {
  GAP_SEPARATOR_VARIANT,
  handleGapSeparatorVariant,
} from "../theme-provider/utilities";

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

export const StyledGap = styled.div<IStyledGap>(
  ({ size, variant }) => `
  padding: ${handleSize(size)};
  div {
    ${handleGapSeparatorVariant(variant)}
    height: 1px;
  }
`
);
