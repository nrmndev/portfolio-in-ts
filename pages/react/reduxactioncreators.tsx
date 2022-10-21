import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/data-slice";
import WithLineNumbers from "../../utils/code-highlighter";

const exampleCode = `
interface bankType {
  id: number;
  uid: string;
  account_number: string;
  iban: string;
  bank_name: string;
  routing_number: string;
  swift_bic: string;
}
const bankData = {
  data: {} as bankType,
};
const UseStateSample = () => {
  const dispatch = useDispatch();
  const fetchData = () => {
    return async (dispatch: any) => {
      const fetchData = async (): Promise<typeof bankData> => {
        const response = await fetch(
          "https://random-data-api.com/api/bank/random_bank?size=5"
        );
        if (!response.ok) {
          throw new Error("Could not fetch cart data!");
        }
        const data: typeof bankData = await response.json();
        return data;
      };

      try {
        const fetchedData = await fetchData();

        dispatch(
          dataActions.addDummy({
            data: fetchedData || [],
          })
        );
      } catch (error) {
        alert(error);
      }
    };
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>You can listen now to store data</>
  );
};
`.trim();

interface bankType {
  id: number;
  uid: string;
  account_number: string;
  iban: string;
  bank_name: string;
  routing_number: string;
  swift_bic: string;
}
const bankData = {
  data: {} as bankType,
};
const UseStateSample = () => {
  const dispatch = useDispatch();
  const fetchData = () => {
    return async (dispatch: any) => {
      const fetchData = async (): Promise<typeof bankData> => {
        const response = await fetch(
          "https://random-data-api.com/api/bank/random_bank?size=5"
        );
        if (!response.ok) {
          throw new Error("Could not fetch cart data!");
        }
        const data: typeof bankData = await response.json();
        return data;
      };

      try {
        const fetchedData = await fetchData();

        dispatch(
          dataActions.addDummy({
            data: fetchedData || [],
          })
        );
      } catch (error) {
        alert(error);
      }
    };
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <p>
        This is an example of action creator for async fetching. You perform
        some side-effects before tapping in to your dispatch action. Because
        store actions must be PURE function so therefore performing sideeffects
      </p>
      <WithLineNumbers code={exampleCode} language="jsx" />
    </>
  );
};

export default UseStateSample;