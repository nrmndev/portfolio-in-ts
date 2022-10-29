import { getFromLS } from "../../utils/localstorage";

const currentTheme = getFromLS("theme");

export const UiInitialValueType = {
  message: "Hello, I'm Normon! How's your day?",
  theme: currentTheme ? currentTheme : "light",
  isView: false,
  isMobile: false,
  isMessageActive: true,
  cardBackdrop: false,
  isModalActive: false,
};
