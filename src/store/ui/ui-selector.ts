import type { RootState } from "../index";

export const uiMessage = (state: RootState): string => state.ui.message;
export const uiIsMessageActive = (state: RootState): boolean =>
  state.ui.isMessageActive;
export const uiIsModalActive = (state: RootState): boolean =>
  state.ui.isModalActive;
export const uiTheme = (state: RootState): string => state.ui.theme;
export const uiIsMobile = (state: RootState): boolean => state.ui.isMobile;
