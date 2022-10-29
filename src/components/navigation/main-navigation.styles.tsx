import styled from "styled-components";
import {
  themedBackgroundColor,
  themedBoxShadow,
  themedMainNavTextColor,
  themedParagraphColor,
} from "../theme-provider/theme-provider.styles";

export const StyledMainNav = styled.header`
  z-index: 99;
  position: absolute;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
  box-shadow: ${themedBoxShadow};
  background: ${themedBackgroundColor};
  @media (min-width: 992px) .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

export const StyledMainNavContainer = styled.nav`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
`;

export const StyledMainNavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  justify-content: flex-end;
`;
export const StyledMainNavListItem = styled.li`
  //flex: 1;
  a {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${themedParagraphColor};
  }
`;
