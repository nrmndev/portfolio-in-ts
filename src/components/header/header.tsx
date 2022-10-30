import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks/typedhooks";
import { uiIsMobile } from "../../store/ui/ui-selector";
import SideNavDrawer from "./side-nav-drawer.component";
import MainNavigation from "../navigation/main-navigation.component";
import HeaderTopSettings from "./header-top-settings";
let isInitial = true;
const Header = () => {
  const isMobileView = useAppSelector(uiIsMobile);
  const [sideNavVisible, setsideNavVisible] = useState<boolean>(false);
  const refRects = useCallback(() => {
    //const curr = document.getElementById("SkillsSection");
    const root = document.getElementById("root");
    if (root) {
      const currIsView = root.getBoundingClientRect().top;
      if (currIsView <= -20) {
        setsideNavVisible(true);
      } else {
        setsideNavVisible(false);
      }
    }
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      window.addEventListener("scroll", refRects);
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    return () => {
      window.removeEventListener("scroll", refRects);
    };
  }, [isMobileView]);

  return (
    <>
      {sideNavVisible && !isMobileView && <SideNavDrawer />}
      <MainNavigation />
      <HeaderTopSettings />
    </>
  );
};

export default Header;
