import styled from "styled-components";
import {
  themedBackgroundColor,
  themedBoxShadow,
  themedGradientBackgroundColor,
  themedStaticPrimaryColor,
} from "../theme-provider/theme-provider.styles";

export const StyledModalContent = styled.div`
  // min-height: 70vh;
  // overflow: auto;
  //position: relative;
  //z-index: 51;
`;

export const StyledModalContainer = styled.div`
  background-color: ${themedBackgroundColor};
  padding: 1rem;
  border-radius: 14px;
  box-shadow: ${themedBoxShadow};
  z-index: 50;
  margin: 50px auto;
  width: 100%;
  max-width: 1230px;
  position: relative;
`;

export const StyledModalBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 22;
  background: ${themedBackgroundColor};
  top: 0;
  left: 0;
`;

export const StyledModalClose = styled.button`
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 45px;
  height: 45px;
  right: 10px;
  position: absolute;
  top: 10px;
  z-index: 1;
  background: ${themedGradientBackgroundColor};
  box-shadow: ${themedBoxShadow};
  color: ${themedStaticPrimaryColor};
  border: none;
  border-radius: 100%;
  opacity: 1;
`;
export default StyledModalBackdrop;
