import { getFromLS } from "../../utils/localstorage";

export const setTheme = () => {
  const themeFromLS = getFromLS("theme");
  return themeFromLS;
};
