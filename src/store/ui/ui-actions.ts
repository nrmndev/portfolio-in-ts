import { uiActions } from "./ui-slice";

export const uiSetMessage = (item: string) => uiActions.setMessage(item);

export const uiSetCardBackdrop = (bool: boolean) =>
  uiActions.setCardBackdrop(bool);

export const uiSetTheme = (payload: string) => uiActions.setTheme(payload);

export const uiSetToggleMessage = (bool: boolean) =>
  uiActions.setToggleMessage(bool);

export const uiSetModalActive = (bool: boolean) =>
  uiActions.setModalActive(bool);

export const uiSetMobileView = (bool: boolean) => uiActions.setMobileView(bool);
