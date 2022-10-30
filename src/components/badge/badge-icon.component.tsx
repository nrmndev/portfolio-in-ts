import StyledBadgeIcon from "./badge-icon.styles";

type BadgeProps = {
  icon: JSX.Element;
  title?: string;
  color?: string;
};

const BadgeIcon = ({ icon, title = undefined, color = "#000" }: BadgeProps) => {
  return (
    <StyledBadgeIcon color={color}>
      {icon}
      {title && <span>{title}</span>}
    </StyledBadgeIcon>
  );
};

export default BadgeIcon;
