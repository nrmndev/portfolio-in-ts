import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
