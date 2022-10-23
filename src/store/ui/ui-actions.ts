import { uiActions } from "../ui-slice";

export const uiSetMessage = (item: string) => uiActions.setMessage(item);
export const uiSetCardBackdrop = (bool: boolean) =>
  uiActions.setCardBackdrop(bool);
