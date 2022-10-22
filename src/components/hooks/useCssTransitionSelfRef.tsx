import { CSSTransition } from "react-transition-group";
import React, { useEffect, useRef, useState, useCallback } from "react";

type Props = {
  children?: React.ReactNode | React.ReactElement | JSX.Element;
};
const useCSSTransition = React.forwardRef((any: any, ref: any): JSX.Element => {
  const [inView, setInView] = useState(false);
  const refs = useRef<any>(null);
  const isInView = useCallback(() => {
    const rect = refs.current!.getBoundingClientRect();
    const bool = rect.top >= 0 && rect.bottom <= window.innerHeight; //returns if true or false
    return bool;
  }, []);

  const scrollHandler = useCallback(() => {
    setInView(isInView());
  }, [isInView]);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    console.log("render");
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isInView, scrollHandler]);

  return (
    <CSSTransition
      timeout={600}
      in={inView}
      classNames={{
        appear: "animate__animated animate__fadeInUp",
        enter: "animate__animated animate__flipInX",
        //exit: "animate__animated animate__fadeInUp",
      }}
      mountOnEnter
      unmountOnExit
    >
      {/* <React.Fragment ref={ref}>{any}</React.Fragment> */}
      <div ref={refs}>{any}</div>
    </CSSTransition>
  );
});

export default useCSSTransition;
