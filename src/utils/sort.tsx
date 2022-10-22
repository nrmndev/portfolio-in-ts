import { useMemo } from "react";

const useSort = (props: number[]): number[] => {
  console.log(props);
  const sort: any = useMemo(
    () => props.sort((a: number, b: number) => a - b),
    [props]
  );
  return sort.join();
};

export default useSort;
