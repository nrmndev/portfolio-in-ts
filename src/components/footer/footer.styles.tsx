import styled from "styled-components";

const StyledFooter = styled.footer(
  ({ theme }) => `
  min-height: 54px;
  text-align: center;
  font-size: 0.8rem;
  background: ${theme.backgroundColor};
  position: relative;
  z-index: 2;
  span {
    display: block;
    width: 100%;
    background: ${theme.colorWhite_Color4};
    color: ${theme.colorPrimaryAndWhite};
    padding-top: 5px;
    padding-bottom: 5px;
  }
`
);

export default StyledFooter;
