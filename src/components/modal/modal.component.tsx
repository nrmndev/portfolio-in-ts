import React from "react";
import ReactDOM from "react-dom";

import TransitionFadeInUpDown from "../transition-wrappers/transitionfade-in-out";
import {
  StyledModalContainer,
  StyledModalContent,
  StyledModalBackdrop,
  StyledModalClose,
} from "./modal.styles";

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
            <StyledModalContainer>
              <StyledModalClose onClick={onCloseHandler}>X</StyledModalClose>
              <StyledModalContent>{children}</StyledModalContent>
            </StyledModalContainer>
            <StyledModalBackdrop onClick={onCloseHandler} />
          </TransitionFadeInUpDown>
        </>,
        portalElement
      )}
    </>
  );
};

export default Modal;
