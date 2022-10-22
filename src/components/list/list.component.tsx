import { BiCheckDouble } from "react-icons/bi";
import { StyledList, StyleListTitle } from "./list.styles";

type ListProps = {
  listItems: string[];
  listStyle?: JSX.Element;
  listTitle?: string;
};
const List = ({
  listItems,
  listStyle = <BiCheckDouble />,
  listTitle,
}: ListProps) => {
  return (
    <>
      {listTitle && <StyleListTitle>{listTitle}</StyleListTitle>}
      {listItems && (
        <StyledList>
          {listItems.map((listItem: string, i: number) => (
            <li key={i}>
              {listStyle}
              {listItem}
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
};

export default List;
