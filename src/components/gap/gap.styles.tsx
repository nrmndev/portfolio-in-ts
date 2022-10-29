import styled from "styled-components";
import {
  themedBackgroundColor,
  themedBorderColor,
} from "../theme-provider/theme-provider.styles";

interface IStyledGap {
  size: string;
  variant: string;
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
export const StyledGap = styled.div<IStyledGap>`
  padding: ${({ size }) => handleSize(size)};
  div {
    height: 1px;
    background: ${({ variant }) =>
      variant !== "base" ? themedBorderColor : `none`};
  }
`;