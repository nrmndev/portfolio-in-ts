import { CSSTransition } from "react-transition-group";
import React from "react";
interface Props {
  in: boolean;
  delay?: number;
  children?: React.ReactNode | React.ReactElement | JSX.Element;
  type: "fade" | "fadeUpDown";
}
const TransitionFadeInUpDown = (props: Props): JSX.Element => {
  return (
    <CSSTransition
      in={props.in}
      timeout={300}
      classNames={props.type}
      mountOnEnter
      unmountOnExit
    >
      <>{props.children}</>
    </CSSTransition>
  );
};

export default TransitionFadeInUpDown;
