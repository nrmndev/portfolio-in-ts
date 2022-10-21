import StyledBadge from "./badge.styles";

type BadgeProps = {
  icon: JSX.Element;
  title?: string;
  color?: string;
};

const Badge = ({ icon, title = undefined, color = "#000" }: BadgeProps) => {
  return (
    <StyledBadge color={color}>
      {icon}
      {title && <span>{title}</span>}
    </StyledBadge>
  );
};

export default Badge;
