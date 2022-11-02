import styled from "styled-components";

export const StyledMainNav = styled.header(
  ({ theme }) => `
  z-index: 25;
  position: absolute;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
  box-shadow: ${theme.boxShadow};
  background: ${theme.backgroundColor};
  @media (min-width: 992px) .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`
);

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
export const StyledMainNavListItem = styled.li(
  ({ theme }) => `
  //flex: 1;
  a {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${theme.colorWithContrast};
    position: relative;
    display: block;
    transition: color 0.3s ease-in-out;
    &:after {
      position: absolute;
      display: block;
      content: "";
      width: 0%;
      height: 2px;
      transition: width 0.3s ease-in-out;
      background: ${theme.colorPrimary};
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`
);
