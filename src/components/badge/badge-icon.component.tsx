import { TEXT_COLOR } from "../theme-provider/utilities";
import StyledBadgeIcon from "./badge-icon.styles";

type BadgeProps = {
  icon: JSX.Element;
  title?: string;
  color?: TEXT_COLOR;
};

const BadgeIcon = ({
  icon,
  title = undefined,
  color = TEXT_COLOR.BLACK,
}: BadgeProps) => {
  return (
    <StyledBadgeIcon color={color}>
      {icon}
      {title && <span>{title}</span>}
    </StyledBadgeIcon>
  );
};

export default BadgeIcon;
