import styled from "styled-components";
import { themedBackgroundColor } from "../theme-provider/theme-provider.styles";

const StyledBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 22;
  background: ${themedBackgroundColor};
  top: 0;
  left: 0;
`;

export default StyledBackdrop;
