import styled from "styled-components";
import {
  themedBoxShadow,
  themedGradientBackgroundColor,
} from "../theme-provider/theme-provider.styles";

export const StyledThumbnailWrapper = styled.div`
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
    background: ${themedGradientBackgroundColor};
    box-shadow: ${themedBoxShadow};
    border-radius: 6px;
  }
`;
