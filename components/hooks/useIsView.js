import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice22";
const useIsView = (reference) => {
  const iscurrentMessage = useSelector((state) => state.ui.currentMessage);
  const dispatch = useDispatch();

  const refs = reference.current.map((e) => e.getAttribute("id"));
  for (let i = 0; i < refs.length; i++) {
    let curr = document.getElementById(refs[i]).getBoundingClientRect();
    let currIsView = curr.top >= 0 && curr.bottom <= window.innerHeight;
    if (currIsView === true) {
      dispatch(uiActions.setElementInViewById(refs[i]));
      console.log(iscurrentMessage);
      debugger;
    }
  }
};
export default useIsView;
