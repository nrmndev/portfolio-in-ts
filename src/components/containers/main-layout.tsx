import { useAppSelector } from "../../store/hooks/typedhooks";
import {
  uiIsMessageActive,
  uiIsMobile,
  //uiTheme,
} from "../../store/ui/ui-selector";
import NormonHTML from "../portals/normon-portal";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = (props: Props): JSX.Element => {
  const isActive = useAppSelector(uiIsMessageActive);
  //const currentTheme = useAppSelector(uiTheme);
  const isMobile = useAppSelector(uiIsMobile);
  return (
    <main className="main">
      {props.children}
      {isActive && !isMobile && <NormonHTML />}
    </main>
  );
};

export default MainLayout;
