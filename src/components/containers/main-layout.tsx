import { useAppSelector } from "../../store/hooks/typedhooks";
import {
  uiIsMessageActive,
  uiIsMobile,
  //uiTheme,
} from "../../store/ui/ui-selector";
import MessageOverlay from "../portals/messages.component";
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
      <div id="top"></div>
      {props.children}
      {isActive && !isMobile && <MessageOverlay />}
    </StyledMain>
  );
};

export default MainLayout;
