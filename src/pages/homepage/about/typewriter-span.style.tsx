import styled from "styled-components";
import { themedStaticPrimaryColor } from "../../../components/theme-provider/theme-provider.styles";

export const StyledSpan = styled.span`
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
    border-right: 1px solid ${themedStaticPrimaryColor};
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
`;
