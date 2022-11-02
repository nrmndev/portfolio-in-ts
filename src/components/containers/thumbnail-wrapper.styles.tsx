import styled from "styled-components";

export const StyledThumbnailWrapper = styled.div(
  ({ theme }) => `
  position: relative;
  z-index: 1;
  &:before {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: calc(100% - 130px);
    content: "";
    left: 50%;
    bottom: 0;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background: ${theme.backgroundColorGradient};
    box-shadow: ${theme.boxShadow};
    border-radius: 6px;
  }
`
);
