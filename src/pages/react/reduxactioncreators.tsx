// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { dataActions } from "../../store/data/data-slice";
// import WithLineNumbers from "../../utils/code-highlighter";

// const exampleCode = `
// interface bankType {
//   id: number;
//   uid: string;
//   account_number: string;
//   iban: string;
//   bank_name: string;
//   routing_number: string;
//   swift_bic: string;
// }
// const bankData = {
//   data: {} as bankType,
// };
// const UseStateSample = () => {
//   const dispatch = useDispatch();
//   const fetchData = () => {
//     return async (dispatch: any) => {
//       const fetchData = async (): Promise<typeof bankData> => {
//         const response = await fetch(
//           "https://random-data-api.com/api/bank/random_bank?size=5"
//         );
//         if (!response.ok) {
//           throw new Error("Could not fetch cart data!");
//         }
//         const data: typeof bankData = await response.json();
//         return data;
//       };

//       try {
//         const fetchedData = await fetchData();

//         dispatch(
//           dataActions.addDummy({
//             data: fetchedData || [],
//           })
//         );
//       } catch (error) {
//         alert(error);
//       }
//     };
//   };

//   useEffect(() => {
//     dispatch(fetchData());
//   }, []);

//   return (
//     <>You can listen now to store data</>
//   );
// };
// `.trim();

// interface bankType {
//   id: number;
//   uid: string;
//   account_number: string;
//   iban: string;
//   bank_name: string;
//   routing_number: string;
//   swift_bic: string;
// }
// const bankData = {
//   data: {} as bankType,
// };
const UseStateSample = () => {
  //   const dispatch = useDispatch();
  //   const fetchData = () => {
  //     return async (dispatch: any) => {
  //       const fetchData = async (): Promise<typeof bankData> => {
  //         const response = await fetch(
  //           "https://random-data-api.com/api/bank/random_bank?size=5"
  //         );
  //         if (!response.ok) {
  //           throw new Error("Could not fetch cart data!");
  //         }
  //         const data: typeof bankData = await response.json();
  //         return data;
  //       };

  //       try {
  //         const fetchedData = await fetchData();

  //         dispatch(
  //           dataActions.addDummy({
  //             data: fetchedData || [],
  //           })
  //         );
  //       } catch (error) {
  //         alert(error);
  //       }
  //     };
  //   };

  //   useEffect(() => {
  //     dispatch(fetchData());
  //   }, [dispatch]);

  return (
    <>
      <p>Content to follow</p>
      {/* <WithLineNumbers code={exampleCode} language="jsx" /> */}
    </>
  );
};

export default UseStateSample;
