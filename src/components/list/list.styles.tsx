import styled from "styled-components";

export const StyledList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const StyledListItem = styled.li(
  ({ theme }) => `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${theme.colorWithContrast};
    margin-bottom: 5px;
    position: relative;
    svg {
      margin-right: 5px;
    }
    a,
    svg {
      color: ${theme.color};
    }
  `
);
