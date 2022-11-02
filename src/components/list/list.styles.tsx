import styled from "styled-components";

export const StyledList = styled.ul(
  ({ theme }) => `
  padding-left: 0;
  align-items: center;
  justify-content: center;
  align-content: center;
  li {
    list-style: none;
    margin-bottom: 5px;
    position: relative;
    color: ${theme.colorWithContrast};
  }
  svg {
    margin-right: 12px;
    color: #43cea2;
  }
`
);
