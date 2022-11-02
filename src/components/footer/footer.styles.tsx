import styled from "styled-components";

const StyledFooter = styled.footer(
  ({ theme }) => `
  min-height: 58px;
  text-align: center;
  font-size: 0.8rem;
  background: ${theme.backgroundColor};
  position: relative;
  z-index: 2;
  span {
    display: block;
    width: 100%;
    background: #fff;
  }
`
);

export default StyledFooter;
