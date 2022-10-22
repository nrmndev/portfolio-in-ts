import { useMemo } from "react";

// const useSortList:<Type> = (props: Type[]): Type[] => {
//   const sort: any = useMemo(
//     () => props.sort((a: Type[], b: Type) => a - b),
//     [props]
//   );
//   return sort.join();
// };

const useSortList = (props: number[]): number[] => {
  const sort: any = useMemo(
    () => props.sort((a: number, b: number) => a - b),
    [props]
  );
  return sort.join();
};
export default useSortList;
