import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks/typedhooks";
import { ThemeType } from "./utils/interfaces/theme";
import { Routes, Route } from "react-router-dom";
import {
  uiIsMessageActive,
  uiIsModalActive,
  uiTheme,
} from "./store/ui/ui-selector";
import { uiSetMobileView, uiSetModalActive } from "./store/ui/ui-actions";

import ReactPage from "./pages/react";

import PageProgressBar from "./components/progressbar/page-progressbar.component";
import MainLayout from "./components/containers/main-layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage";
import "./components/styles/main.scss";
import Modal from "./components/modal/modal.component";

//import Playground from "./pages/component-playground-page/playground";
import HireSection from "./components/hire-section/hire-section.component";
import PlayGround from "./pages/component-playground-page/form-playground";
import ReduxPlayground from "./pages/redux-playground/redux";
import ContainerPlayground from "./pages/component-playground-page/container-playground";
import FormPlayGround from "./pages/component-playground-page/form-playground";
import VideoWidget from "./components/video-widget/video-widget.component";

function App() {
  const dispatch = useAppDispatch();
  const isActive = useAppSelector(uiIsMessageActive);
  const isModalActive = useAppSelector(uiIsModalActive);
  const currentTheme = useAppSelector(uiTheme);

  //const isMobile = useAppSelector(uiIsMobile);
  //const isTheme = useSelector(uiIsTheme);

  // useEffect(() => {
  //   const themeFromLS = getFromLS("theme");
  //   dispatch(uiSetTheme(themeFromLS));
  // }, []);

  useEffect(() => {
    const body = document.getElementById("body");
    switch (currentTheme as ThemeType) {
      case ThemeType.DARK:
        body && body.classList.add("dark");
        body && body.classList.remove("light");
        break;
      case ThemeType.LIGHT:
        body && body.classList.add("light");
        body && body.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [currentTheme]);

  useEffect(() => {
    const body = document.getElementById("body");
    if (isModalActive) {
      body && body.classList.add("open");
    } else {
      body && body.classList.remove("open");
    }
  }, [isModalActive]);
  //Check responsive viewport, apply setMobileView
  useEffect(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw < 768) {
      dispatch(uiSetMobileView(true));
    }
  }, [dispatch, isActive]);

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
          <Route path="playground" element={<PlayGround />} />
          <Route path="redux" element={<ReduxPlayground />} />
          <Route path="container" element={<ContainerPlayground />} />
          <Route path="form" element={<FormPlayGround />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <HireSection />
        <Footer />
        <VideoWidget />
      </MainLayout>

      <Modal show={isModalActive} onClose={hideItemHandler}>
        <FormPlayGround />
      </Modal>
    </>
  );
}

export default App;
