import styled from "styled-components";

export const StyledSpan = styled.span(
  ({ theme }) => `
  width: 0;
  overflow: hidden;
  /* display: block; */
  display: inline-block;
  position: absolute;
  white-space: nowrap;
  animation: typeWriter 3s ease-in-out infinite;
  max-width: 450px;
  margin-left: 5px;
  &:after {
    content: "";
    height: 100%;
    position: absolute;
    right: -5px;
    border-right: 1px solid ${theme.colorPrimary};
  }
  @keyframes typeWriter {
    from,
    0% {
      width: 0%;
    }
    20% {
      width: 100%;
    }
    60% {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`
);
