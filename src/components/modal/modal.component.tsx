import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../portals/backdrop.component";
import TransitionFadeInUpDown from "../transition-wrappers/transitionfade-in-out";
import { StyledModalContainer, StyledModalContent } from "./modal.styles";

type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
  show: boolean;
};

const portalElement = document.getElementById("overlays") as HTMLElement;
const Modal = ({ onClose, children, show }: ModalProps) => {
  const onCloseHandler = () => {
    onClose();
  };
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <TransitionFadeInUpDown in={show} type="fade">
            <StyledModalContainer onClick={onCloseHandler}>
              <StyledModalContent>{children}</StyledModalContent>
            </StyledModalContainer>
          </TransitionFadeInUpDown>
          <Backdrop onClick={onCloseHandler} />
        </>,
        portalElement
      )}
    </>
  );
};

export default Modal;
