import { Link } from "react-scroll";
import styled from "styled-components";
import { themedParagraphColor } from "../theme-provider/theme-provider.styles";

export const StyledNavListItem = styled.li``;
export const StyledNavLink = styled(Link)`
  color: ${themedParagraphColor};
  &:hover {
    svg {
      -webkit-animation-duration: 0.75s;
      animation-duration: 0.75s;
      -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
      animation-duration: calc(var(--animate-duration) * 0.75);
      -webkit-animation-name: bounceIn;
      animation-name: bounceIn;
    }
  }
`;
