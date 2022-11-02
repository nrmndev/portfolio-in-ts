import { Link } from "react-scroll";
import styled from "styled-components";

export const StyledNavListItem = styled.li``;
export const StyledNavLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.colorWithContrast};
  transition: color 0.35s ease-in-out;
`
);
