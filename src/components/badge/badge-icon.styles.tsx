import styled from "styled-components";

interface IStyledBadge {
  readonly color: string;
}
const StyledBadgeIcon = styled.span<IStyledBadge>`
  color: ${({ color }) => (color ? color : `#000`)};
  span {
    margin-left: 10px;
  }
`;

export default StyledBadgeIcon;
