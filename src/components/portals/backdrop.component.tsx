import ReactDOM from "react-dom";
import StyledBackdrop from "./backdrop.styles";

type BackdropProps = {
  onClick: () => void;
};

const Backdrop = ({ onClick }: BackdropProps): React.ReactPortal => {
  // const hideItemHandler = () => {
  //   document.querySelector("body")!.classList.remove("open");
  // };

  return ReactDOM.createPortal(
    <StyledBackdrop onClick={onClick} />,
    document.getElementById("overlays") as HTMLElement
  );
};
export default Backdrop;
