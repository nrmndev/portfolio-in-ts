import { BiCheckDouble } from "react-icons/bi";
import { StyledList, StyledListItem } from "./list.styles";

type ListProps = {
  children: React.ReactNode;
};
const List = ({ children }: ListProps) => {
  return <StyledList>{children}</StyledList>;
};

type ListItemProps = {
  children: React.ReactNode;
  listStyle?: JSX.Element;
};

export const ListItem = ({
  children,
  listStyle = <BiCheckDouble />,
}: ListItemProps) => {
  return (
    <StyledListItem>
      {listStyle}
      {children}
    </StyledListItem>
  );
};

export default List;
