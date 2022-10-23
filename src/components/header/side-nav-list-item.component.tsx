import React from "react";
import { useDispatch } from "react-redux";
import { scroller } from "react-scroll";
import { uiSetCardBackdrop, uiSetMessage } from "../../store/ui/ui-actions";
import { MouseEventType } from "../../utils/interfaces/interfaces";
import { StyledNavLink, StyledNavListItem } from "./side-nav-list-item.styles";

type Props = {
  title: string;
  to: string;
  message: string;
};
const NavListItem = (props: Props) => {
  const dispatch = useDispatch();
  const onMouseEventHandler = (
    item: string,
    e: React.MouseEvent<HTMLElement>
  ) => {
    switch (e.type) {
      case MouseEventType.MOUSE_ENTER:
        dispatch(uiSetMessage(item));
        dispatch(uiSetCardBackdrop(true));
        break;
      case MouseEventType.MOUSE_LEAVE:
        dispatch(uiSetCardBackdrop(false));
        dispatch(uiSetMessage(""));
        break;
      default:
        break;
    }
  };

  const handleSetInactive = () => {
    dispatch(uiSetMessage(""));
  };
  const handleSetActive = (message: string) => {
    setTimeout(() => {
      dispatch(uiSetMessage(message));
    }, 150);
  };

  const handleKeyUp = (
    item: string,
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.code === "Enter") {
      scroller.scrollTo(item, null);
    }
  };
  return (
    <StyledNavListItem>
      <StyledNavLink
        activeClass="active"
        to={props.to}
        spy={true}
        smooth={true}
        delay={0}
        duration={150}
        offset={-250}
        onSetActive={handleSetActive.bind(null, props.message)}
        onSetInactive={handleSetInactive}
        onMouseEnter={onMouseEventHandler.bind(null, props.message)}
        onMouseLeave={onMouseEventHandler.bind(null, "")}
        tabIndex={0}
        onKeyUp={handleKeyUp.bind(null, props.to)}
      >
        <span>{props.title}</span>
      </StyledNavLink>
    </StyledNavListItem>
  );
};

export default NavListItem;
