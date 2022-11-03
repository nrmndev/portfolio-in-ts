import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import type { AppStore, RootState } from "../../store";
import { uiActions, uiSlice } from "../../store/ui/ui-slice";
import { dataSlice } from "../../store/data/data-slice";
import { UiInitialValueType } from "../../store/ui/ui-types";
import { DataInitialValueType } from "../../store/data/data-types";
import ReduxThemeProvider from "../../components/theme-provider/theme-provider.component";
// As a basic setup, import your same slice reducers
//import userReducer from "../features/users/userSlice";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = { ui: UiInitialValueType, data: DataInitialValueType },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { ui: uiSlice.reducer, data: dataSlice.reducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <ReduxThemeProvider>{children}</ReduxThemeProvider>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
