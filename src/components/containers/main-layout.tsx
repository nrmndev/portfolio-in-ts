import React from "react";
import type { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks/typedhooks";
import NormonHTML from "../portals/normon-portal";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = (props: Props): JSX.Element => {
  const isActive = useAppSelector(
    (state: RootState) => state.ui.isMessageActive
  );
  // const isModalActive = useAppSelector(
  //   (state: RootState) => state.ui.isModalActive
  // );

  // const currentTheme = useAppSelector((state: RootState) => state.ui.theme);
  const isMobile = useAppSelector((state: RootState) => state.ui.isMobile);
  return (
    <main className="main">
      {props.children}
      {isActive && !isMobile && <NormonHTML />}
    </main>
  );
};

export default MainLayout;
