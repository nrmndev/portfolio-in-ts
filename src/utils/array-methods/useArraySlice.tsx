type Props = {
  currPageState: number;
  itemsPerPage: number;
  oldArray: any;
};

const useArraySlice = ({
  currPageState,
  itemsPerPage,
  oldArray = [],
}: Props) => {
  const lastIndex = currPageState * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const newArray = oldArray.slice(firstIndex, lastIndex);
  return newArray;
};

export default useArraySlice;
