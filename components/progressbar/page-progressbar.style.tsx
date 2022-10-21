import styled from "styled-components";

interface IStyledPageProgressBar {
  bg: string;
}

const StyledPageProgressBar = styled.div<IStyledPageProgressBar>`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 10px;
  z-index: 50;
  height: 10px;
  div {
    height: 10px;
    background: ${({ bg }) => (bg ? `${bg};` : `#000;`)};
  }
`;

export default StyledPageProgressBar;
