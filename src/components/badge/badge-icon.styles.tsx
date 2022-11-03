import styled from "styled-components";
import { handleTextColor, TEXT_COLOR } from "../theme-provider/utilities";

interface IStyledBadge {
  readonly color: TEXT_COLOR;
}
const StyledBadgeIcon = styled.span<IStyledBadge>(
  ({ color }) => `
  ${handleTextColor(color)}
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    margin-left: 10px;
  }
`
);

export default StyledBadgeIcon;
