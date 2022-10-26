import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks/typedhooks";
import { ThemeType } from "./utils/interfaces/theme";
import { Routes, Route } from "react-router-dom";
import {
  uiIsMessageActive,
  uiIsModalActive,
  uiTheme,
} from "./store/ui/ui-selector";
import {
  uiSetMobileView,
  uiSetModalActive,
  uiSetTheme,
} from "./store/ui/ui-actions";

import { getFromLS } from "./utils/localstorage";
import ReactPage from "./pages/react";

import PageProgressBar from "./components/progressbar/page-progressbar.component";
import MainLayout from "./components/containers/main-layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage";
import "./components/styles/main.scss";
import Modal from "./components/modal/modal.component";
import ContactUs from "./components/contact-form";
//import Playground from "./pages/component-playground-page/playground";
import HireSection from "./components/hire-section/hire-section.component";

function App() {
  const dispatch = useAppDispatch();
  const isActive = useAppSelector(uiIsMessageActive);
  const isModalActive = useAppSelector(uiIsModalActive);
  const currentTheme = useAppSelector(uiTheme);

  //const isMobile = useAppSelector(uiIsMobile);
  //const isTheme = useSelector(uiIsTheme);

  //Check responsive viewport, apply setMobileView
  useEffect(() => {
    const themeFromLS = getFromLS("theme");
    dispatch(uiSetTheme(themeFromLS));

    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw < 768) {
      dispatch(uiSetMobileView(true));
    }

    const body = document.getElementById("body");
    if (isModalActive) {
      body && body.classList.add("open");
    } else {
      body && body.classList.remove("open");
    }

    switch (currentTheme as ThemeType) {
      case ThemeType.DARK:
        body && body.classList.add("theme-dark");
        break;
      case ThemeType.LIGHT:
        body && body.classList.remove("theme-dark");
        break;
      default:
        break;
    }
  }, [dispatch, isModalActive, isActive, currentTheme]);

  const hideItemHandler = () => {
    dispatch(uiSetModalActive(false));
    const body = document.querySelector("body");
    body && body.classList.remove("open");
  };
  return (
    <>
      <PageProgressBar bg="linear-gradient(272deg, rgba(67, 206, 162, 0.7) 0%, rgba(24, 90, 157, 0.7));" />
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="reactjs/*" element={<ReactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <HireSection />
        <Footer />
      </MainLayout>

      <Modal show={isModalActive} onClose={hideItemHandler}>
        <ContactUs />
      </Modal>
    </>
  );
}

export default App;
