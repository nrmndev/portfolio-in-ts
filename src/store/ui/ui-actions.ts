import { uiActions } from "./ui-slice";

//export const uiSetMessage = (item: string) => uiActions.setMessage(item);

export const uiSetCardBackdrop = (bool: boolean) =>
  uiActions.setCardBackdrop(bool);

export const uiSetTheme = (theme: string) => uiActions.setTheme(theme);

export const uiSetToggleMessage = (bool: boolean) =>
  uiActions.setToggleMessage(bool);

export const uiSetModalActive = (bool: boolean) =>
  uiActions.setModalActive(bool);

export const uiSetMobileView = (bool: boolean) => uiActions.setMobileView(bool);

export const uiSetView = (bool: boolean) => uiActions.setView(bool);

export const uiUpdateMessage = (item: string) => uiActions.updateMessage(item);
export const uiClearMessage = () => uiActions.clearMessage();
