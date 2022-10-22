//import { useCallback } from "react";
// export const setToLS = useCallback((key: any, value: any) => {
//   window.localStorage.setItem(key, JSON.stringify(value));
// },[]);

export const setToLS = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
export const getFromLS = (key: string) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};
