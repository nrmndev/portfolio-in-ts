import styled from "styled-components";
import {
  themedGradientBackgroundColor,
  themedBoxShadow,
} from "../theme-provider/theme-provider.styles";

export const StyledCardContent = styled.div`
  transition: transform 0.3s ease-in;
  transform: translateY(10px);
`;
export const StyledCardBase = styled.div`
  border-radius: 10px;
  padding: 35px 50px 35px 50px;
  //background: linear-gradient(165deg, #fff 50%, #edebeb 80%);
  background: ${({ color }) => (color ? color : themedGradientBackgroundColor)};
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    transition: opacity 0.3s ease-in;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    background: linear-gradient(165deg, #fff 0%, #fafafa 50%);
    opacity: 0;
    z-index: 0;
  }
  &:hover ${StyledCardContent} {
    transform: translateY(0);
  }
`;

export const StyledCardWithShadow = styled(StyledCardBase)`
  box-shadow: ${themedBoxShadow};
`;
