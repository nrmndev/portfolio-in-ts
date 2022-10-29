import {
  uiSetCardBackdrop,
  uiUpdateMessage,
  uiSetMobileView,
  uiSetModalActive,
  uiSetTheme,
  uiSetToggleMessage,
  uiSetView,
} from "../../store/ui/ui-actions";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../utils/test/test-utils";
import uiReducer from "../../store/ui/ui-slice";

import { UiInitialValueType } from "../../store/ui/ui-types";
import { uiMessage } from "./ui-selector";

describe("UI Actions", () => {
  it("dispatches uiSetMessage correctly", async () => {
    // const store = setupStore()
    // store.dispatch(uiSetTheme("dark"))
    // renderWithProviders(<HeaderTopNav />, { store })
    const previousState = UiInitialValueType;
    expect(uiReducer(previousState, uiUpdateMessage("Hello There"))).toEqual({
      ...UiInitialValueType,
      message: "Hello There",
    });
  });

  it("dispatches uiSetCardBackdrop correctly", async () => {
    const previousState = UiInitialValueType;
    expect(uiReducer(previousState, uiSetCardBackdrop(true))).toEqual({
      ...UiInitialValueType,
      cardBackdrop: true,
    });
  });

  it("dispatches uiSetTheme correctly", async () => {
    const previousState = UiInitialValueType;
    expect(uiReducer(previousState, uiSetTheme("dark"))).toEqual({
      ...UiInitialValueType,
      theme: "dark",
    });
  });
  it("dispatches uiSetView correctly", async () => {
    const previousState = UiInitialValueType;
    expect(uiReducer(previousState, uiSetView(true))).toEqual({
      ...UiInitialValueType,
      isView: true,
    });
  });

  it("dispatches uiSetToggleMessage correctly", async () => {
    const previousState = UiInitialValueType;
    expect(uiReducer(previousState, uiSetToggleMessage(true))).toEqual({
      ...UiInitialValueType,
      isMessageActive: true,
    });
  });

  it("dispatches uiSetModalActive correctly", async () => {
    const previousState = UiInitialValueType;
    expect(uiReducer(previousState, uiSetModalActive(true))).toEqual({
      ...UiInitialValueType,
      isModalActive: true,
    });
  });

  it("dispatches uiSetMobileView correctly", async () => {
    const previousState = UiInitialValueType;
    expect(uiReducer(previousState, uiSetMobileView(true))).toEqual({
      ...UiInitialValueType,
      isMobile: true,
    });
  });

  //   it("dispatches uiSetMobileView correctly", async () => {
  //     const previousState = UiInitialValueType;
  //     expect(uiReducer(previousState, uiMessage("test"))).toEqual({
  //       ...UiInitialValueType,
  //       isMobile: true,
  //     });
  //   });
});
