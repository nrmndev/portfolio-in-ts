import { useEffect, useState } from "react";
import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks/typedhooks";
import SideNavList from "./header-side-nav.component";
import HeaderTopNav from "./header-top-nav.component";
import HeaderTopSettings from "./header-top-settings";
let isInitial = true;
const Header = () => {
  const isMobileView = useAppSelector((state: RootState) => state.ui.isMobile);
  const [sideNavVisible, setsideNavVisible] = useState<boolean>(false);

  useEffect(() => {
    const refRects = () => {
      let curr = document.getElementById("SkillsSection");
      let currIsView = curr?.getBoundingClientRect().top;
      if (currIsView! <= 300) {
        setsideNavVisible(true);
      } else {
        setsideNavVisible(false);
      }
    };
    if (!isMobileView) {
      window.addEventListener("scroll", refRects);
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    return () => {};
  }, [isMobileView]);

  return (
    <>
      {sideNavVisible && !isMobileView && <SideNavList />}
      <HeaderTopNav />
      <HeaderTopSettings />
    </>
  );
};

export default Header;
