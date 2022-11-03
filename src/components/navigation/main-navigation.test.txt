import { uiSetTheme } from "../../store/ui/ui-actions";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../utils/test/test-utils";
import uiReducer from "../../store/ui/ui-slice";
import HeaderTopNav from "./main-navigation.component";
import { UiInitialValueType } from "../../store/ui/ui-types";
import { setupStore } from "../../store";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
test("Expect navigation rendered Theme Black", async () => {
  //   jest.mock("react-router-dom", () => ({
  //     ...jest.requireActual("react-router-dom"),
  //     useNavigate: () => jest.fn(),
  //     BrowserRouter: () => jest.fn(),
  //   }));

  //   const previousState = UiInitialValueType;
  //   expect(uiReducer(previousState, uiSetTheme("dark"))).toEqual({
  //     ...UiInitialValueType,
  //     theme: "dark",
  //   });

  const store = setupStore();
  store.dispatch(uiSetTheme("dark"));
  //renderWithProviders(<HeaderTopNav />, { store, wrapper: BrowserRouter });
  //render(<HeaderTopNav />, { wrapper: BrowserRouter });
  const P = renderWithProviders(<HeaderTopNav />, {
    store,
    wrapper: BrowserRouter,
  });
  //console.log(screen);
  expect(P).toMatchSnapshot();
});
