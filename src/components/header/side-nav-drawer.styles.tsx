import styled from "styled-components";

export const StyledSideNavDrawer = styled.div`
  margin: 0;
  padding: 0;
  z-index: 20;
  top: 0;
  left: 0;
  position: fixed;
  width: auto;
  height: 100vh;
`;

export const StyledSideNavDrawerList = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding-left: 5px;
  padding-right: 5px;
  margin: 0;
  li:last-of-type {
    justify-content: flex-end;
  }
  svg {
    font-size: 1.5rem;
  }
  span {
    transform: translateX(-150px);
    transition: 0.3s transform ease-in;
    display: flex;
    font-size: 0.8rem;
  }
  &:hover {
    span {
      transform: translateX(0);
    }
  }
`;
