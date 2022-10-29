import { dataAddData } from "./data-actions";
import { dataActions } from "./data-slice";
import { DataInitialValueType } from "./data-types";
import store from "../../store";
import axios from "axios";

export const fetchAllData = () => {
  return async (dispatch: any) => {
    const fetchData = async (): Promise<typeof DataInitialValueType> => {
      const response = await fetch("./dummy.json");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data: typeof DataInitialValueType = await response.json();
      return data;
    };

    try {
      const allData = await fetchData();

      dispatch(dataAddData(allData));
    } catch (error) {
      alert(error);
    }
  };
};

export const axiosFetchAllData = () => {
  return async (dispatch: any) => {
    const fetchData = async (): Promise<typeof DataInitialValueType> => {
      const response = await axios
        .get("./dummy.json")
        .then((resp) => resp.data)
        .catch((error) => {
          alert(error);
        });

      // if (!response.ok) {
      //   throw new Error("Could not fetch cart data!");
      // }
      return response;
    };

    try {
      const allData = await fetchData();

      dispatch(dataAddData(allData));
    } catch (error) {
      alert(error);
    }
  };
};

//
//store.dispatch(axiosFetchAllData());
