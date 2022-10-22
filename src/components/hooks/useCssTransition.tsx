/*** Custom HOOK for React Transition Group
 *  BELOW ARE also the ENUM for all the animation from animate.styles
 *  using the predefined classes, help you with IDE
 */

import { CSSTransition } from "react-transition-group";
import React from "react";
interface Props {
  in: boolean;
  delay?: number;
  animation: AnimationTypes;
  children?: React.ReactNode | React.ReactElement | JSX.Element;
}
const CSSTransitionWrapper = (props: Props): JSX.Element => {
  const classes = props.delay
    ? `animate__animated ${props.animation} animation_delay-${props.delay}`
    : `animate__animated ${props.animation}`;

  return (
    <CSSTransition
      in={props.in}
      timeout={{ appear: 1800, enter: 1800, exit: 1800 }}
      classNames={{
        enter: classes,
        //exit: "animate__animated animate__fadeInUp",
      }}
      mountOnEnter
    >
      <>{props.children}</>
    </CSSTransition>
  );
};

export default CSSTransitionWrapper;

// Enum for Animations
export enum AnimationTypes {
  BOUNCE = "animate__bounce",
  FLASH = "animate__flash",
  PULSE = "animate__pulse",
  RUBBERBAND = "animate__rubberBand",
  SHAKEX = "animate__shakeX",
  SHAKEY = "animate__shakeY",
  SWING = "animate__swing",
  TADA = "animate__tada",
  WOBBLE = "animate__wobble",
  JELLO = "animate__jello",
  HEARTBEAT = "animate__heartBeat",
  BACKINDOWN = "animate__backInDown",
  BACKINLEFT = "animate__backInLeft",
  BACKINRIGHT = "animate__backInRight",
  BACKINUP = "animate__backInUp",
  BOUNCEIN = "animate__bounceIn",
  BOUNCEINDOWN = "animate__bounceInDown",
  BOUNCEINLEFT = "animate__bounceInLeft",
  BOUNCEINRIGHT = "animate__bounceInRight",
  BOUNCEINIP = "animate__bounceInUp",
  BOUNCEOUT = "animate__bounceInUp",
  BOUNCEOUTDOWN = "animate__bounceOutDown",
  BOUNCEOUTLEFT = "animate__bounceOutLeft",
  BOUNCEOUTRIGHT = "animate__bounceOutRight",
  BOUNCEOUTUP = "animate__bounceOutUp",
  FADEIN = "animate__fadeIn",
  FADEINDOWN = "animate__fadeInDown",
  FADEINDOWNBIG = "animate__fadeInDownBig",
  FADEINLEFT = "animate__fadeInLeft",
  FADEIFLEFTBIG = "animate__fadeInLeftBig",
  FADEINRIGHT = "animate__fadeInRight",
  FADEINRIGHTBIG = "animate__fadeInRightBig",
  FADEINUP = "animate__fadeInUp",
  FADEINUPBIG = "animate__fadeInUp",
  FADEINTOPLEFT = "animate__fadeInTopLeft",
  FADEINTOPRIGHT = "animate__fadeInTopRight",
  FADEINBOTTOMLEFT = "animate__fadeInBottomLeft",
  FADEINBOTTOMRIGHT = "animate__fadeInBottomRight",
  FADEOUT = "animate__fadeOut",
  FADEOUTDOWN = "animate__fadeOutDown",
  FADEOUTDOWNBIG = "animate__fadeOutDownBig",
  FADEOUTLEFT = "animate__fadeOutDownBig",
  FADEOUTLEFTBIG = "animate__fadeOutLeftBig",
  FADEOUTRIGHT = "animate__fadeOutRight",
  FADEOUTRIGHTBIG = "animate__fadeOutRightBig",
  FADEOUTUP = "animate__fadeOutUp",
  FADEOUTUPBIG = "animate__fadeOutUpBig",
  FADEOUTTOPLEFT = "animate__fadeOutTopLeft",
  FADEOUTTOPRIGHT = "animate__fadeOutTopRight",
  FADEOUTBOTTOMRIGHT = "animate__fadeOutBottomRight",
  FADEOUTBOTTOMLEFT = "animate__fadeOutBottomLeft",
  FLIP = "animate__flip",
  FLIPINX = "animate__flipInX",
  FLIPINY = "animate__flipInY",
  FLIPOUTX = "animate__flipOutX",
  FLIPOUTY = "animate__flipOutY",
  LIGHTSPEEDINRIGHT = "animate__lightSpeedInRight",
  LIGHTSPEEDINLEFT = "animate__lightSpeedInLeft",
  LIGHTSPEEDOUTRIGHT = "animate__lightSpeedOutRight",
  ROTATEIN = "animate__rotateIn",
  ROTATEINDOWNLEFT = "animate__rotateInDownLeft",
  ROTATEINDOWNRIGHT = "animate__rotateInDownRight",
  ROTATEINUPLEFT = "animate__rotateInUpLeft",
  ROTATEINUPRIGHT = "animate__rotateInUpRight",
  ROTATEOUT = "animate__rotateOut",
  ROTATEOUTDOWNLEFT = "animate__rotateOutDownLeft",
  ROTATEOUTDOWNRIGHT = "animate__rotateOutDownRight",
  ROTATEOUTUPLEFT = "animate__rotateOutUpLeft",
  ROTATEOUTUPRIGHT = "animate__rotateOutUpRight",
  HINGE = "animate__hinge",
  JACKINTHEBOX = "animate__jackInTheBox",
  ROLLIN = "animate__rollIn",
  ROLLOUT = "animate__rollOut",
  ZOOMIN = "animate__zoomIn",
  ZOOMINDOWN = "animate__zoomInDown",
  ZOOMINLEFT = "animate__zoomInLeft",
  ZOOMINRIGHT = "animate__zoomInRight",
  ZOOMINUP = "animate__zoomInUp",
  ZOOMOUT = "animate__zoomOut",
  ZOOMOUTDOWN = "animate__zoomOutDown",
  ZOOMOUTLEFT = "animate__zoomOutLeft",
  ZOOMOUTRIGHT = "animate__zoomOutRight",
  ZOOMOUTUP = "animate__zoomOutUp",
  SLIDEINDOWN = "animate__slideInDown",
  SLIDEINLEFT = "animate__slideInLeft",
  SLIDEINRIGHT = "animate__slideInRight",
  SLIDEINUP = "animate__slideInUp",
  SLIDEOUTDOWN = "animate__slideOutDown",
  SLIDEOUTLEFT = "animate__slideOutLeft",
  SLIDEOUTRIGHT = "animate__slideOutRight",
  SLIDEOUTUP = "animate__slideOutUp",
}
