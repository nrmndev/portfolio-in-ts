import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks/typedhooks";
import { uiIsMobile } from "../../store/ui/ui-selector";
import SideNavList from "./header-side-nav.component";
import MainNavigation from "../navigation/main-navigation.component";
import HeaderTopSettings from "./header-top-settings";
let isInitial = true;
const Header = () => {
  const isMobileView = useAppSelector(uiIsMobile);
  const [sideNavVisible, setsideNavVisible] = useState<boolean>(false);

  useEffect(() => {
    const refRects = () => {
      const curr = document.getElementById("SkillsSection");
      if (curr) {
        const currIsView = curr.getBoundingClientRect().top;
        if (currIsView <= 300) {
          setsideNavVisible(true);
        } else {
          setsideNavVisible(false);
        }
      }
    };
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
      {sideNavVisible && !isMobileView && <SideNavList />}
      <MainNavigation />
      <HeaderTopSettings />
    </>
  );
};

export default Header;
