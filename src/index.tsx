import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import "./index.scss";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { fetchALLData } from "./store/data/data-slice";

import ReduxThemeProvider from "./components/theme-provider/theme-provider.component";

store.dispatch(fetchALLData());
//const theme = useAppSelector(uiTheme);
const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ReduxThemeProvider>
        <App />
      </ReduxThemeProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
