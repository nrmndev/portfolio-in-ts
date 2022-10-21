import { useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks/typedhooks";
import { uiActions } from "../../store/ui-slice";
import { setToLS } from "../../utils/localstorage";
import { useCallback } from "react";
const HeaderTopSettings = () => {
  const isMobileView = useAppSelector((state: RootState) => state.ui.isMobile);
  const currentTheme = useAppSelector((state: RootState) => state.ui.theme);
  const dispatch = useDispatch();
  const onClickHandler = useCallback(
    (e: any) => {
      dispatch(uiActions.toggleMessage(e.target.checked));
    },
    [dispatch]
  );

  const onClickSetTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToLS("theme", event.target.checked ? "dark" : "light");
    dispatch(uiActions.setTheme(event.target.checked ? "dark" : "light"));
  };

  return (
    <div className="ui-control">
      <div className="custom-control custom-switch_ui mb-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch2"
          onChange={onClickSetTheme}
          checked={currentTheme === "light" ? false : true}
        />
        <label className="custom-control-label" htmlFor="customSwitch2"></label>
      </div>
      {!isMobileView && (
        <div className="custom-control custom-switch_ai">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={onClickHandler}
            defaultChecked
          />
          <label
            className="custom-control-label"
            htmlFor="customSwitch1"
          ></label>
        </div>
      )}
    </div>
  );
};

export default HeaderTopSettings;
