import styled from "styled-components";
import { themedBackgroundColor } from "../theme-provider/theme-provider.styles";

export const StyledTimelineContainer = styled.div`
  padding-left: 50px;
  border-width: 0 0 0 5px;
  border-style: solid;
  border-color: ${themedBackgroundColor};
`;

export const StyledTimelineItem = styled.div`
  margin-top: 40px;
  position: relative;
  &:before,
  &:after {
    position: absolute;
    content: "";
    transform: translateY(-7px);
  }
  &:before {
    width: 55px;
    height: 5px;
    right: 100%;
    top: 63px;
    background: ${themedBackgroundColor};
    z-index: 0;
  }

  &:after {
    width: 20px;
    height: 20px;
    border: 5px solid ${themedBackgroundColor};
    border-radius: 100%;
    left: -62px;
    top: 55px;
    background: #43cea2;
  }
`;
