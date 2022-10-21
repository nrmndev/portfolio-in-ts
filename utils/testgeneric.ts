////////////////// IN SHORT - GENERIC IS JUST A POINTER
///////// like a VARIABLE T
export const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};
const l = last([1, "3", 3]);
/////////////////////////////////////////////////////////
const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
const v = makeArr([5, 6], 6);
const v2 = makeArr("5", "6");
const v3 = makeArr("a", 5);
////////////////////////////////////////////////////////
// SET GENERIC BUT REQUIRE firstName and lastName (Extends)
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};
const v4 = makeFullName({ firstName: "bob", lastName: "junior", age: 15 });
////////////////////////////////////////////////////////
// INTERFACE GENERICS
interface Tab<T> {
  id: string;
  position: number;
  T: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
// Equals to saying
// type NumberTab = {
//   id: string;
//   position: number;
//   data: number;
// };
