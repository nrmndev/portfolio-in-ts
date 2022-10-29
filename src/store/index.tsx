import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import logger from "redux-logger";
import dataReducer from "./data/data-slice";
import uiReducer from "./ui/ui-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  ui: uiReducer,
  data: dataReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
