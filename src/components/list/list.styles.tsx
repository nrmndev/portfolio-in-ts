import styled from "styled-components";
import { themedParagraphColor } from "../theme-provider/theme-provider.styles";

export const StyleListTitle = styled.h5`
  color: #43cea2;
  font-size: 1rem;
`;
export const StyledList = styled.ul`
  padding-left: 0;
  align-items: center;
  justify-content: center;
  align-content: center;
  li {
    list-style: none;
    margin-bottom: 5px;
    position: relative;
    color: ${themedParagraphColor};
  }
  svg {
    margin-right: 12px;
    color: #43cea2;
  }
`;
