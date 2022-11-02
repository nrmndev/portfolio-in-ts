import { useDispatch } from "react-redux";

import { useAppSelector } from "../../store/hooks/typedhooks";
import { setToLS } from "../../utils/localstorage";
import { useCallback } from "react";
import {
  uiIsMessageActive,
  uiIsMobile,
  uiTheme,
} from "../../store/ui/ui-selector";
import { uiSetTheme, uiSetToggleMessage } from "../../store/ui/ui-actions";
import { FaRobot } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import {
  StyledSettingsCheckbox,
  StyledSettingsContainer,
  StyledSettingsLabel,
} from "./control-settings.styles";

const HeaderTopSettings = () => {
  const isMobileView = useAppSelector(uiIsMobile);
  const currentTheme = useAppSelector(uiTheme);
  const isMessageActive = useAppSelector(uiIsMessageActive);
  const dispatch = useDispatch();
  const onClickHandler = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      dispatch(uiSetToggleMessage(e.currentTarget.checked));
    },
    [dispatch]
  );

  const onClickSetTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToLS("theme", event.target.checked ? "dark" : "light");
    dispatch(uiSetTheme(event.target.checked ? "dark" : "light"));
  };

  return (
    <StyledSettingsContainer>
      <StyledSettingsCheckbox
        type="checkbox"
        id="customSwitch2"
        onChange={onClickSetTheme}
        checked={currentTheme === "light" ? false : true}
      />
      <StyledSettingsLabel htmlFor="customSwitch2" active={false}>
        {currentTheme === "light" ? <BsFillMoonStarsFill /> : <BsSun />}
        <span>Theme UI</span>
      </StyledSettingsLabel>
      {!isMobileView && (
        <>
          <StyledSettingsCheckbox
            type="checkbox"
            id="customSwitch1"
            onClick={onClickHandler}
            defaultChecked
          />
          <StyledSettingsLabel htmlFor="customSwitch1" active={isMessageActive}>
            <FaRobot />
            <span>Message UI</span>
          </StyledSettingsLabel>
        </>
      )}
    </StyledSettingsContainer>
  );
};

export default HeaderTopSettings;
