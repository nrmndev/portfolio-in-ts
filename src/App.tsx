import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import { getFromLS } from "./utils/localstorage";
import { useAppDispatch, useAppSelector } from "./store/hooks/typedhooks";
import { ThemeType } from "./utils/interfaces/theme";
import { Routes, Route } from "react-router-dom";
import ReactPage from "./pages/react";

import PageProgressBar from "./components/progressbar/page-progressbar.component";
import MainLayout from "./components/containers/main-layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage";
import "./components/styles/main.scss";
import Modal from "./components/modal/modal.component";
import ContactUs from "./components/contact-form";
import Revamp from "./pages/revamp/revamp";
import HireSection from "./components/hire-section/hire-section.component";
import {
  uiIsMessageActive,
  uiIsModalActive,
  uiTheme,
} from "./store/ui/ui-selector";
///import "./assets/neomorphism/scss/neumorphism.css";

function App() {
  const dispatch = useAppDispatch();
  const isActive = useAppSelector(uiIsMessageActive);
  const isModalActive = useAppSelector(uiIsModalActive);
  const currentTheme = useAppSelector(uiTheme);

  //const isMobile = useAppSelector(uiIsMobile);
  //const isTheme = useSelector(uiIsTheme);

  useEffect(() => {
    const themeFromLS = getFromLS("theme");
    dispatch(uiActions.setTheme(themeFromLS));
    const body = document.getElementById("body");
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw < 768) {
      dispatch(uiActions.setMobileView(true));
    }
    // dispatch(fetchSkillsData());

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
    return () => {
      //dispatch(fetchSkillsData());
    };
  }, [dispatch, isModalActive, isActive, currentTheme]);

  const hideItemHandler = () => {
    dispatch(uiActions.setModalActive(false));
    // setShowForm(false);
    // setshowMenuItem(false);
    // setModalShow(false);
    const body = document.querySelector("body");
    body && body.classList.remove("open");
    // overlay!.classList.remove("modal-open");
  };
  return (
    <>
      <PageProgressBar bg="linear-gradient(272deg, rgba(67, 206, 162, 0.7) 0%, rgba(24, 90, 157, 0.7));" />
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="reactjs/*" element={<ReactPage />} />
          <Route path="revamp" element={<Revamp />} />
          <Route path="*" element={<ReactPage />} />
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
