import styled from "styled-components";
const StyledBackdrop = styled.div(
  ({ theme }) => `
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 22;
  background: ${theme.backgroundColor};
  top: 0;
  left: 0;
`
);

export default StyledBackdrop;
