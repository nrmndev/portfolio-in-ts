import { BiCheckDouble } from "react-icons/bi";
import { StyledList } from "./list.styles";

type ListProps = {
  listItems: string[];
  listStyle?: JSX.Element;
};
const List = ({ listItems, listStyle = <BiCheckDouble /> }: ListProps) => {
  return (
    <>
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
