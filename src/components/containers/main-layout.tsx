import { useAppSelector } from "../../store/hooks/typedhooks";
import {
  uiIsMessageActive,
  uiIsMobile,
  //uiTheme,
} from "../../store/ui/ui-selector";
import NormonHTML from "../portals/normon-portal";
import { StyledMain } from "./main-layout.styles";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = (props: Props): JSX.Element => {
  const isActive = useAppSelector(uiIsMessageActive);
  //const currentTheme = useAppSelector(uiTheme);
  const isMobile = useAppSelector(uiIsMobile);
  return (
    <StyledMain className="main">
      {props.children}
      {isActive && !isMobile && <NormonHTML />}
    </StyledMain>
  );
};

export default MainLayout;
